import React, { useState } from 'react'


const CTA = () => {

   return (
      <div className="bg-teal-100">
         <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <div className="flex-1">
               <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mb-8">
                  Ready to grow your audience?
               <br />
                  {/* <span className="text-teal-600">Start your free trial today.</span> */}
                  <span className="text-teal-600">Start using it today.</span>
               </h2>
               <div className="inline-flex rounded-md shadow">
                  <a href="/#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                     Get started
                  </a>
               </div>
            </div>
            <div className="mt-8 flex-1  lg:mt-0">
               <img className="max-w-screen" src="/static/img/growth.svg" alt="growth-graph" />
               {/* <div className="ml-3 inline-flex rounded-md shadow">
                  <a href="/#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-teal-600 bg-white hover:text-teal-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                     Learn more
        </a>
               </div> */}
            </div>
         </div>
      </div>

   );
}

export default CTA