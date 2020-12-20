import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

import TweetEditor from '../../components/TweetEditor'
// import TweetsTimeline from '../../components/TweetsTimeline'
import TweetsDrafts from '../../components/TweetsDrafts'
import { useQueryThreads } from '../../apollo/hooks'


const Home = ({ toggleDrawer }: any) => {
   const [thread, setThread] = useState(null)
   const [tab, setTab] = useState('compose')
   const { data, loading, error } = useQueryThreads()

   const isXl = useMediaQuery({ query: '(max-width: 1224px)' })

   useEffect(() => {
      if (!isXl) {
         setTab('drafts')
      } else {
         setTab('compose')

      }

   }, [isXl])

   return (
      <div className="px-6">
         <div className="flex -mx-6">
            <div className="hidden xl:block w-full xl:w-1/2 xl:px-6 ">
               <TweetEditor thread={thread} />
            </div>

            <div className="w-full xl:w-1/2 xl:mx-6 rounded bg-gray-800">
               <ul className="flex justify-end xl:justify-start">
                  <li className="flex items-center md:hidden -mb-px mr-1">
                     <button className={`text-gray-300 h-8 w-8 mx-2`} onClick={toggleDrawer}>
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                     </button>
                  </li>
                  <li className="flex-1"></li>
                  <li className="xl:hidden -mb-px mr-1">
                     <button className={`tab ${tab === 'compose' && 'selected-tab'}`} onClick={() => setTab('compose')}>
                        Compose
                     </button>
                  </li>
                  <li className="-mb-px mr-1">
                     <button className={`tab ${tab === 'drafts' && 'selected-tab'}`} onClick={() => setTab('drafts')}>
                        Drafts ({data?.threads?.drafts?.length})
                     </button>
                  </li>
                  <li className="mr-1">
                     <button
                        className={`cursor-not-allowed tab ${tab === 'queue' && 'selected-tab'}`}
                     // onClick={() => setTab('queue')}
                     >
                        Queue (WIP)
                     </button>
                  </li>
               </ul>
               <div className="">

                  {tab === 'compose' && <TweetEditor thread={thread} />}
                  {tab === 'drafts' && <div className="bg-gray-800 text-gray-500 p-0  rounded">
                     <TweetsDrafts
                        drafts={data?.threads?.drafts}
                        loading={loading}
                        onSelectThread={setThread}
                     />
                  </div>}


                  {/* <div className="mb-4 text-white ">
                     <div className="text-xl font-medium mb-2">
                        Today
                     </div>
                     <div className="text-gray-500">
                        Nothing yet, create a tweet
                     </div>
                  </div>
                  <div className="mb-4 text-white ">
                     <div className="text-xl font-medium mb-2">
                        Tomorrow
                     </div>
                     <div className="text-gray-500">
                        Nothing yet, create a tweet
                     </div>
                  </div> */}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Home