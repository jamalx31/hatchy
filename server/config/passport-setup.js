const passport = require("passport");
const TwitterTokenStrategy = require("passport-twitter-token");
// const keys = require("./keys");
const User = require("../api/models/user");

// serialize the user.id to save in the cookie session
// so the browser will remember the user when login
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// deserialize the cookieUserId to user in the database
passport.deserializeUser((id, done) => {
  // done(null, id);
  User.findById(id)
    .then((user) => {
      done(null, user);
    })
    .catch((e) => {
      done(new Error("Failed to deserialize an user"));
    });
});

passport.use(
  new TwitterTokenStrategy(
    {
      // options for the twitter start
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      includeEmail: true,
      callbackURL: "/auth/twitter/redirect",
    },
    async (token, tokenSecret, profile, done) => {
      console.log({ profile });
      // find current user in UserModel
      User.upsertTwitterUser(token, tokenSecret, profile, function (err, user) {
        return done(err, user);
      });
    }
  )
);
