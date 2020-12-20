const jwt = require("jsonwebtoken");
const Twit = require("twit");
const request = require("request");
const User = require("../models/user");
const Team = require("../models/team");
const FeedbackService = require("../services/FeedbackService");
const UserService = require("../services/UserService");
const FeatureService = require("../services/FeatureService");
const PersonService = require("../services/PersonService");
const TweetService = require("../services/TweetService");

const resolvers = {
  Feedback: {
    person({ person }) {
      return PersonService.findOneById(person);
    },
  },
  User: {
    team({ team }) {
      return Team.findOne({ _id: team });
    },
  },
  ThreadsPayload: {
    drafts: (_, args, ctx) => {
      return TweetService.getUserTweets(args, ctx, { scheduled: false });
    },
    scheduled: (_, args, ctx) => {
      return TweetService.getUserTweets(args, ctx, { scheduled: true });
    },
  },
  Query: {
    currentUser: (parent, args, context) => context.getUser(),
    feedbacks: (parent, args, context) => FeedbackService.findAll(),
    widget: (parent, args, context) => UserService.getConfig(context),
    threads: (_, args, ctx) => ctx,

    reverse: async (parent, { email, password }, context) => {
      const a = await new Promise((resolve, reject) => {
        request.post(
          {
            url: "https://api.twitter.com/oauth/request_token",
            oauth: {
              callback: process.env.DOMAIN + "/auth/twitter/redirect",
              consumer_key: process.env.TWITTER_CONSUMER_KEY,
              consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
            },
          },
          function (err, r, body) {
            // console.log(process.env.DOMAIN + "/auth/twitter/redirect", {
            //   err,
            //   r,
            //   body,
            // });
            if (err) {
              return reject(err.message);
            }
            // console.log({jsonStr})
            resolve(Object.fromEntries(new URLSearchParams(body)));
          }
        );
      });

      return a;
    },
  },
  Mutation: {
    updateOrCreateThread: (_, args, ctx) => {
      return TweetService.updateOrCreateThread(args, ctx);
    },
    deleteThread: (_, args, ctx) => {
      return TweetService.deleteThread(args, ctx);
    },
    feedback(_, args, ctx) {
      return FeedbackService.recordFeedback(args, ctx);
    },
    signup: async (
      parent,
      { companyName, firstName, lastName, email, password },
      context
    ) => {
      // const existingUsers = context.User.getUsers();
      const userWithEmailAlreadyExists = !!(await User.findOne({ email }));

      if (userWithEmailAlreadyExists) {
        throw new Error("User with email already exists");
      }

      const team = await Team.create({
        name: companyName,
      });

      const user = await User.create({
        email,
        password,
        firstName,
        lastName,
        team: team._id,
      });

      const token = jwt.sign({}, process.env.JWT_SECRET, {
        algorithm: "HS256",
      });
      // console.log('token:', token)

      await team.update({ $addToSet: { members: user._id }, token });

      context.login(user);

      return { user };
    },

    login: async (parent, { auth }, context) => {
      const twitterReq = await new Promise((resolve, reject) => {
        request.post(
          {
            url: `https://api.twitter.com/oauth/access_token?oauth_verifier`,
            oauth: {
              oauth_callback: process.env.DOMAIN + "/auth/twitter/redirect",
              consumer_key: process.env.TWITTER_CONSUMER_KEY,
              consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
              token: auth.oauth_token,
            },
            form: { oauth_verifier: auth.oauth_verifier },
          },
          function (err, r, body) {
            if (err) {
              return reject(err.message);
              // return res.send(500, { message: err.message });
            }
            return resolve(body);

            // const bodyString =
            //   '{ "' + body.replace(/&/g, '", "').replace(/=/g, '": "') + '"}';
            // const parsedBody = JSON.parse(bodyString);
            // req.body = {}
            // req.body["oauth_token"] = parsedBody.oauth_token;
            // req.body["oauth_token_secret"] = parsedBody.oauth_token_secret;
            // req.body["user_id"] = parsedBody.user_id;

            // next();
          }
        );
      });

      const tokens = Object.fromEntries(new URLSearchParams(twitterReq));
      // console.log({ twitterReq });
      // return {}

      const { user } = await context.authenticate("twitter-token", tokens);
      // console.log(">>>>>>", { user });
      context.login(user);
      return { user };
    },
    logout: (parent, args, context) => context.logout(),

    // Tweets
    postTweet: async (_, { message }, ctx) => {
      const user = ctx.getUser();
      console.log({ user });
      const fullUser = await User.findById(user._id).select({
        twitterProvider: 1,
      });
      console.log({ fullUser });

      const T = new Twit({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token: fullUser.twitterProvider.token,
        access_token_secret: fullUser.twitterProvider.tokenSecret,
        timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
        strictSSL: true, // optional - requires SSL certificates to be valid.
      });

      await T.post("statuses/update", {
        status: "hello world! posted by tweety.app (hatchy)",
      });
      return true;
    },
  },
};

module.exports = resolvers;
