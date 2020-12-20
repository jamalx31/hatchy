import { useQuery, useMutation } from "@apollo/client";
import produce from "immer";

import { SAVE_THREAD, POST_TWEET, UPDATE_OR_CREATE_THREAD, DELETE_THREAD } from "../mutations";
import { THREADS } from "../queries";

export const useQueryThreads = () => {
  return useQuery(THREADS);
};

export const useUpdateOrCreateThread = () => {
  return useMutation(UPDATE_OR_CREATE_THREAD, {
    refetchQueries: [{ query: THREADS }],
    // update(cache, { data: { updateOrCreateTweet: tweet } }) {
    //   const { tweets } = cache.readQuery({ query: TWEETS }) as any;
    //   const newTweets = produce(tweets, (draft: any) => {
    //     if (tweet.scheduled) {
    //       // TODO
    //       draft.drafts = draft.drafts.filter((t: any) => t._id !== tweet._id);
    //       const oldTweetIndex = draft.scheduled.findIndex(
    //         (t: any) => t._id === tweet._id
    //       );
    //       if (oldTweetIndex > -1) {
    //         draft.scheduled[oldTweetIndex] = tweet;
    //       } else {
    //         draft.scheduled.push(tweet);
    //       }
    //     } else {
    //       draft.scheduled = draft.scheduled.filter(
    //         (t: any) => t._id !== tweet._id
    //       );
    //       const oldTweetIndex = draft.drafts.findIndex(
    //         (t: any) => t._id === tweet._id
    //       );
    //       if (oldTweetIndex > -1) {
    //         draft.drafts[oldTweetIndex] = tweet;
    //       } else {
    //         draft.drafts.push(tweet);
    //       }
    //     }
    //   });

    //   cache.writeQuery({
    //     query: TWEETS,
    //     data: { tweets: newTweets },
    //   });
    // },
  });
};

export const usePostTweet = () => {
  return useMutation(POST_TWEET, {
    //  update(cache, { data: { signup } }) {
    //    cache.writeQuery({
    //      query: USER,
    //      data: { currentUser: signup.user },
    //    });
    //  },
  });
};

export const useSaveThread = () => {
  return useMutation(SAVE_THREAD, {
    //  update(cache, { data: { signup } }) {
    //    cache.writeQuery({
    //      query: USER,
    //      data: { currentUser: signup.user },
    //    });
    //  },
  });
};
export const useDeleteThread = () => {
  return useMutation(DELETE_THREAD, {
    refetchQueries: [{ query: THREADS }], 
    //  update(cache, { data: { signup } }) {
    //    cache.writeQuery({
    //      query: USER,
    //      data: { currentUser: signup.user },
    //    });
    //  },
  });
};
