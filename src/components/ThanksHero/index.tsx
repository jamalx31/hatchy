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
                  Thank you for joining!
               </h1>

               <h2 className="mb-8 text-gray-900 text-md sm:text-xl leading-relaxed font-light">
                  Hatchy analyzes your followers to find the best time to post and maximize engagment.
               </h2>

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