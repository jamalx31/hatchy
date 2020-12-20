const axios = require("axios");
const { get, pick } = require("lodash");

const User = require("../models/user");
const Thread = require("../models/thread");
const { produce } = require("immer");

const updateOrCreateThread = async ({ threadInput }, ctx) => {
  const user = ctx.getUser();

  // console.log({ threadInput });

  if (threadInput._id) {
    return Thread.findOneAndUpdate(
      { _id: threadInput._id, owner: user._id },
      { ...threadInput }
    );
  }

  return Thread.create({ ...threadInput, owner: user._id });
};

const deleteThread = async ({ _id }, ctx) => {
  const user = ctx.getUser();
  const res = await Thread.remove({ _id, owner: user._id });
  return res.n === 1;
};

const getUserTweets = async (args, ctx, query) => {
  const user = ctx.getUser();
  const q = {};
  if (query.scheduled) {
    q.timeToPost = { $ne: null };
  } else {
    q.timeToPost = null;
  }
  return Thread.find({ owner: user._id, ...q });
};

module.exports = {
  updateOrCreateThread,
  getUserTweets,
  deleteThread,
};
