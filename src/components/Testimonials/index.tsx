import React, { useState } from 'react'


const Hero = () => {

   return (
      <div className="bg-teal-100">
         <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-32 lg:px-8 lg:flex lg:items-center lg:justify-center">

            <div className="h-40 w-40 lg:h-64 lg:w-64 mr-12">
               <img className="h-full w-full object-cover object-right rounded-full" src="https://lumiere-a.akamaihd.net/v1/images/Yoda-Retina_2a7ecc26.jpeg?region=0%2C0%2C1536%2C864" alt="yoga" />
            </div>

            <div className="max-w-lg   ">
               <div className="text-gray-700 mb-8">
                  <svg className=" fill-current" version="1.1" x="0px" y="0px"
                     xmlns="http://www.w3.org/2000/svg"
                     width="40px" height="40px" viewBox="0 0 508.044 508.044">
                     <g>
                        <path d="M0.108,352.536c0,66.794,54.144,120.938,120.937,120.938c66.794,0,120.938-54.144,120.938-120.938
                     s-54.144-120.937-120.938-120.937c-13.727,0-26.867,2.393-39.168,6.61C109.093,82.118,230.814-18.543,117.979,64.303
                     C-7.138,156.17-0.026,348.84,0.114,352.371C0.114,352.426,0.108,352.475,0.108,352.536z"/>
                        <path d="M266.169,352.536c0,66.794,54.144,120.938,120.938,120.938s120.938-54.144,120.938-120.938S453.9,231.599,387.106,231.599
                     c-13.728,0-26.867,2.393-39.168,6.61C375.154,82.118,496.875-18.543,384.04,64.303C258.923,156.17,266.034,348.84,266.175,352.371
                     C266.175,352.426,266.169,352.475,266.169,352.536z"/>
                     </g>
                  </svg>
               </div>

               <div className="text-4xl lg:text-5xl leading-none text-gray-800 font-semibold mb-6">
                  Made sharing my teaching and building an army of Twitter jedis so much easier, Hatchy has.
               </div>
               <div className="text-xl font-bold">
                  The Force
               </div>
               <div>
                  <span className="font-medium">Yoda</span>, Jedi Master
               </div>
            </div>
         </div>
      </div >
   );
}

export default Hero