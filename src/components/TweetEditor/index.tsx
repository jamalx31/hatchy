import 'emoji-mart/css/emoji-mart.css'
import React, { useEffect, useState, useRef } from "react";
import produce from "immer";
import { useToasts } from 'react-toast-notifications'

import { Picker } from 'emoji-mart'

// import moment from 'moment'

import Avatar from '../Avatar'

import { usePostTweet, useUpdateOrCreateThread } from '../../apollo/hooks'

const omitDeep = require('omit-deep')

function Home(props: any) {
   const fieldsRef = useRef([]);
   const { addToast } = useToasts()

   const [thread, setThread] = useState<any>({
      tweets: [{ text: '' }]
   })
   const [inFocus, setInFocus] = useState<any>(0)
   const [showEmoji, setShowEmoji] = useState<boolean>(false)

   const [updateOrCreateThread] = useUpdateOrCreateThread()

   useEffect(() => {
      if (props.thread) {
         setThread(omitDeep(props.thread, ['__typename']))
      }
   }, [props.thread])

   const handleDeleteField = (index: number) => {
      fieldsRef.current.splice(index, 1);
      setThread(
         produce(thread, (draft: any) => {
            draft.tweets.splice(index, 1);
         })
      );
   }

   const handleAddField = (index: number) => {
      console.log({ index })
      setThread(
         produce(thread, (draft: any) => {
            draft.tweets.splice(index + 1, 0, {
               text: "",
            });
         })
      );
      setTimeout(() => {
         (fieldsRef.current[index + 1] as any).focus();
      }, 0);
   }

   const handleChange = (e: any, index: number) => {
      setThread(
         produce(thread, (draft: any) => {
            draft.tweets[index].text = e.target.value
         })
      );

      (fieldsRef.current[index] as any).style.height = `30px`;
      (fieldsRef.current[index] as any).style.height = `${e.target.scrollHeight}px`;
   }

   const addEmoji = (emoji: any, index: number) => {
      setThread(
         produce(thread, (draft: any) => {
            draft.tweets[index].text = draft.tweets[index].text + emoji.native
         })
      );

      const textareaEl = (fieldsRef.current[index] as HTMLTextAreaElement)

      textareaEl.style.height = `30px`;
      textareaEl.style.height = `${textareaEl.scrollHeight}px`;
   }



   const handleSave = () => {
      updateOrCreateThread({
         variables: {
            threadInput: thread
         }
      }).then(() => {
         setThread({
            tweets: [{ text: '' }]
         })
         addToast('Saved successfully!', { appearance: 'success', autoDismiss: true })
      })
   }

   const handleBlur = (e: React.ChangeEvent) => {
      const currentTarget = e.currentTarget;

      // Check the newly focused element in the next tick of the event loop
      setTimeout(() => {
         // Check if the new activeElement is a child of the original container
         if (!currentTarget.contains(document.activeElement)) {
            // You can invoke a callback or add custom logic here
            setShowEmoji(false)
         }
      }, 0);
   };

   return (
      <div className="bg-gray-800 text-white p-4 rounded">

         {
            thread.tweets.map((t: any, i: number) => {
               return (
                  <div key={i} className="flex pb-2">
                     <div className="mr-4 flex flex-col justify-start items-center">
                        <Avatar className={`${inFocus === i ? "" : "dim"} h-12 w-12 mb-1`} />
                        <div className="bg-gray-500 flex-1 w-px" />
                     </div>
                     <div className="flex-1">
                        <div className="flex relative mb-3">
                           <textarea placeholder="What's happening"
                              value={t.text}
                              ref={(ref) => ((fieldsRef.current as any)[i] = ref)}
                              onChange={(e: any) => handleChange(e, i)}
                              onFocus={() => setInFocus(i)}
                              className={`${inFocus === i ? 'text-white' : 'text-gray-500'} w-full textarea outline-none p-2 bg-transparent`} />
                           {
                              !t.text && !!i &&
                              <button className="absolute right-0 h-5 w-5 text-teal-500"
                                 onClick={() => handleDeleteField(i)}
                              >
                                 <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                 </svg>
                              </button>
                           }
                        </div>
                        {
                           inFocus === i &&
                           <div className="flex items-center">
                              <div className="w-6 h-6 text-teal-800 mr-2 cursor-not-allowed">
                                 <svg className="fill-current" viewBox="0 0 24 24" ><g><path d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z"></path><circle cx="8.868" cy="8.309" r="1.542"></circle></g></svg>
                              </div>
                              <div className="w-6 h-6 text-teal-800 mr-2 cursor-not-allowed">
                                 <svg className="fill-current" viewBox="0 0 24 24"><g><path d="M19 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H19zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1C9.9 9.2 9 8.8 8.1 8.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1 0 1.8-.4 2.4-1.1v-2.5H7.7v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z"></path><path d="M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z"></path></g></svg>
                              </div>
                              <div className="relative w-6 h-6 text-teal-300 mr-2">
                                 <svg
                                    className="fill-current cursor-pointer"
                                    onClick={() => setShowEmoji(!showEmoji)}
                                    viewBox="0 0 24 24" ><g><path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path><path d="M12 17.115c-1.892 0-3.633-.95-4.656-2.544-.224-.348-.123-.81.226-1.035.348-.226.812-.124 1.036.226.747 1.162 2.016 1.855 3.395 1.855s2.648-.693 3.396-1.854c.224-.35.688-.45 1.036-.225.35.224.45.688.226 1.036-1.025 1.594-2.766 2.545-4.658 2.545z"></path><circle cx="14.738" cy="9.458" r="1.478"></circle><circle cx="9.262" cy="9.458" r="1.478"></circle></g></svg>
                                 {
                                    showEmoji &&
                                    <div className="absolute mt-1" onBlur={handleBlur}>
                                       <Picker autoFocus set='twitter' onSelect={(emoji) => addEmoji(emoji, i)} />
                                    </div>}
                              </div>
                              <div className="flex-1" />
                              {!!t.text
                                 && <>
                                    <div>
                                       {t.text.length}/240
                                 </div>
                                    <div className="h-8 w-px mx-3 bg-gray-600" />
                                    <button className="w-8 text-teal-500 border-teal-500 border rounded-full"
                                       onClick={() => handleAddField(i)}
                                    >
                                       <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                       </svg>
                                    </button>
                                 </>
                              }
                              <button
                                 className="text-white font-semibold bg-teal-500 rounded-full outline-none py-1 px-3 ml-3"
                                 onClick={handleSave}
                              >
                                 {"Add to queue"}
                              </button>
                           </div>
                        }
                     </div>
                  </div>
               )
            })
         }

      </div>
   );
}

export default Home