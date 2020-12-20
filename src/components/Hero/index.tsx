import React, { useState } from 'react'

import TweetEditor from '../DemoTweetEditor'

import './index.css'

const Hero = () => {

   const [email, setEmail] = useState('')
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState('')
   const [sucess, setSucess] = useState(false)

   const joinWaitingList = () => {

      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if(!regex.test(email)) {
         setError("Please enter a valid email.")
         return
      }

      const data = new URLSearchParams();
      data.append('fields[email]', email);
      data.append('ml-submit', "1");
      data.append('ajax', "1");

      setLoading(true)
      fetch("//static.mailerlite.com/webforms/submit/m6a0b8", {
         method: "POST",
         body: data
      }).then(() => {
         setSucess(true)
         setLoading(false)
         setError("")
      }).catch(() => {
         setLoading(false)
         setError("Oops, somehting went wrong")
      })
   }

   return (
      <section className="pt-12 pb-12 sm:py-32 bg-gradient-to-b from-teal-100 text-center">
         <div className="container flex flex-wrap lg:flex-no-wrap m-auto px-4 sm:px-6 lg:px-8">
            <div className="flex w-full lg:w-2/5 flex-col justify-center items-center lg:items-start lg:text-left">
               <h1
                  className="mb-6 leading-tight text-3xl sm:text-4xl font-bold "
               >
                  Grow your Twitter audience & monetize it.
               </h1>

               <h2 className="mb-8 text-gray-900 text-md sm:text-xl leading-relaxed font-light">
                  Hatchy analyzes your followers to find the best time to post and maximize engagment.
               </h2>

               <div className="w-full mb-6">
                  {
                     sucess ||
                     <>
                        <div className=" text-gray-900 font-semibold mb-2">
                           Join waiting list for early access
                           <span className="text-teal-700 ml-1">→</span>
                        </div>
                        <div className="w-full flex">
                           <input value={email} onChange={e => setEmail(e.target.value)} className="flex-1 bg-gray-100 p-3 rounded-lg border-2 border-teal-700 mr-2 outline-none" />
                           <button
                              // href=""
                              disabled={loading}
                              onClick={joinWaitingList}
                              className={`${loading ? 'cursor-not-allowed' : ''} flex items-center bg-teal-500 hover:bg-teal-700 justify-center shadow-md space-x-3 py-2 px-4 rounded-lg button-shadow button-outline text-white font-medium text-xl`}>
                              Join
                           </button>
                        </div>
                        {
                           error &&
                           <div className=" text-red-600 font-semibold mt-2">
                              <span role="img" aria-label="party">😥️</span>{' '}{error}.
                           </div>
                        }
                     </>
                  }
                  {
                     sucess &&
                     <div className="text-xl text-white bg-teal-600 font-bold tracking-wide p-5 rounded-md">
                        <span role="img" aria-label="party">🎉️</span> You are in! Check your email to confirm.
                     </div>
                  }
               </div>
               <div>
                  <ul className="flex flex-wrap justify-center lg:justify-start items-center ">
                     <li className="flex justify-center items-center mr-8 mb-2 font-light text-gray-700 line-through">
                        <svg className="h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        No credit card required
                     </li>
                     <li className="flex justify-center items-center mr-8 mb-2 font-light text-gray-700 line-through">
                        <svg className="h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        14-days free trail
                     </li>
                     <li className="flex justify-center items-center mr-8 mb-2 font-light text-gray-700 line-through">
                        <svg className="h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Cancel anytime
                     </li>
                     <li className="flex justify-center items-center mr-8 mb-2 font-bold underline text-gray-700 ">
                        <svg className="h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Free for beta
                     </li>
                  </ul>
               </div>
            </div>
            <div className="hidden sm:block cards-container w-full mt-10 lg:mt-0 lg:w-3/5 items-center justify-center">
               <img className="card" src="/static/img/new-analytics.png" alt="" />
               {/* <img className="card" src="/static/img/new-analytics-1.png" alt="" /> */}
               <div className="card editor shadow-2xl" >
                  <TweetEditor thread={{ tweets: [{ text: "Let me introduce you to Hatchy!" }, { text: "The best tool to schedule your tweets & threads" }] }} />
               </div>
               {/* <img className="w-full mt-12 ml-20 border-gray-700 border " src="/static/img/new-analytics.png" alt="growth-graph" /> */}
            </div>
         </div>
      </section>
   );
}

export default Hero