import React, { useState } from 'react'


const Hero = () => {

   return (
      <div className="py-16 lg:py-24">
         <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
               <p className="text-base leading-6 text-teal-600 font-semibold tracking-wide uppercase">Features</p>
               <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                  A smarter way to use Twitter
               </h3>
               <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
                  Hatchy is more than a scheduling tool. Explore our features, a be a step ahead.
               </p>
            </div>

            <div className="mt-10">
               <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <li>
                     <div className="flex">
                        <div className="flex-shrink-0">
                           <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                              {/* <!-- Heroicon name: globe-alt --> */}
                              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                              </svg>
                           </div>
                        </div>
                        <div className="ml-4">
                           <h4 className="text-lg leading-6 font-medium text-gray-900">Schedule Threads</h4>
                           <p className="mt-2 text-base leading-6 text-gray-500">
                              It's as easy as scheduling a normal tweet, just pick the time and Hatchy will do the rest.
                           </p>
                        </div>
                     </div>
                  </li>
                  <li className="mt-10 md:mt-0">
                     <div className="flex">
                        <div className="flex-shrink-0">
                           <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                              {/* <!-- Heroicon name: scale --> */}
                              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                              </svg>
                           </div>
                        </div>
                        <div className="ml-4">
                           <h4 className="text-lg leading-6 font-medium text-gray-900">Twitter-like Experience</h4>
                           <p className="mt-2 text-base leading-6 text-gray-500">
                              Let's be honest, the Twitter UI is great for writing tweets and threads. Why not use it here too?
                           </p>
                        </div>
                     </div>
                  </li>
                  <li className="mt-10 md:mt-0">
                     <div className="flex">
                        <div className="flex-shrink-0">
                           <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                              {/* <!-- Heroicon name: lightning-bolt --> */}
                              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                           </div>
                        </div>
                        <div className="ml-4">
                           <h4 className="text-lg leading-6 font-medium text-gray-900">Evergreen List</h4>
                           <p className="mt-2 text-base leading-6 text-gray-500">
                              Have you heard of "idea recycling", "build once, sell twice". Basically, you shouldn't treat your content as single use plastic.
                           </p>
                        </div>
                     </div>
                  </li>
                  <li className="mt-10 md:mt-0">
                     <div className="flex">
                        <div className="flex-shrink-0">
                           <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                              {/* <!-- Heroicon name: annotation --> */}
                              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                              </svg>
                           </div>
                        </div>
                        <div className="ml-4">
                           <h4 className="text-lg leading-6 font-medium text-gray-900">Templates</h4>
                           <p className="mt-2 text-base leading-6 text-gray-500">
                              Stop wasting time thinking how to format your tweets and threads, just pick a template you like.
                           </p>
                        </div>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
}

export default Hero