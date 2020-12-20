import React, { useState } from 'react'


const Hero = () => {

   return (
      <footer className="my-12">
         <div className="flex flex-wrap max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-16">
            <div className="flex-auto p-4">
               <div className="text-xl font-bold mb-4">
                  Hatchy
               </div>
               <div className="max-w-xs font-light">
                  Plan, draft, and save tweets to post higher quality content that will grow your audience
               </div>
               <div className="mt-6 mb-1 text-black hover:text-teal-500  ">
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
               </div>
               <div className="italic text-gray-600">
                  Let's Connect
               </div>
            </div>
            <div className="flex-1 p-4">
               <div className="text-md font-semibold mb-4">
                  Features
               </div>
               <ul>
                  <li className="mb-2 text-gray-600 font-medium hover:text-gray-900">
                     Schedule tweets & threads
               </li>
                  <li className="mb-2 text-gray-600 font-medium hover:text-gray-900">
                     Evergreen Tweets
               </li>
                  <li className="mb-2 text-gray-600 font-medium hover:text-gray-900">
                     Tweet to Instagram
                  </li>
                  <li className="mb-2 text-gray-600 font-medium hover:text-gray-900">
                     Quote to Photo
                  </li>
               </ul>
            </div>
            <div className="flex-1 p-4">
               <div className="text-md font-semibold mb-4">
                  Resources
               </div>
               <ul>
                  <li className="mb-2 text-gray-600 font-medium hover:text-gray-900">
                     Blog (coming soon)
               </li>
                  <li className="mb-2 text-gray-600 font-medium hover:text-gray-900">
                     Help Center
               </li>
               </ul>
            </div>
            <div className="flex-1 p-4">
               <div className="text-md font-semibold mb-4">
                  Company
                </div>
               <ul>
                  <li className="mb-2 text-gray-600 font-medium hover:text-gray-900">
                     Our Story
               </li>
                  <li className="mb-2 text-gray-600 font-medium hover:text-gray-900">
                     Open Startup
               </li>
                  <li className="mb-2 text-gray-600 font-medium hover:text-gray-900">
                     Pricing
               </li>
                  <li className="mb-2 text-gray-600 font-medium hover:text-gray-900">
                     Privacy Policy
               </li>
               </ul>
            </div>
            <div className="my-8 w-full h-px bg-gray-300"></div>
            <div className="flex flex-wrap">
               <span className="flex-1 p-2 text-gray-600">&copy; 2020 Hatchy. Made with <span role="img" aria-label="yoga"> 🤪 / 💩 / 😂 / ❤️ </span>
                  by @jamalx31
               </span>
            </div>
         </div>
      </footer>
   );
}

export default Hero