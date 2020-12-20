import React, { useState, useEffect } from 'react'

import Logo from '../Logo'


const Dev = () => {
   const [isOpen, setIsOpen] = useState(false)
   const [atTop, setAtTop] = useState(true)

   const handleScroll = (e: any) => {
      setAtTop(window.pageYOffset === 0)
   };


   useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', () => handleScroll);
      };
   }, [])

   return (
      <header className={` z-50 sticky top-0 w-full sm:px-4 ${atTop ? "sm:py-6 bg-teal-100" : "bg-white shadow-xs sm:py-2 "} duration-300`} >
         <div className="w-full max-w-screen-xl mx-auto sm:flex sm:justify-between sm:items-center ">
            <div className="flex justify-between items-center px-4 py-3 sm:p-0" >
               <Logo className="text-teal-800" />

               <div className="sm:hidden">
                  <button
                     className="block text-gray-700 hover:text-black focus:text-black focus:outline-none" type="button"
                     onClick={() => setIsOpen(!isOpen)}
                  >
                     <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                        {isOpen && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />}
                        {isOpen || <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
                     </svg>
                  </button>
               </div>
            </div>

            <div className={`${isOpen ? 'block' : 'hidden'} px-2 pt-2 pb-4 sm:flex sm:p-0`}>
               {/* <a href="/#" className="mt-1 block px-4 py-1 text-xl font-light tracking-wide text-black rounded hover:text-teal-500 sm:m-2">About</a>
               <a href="/#" className="mt-1 block px-4 py-1 text-xl font-light tracking-wide text-black rounded hover:text-teal-500 sm:m-2">Changelog</a>
               <a href="/#" className="mt-1 block px-4 py-1 text-xl font-light tracking-wide text-black rounded hover:text-teal-500 sm:m-2">Pricing</a> */}
            </div>

            <div>
               {/* <a href="/login" className={`${isOpen ? 'block' : 'hidden'} block px-5 py-1 text-teal-500  text-xl font-medium rounded border border-teal-500 hover:bg-teal-500 hover:text-white sm:ml-2 sm:block`}>Login</a> */}
            </div>
         </div>
      </header>
   );
}

export default Dev