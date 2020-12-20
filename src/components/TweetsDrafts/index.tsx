import React from 'react'
import { useToasts } from 'react-toast-notifications'
import { useQueryThreads, useDeleteThread } from '../../apollo/hooks'


const Home = ({ onSelectThread, drafts, loading }: any) => {

   // console.log({ data, loading, error })
   const { addToast } = useToasts()

   const [deleteThread] = useDeleteThread()

   if (loading) {
      return <div>loading</div>
   }

   return (
      <div className="flex flex-col">
         {
            drafts.map((t: any, i: number) => (
               <div
                  key={t._id}
                  className={`p-3 ${i < drafts.length - 1 && "border-b border-gray-700"}`}
               >
                  <div className="relative p-3 group flex rounded hover:bg-black ">
                     <button
                        onClick={() => onSelectThread(t)}
                        className="flex-1 focus:outline-none"
                     >
                        <div className="flex-1 text-left">
                           {t.tweets[0].text}
                        </div>
                     </button>
                     <button
                        className="absolute right-0 mr-2 text-red-500 w-6 h-6 bg-black hidden group-hover:block"
                        onClick={() => {
                           deleteThread({
                              variables: {
                                 _id: t._id
                              }
                           }).then(() => {
                              addToast('deleted!', { appearance: 'success', autoDismiss: true })
                           })
                        }}
                     >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                     </button>
                  </div>
               </div>
            ))
         }

      </div>
   )
}

export default Home