import React from 'react'
import { useQuery, useMutation } from '@apollo/client';
import {
   useHistory,
} from "react-router-dom";

import Logo from '../Logo'
import Avatar from '../Avatar'


import { USER } from '../../apollo/queries'
import { LOGOUT } from '../../apollo/mutations'

const Drawer = ({ isOpen, toggleDrawer }: any) => {

   const { data: { currentUser } }: any = useQuery(USER, {})
   const [logout] = useMutation(LOGOUT);
   let history = useHistory();

   return (
      <div className={`${isOpen ? 'flex absolute top-0 bottom-0 z-10' : 'hidden'} md:relative md:flex p-6 flex-col max-w-full bg-gray-800 border-teal-600 border-r-2`}>
         <div className="flex items-center">
            <Logo className="text-teal-100 flex-1" />
            {
               isOpen &&
               <button
                  onClick={toggleDrawer}
                  className="h-6 w-6 mr-2 text-gray-500"
               >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
               </button>
            }
         </div>
         <div className="mt-6">
            <ul className="text-sm  tracking-wide text-white font-medium ">
               <li className="flex mb-1 text-gray-500 hover:bg-black p-2 rounded">
                  <div className="h-6 w-6 mr-2 text-gray-500">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                     </svg>
                  </div>
              Analytics (coming soon)
            </li>
            </ul>
         </div>

         <div className="flex-1" />

         <div className="mt-6">
            <ul className="text-sm  tracking-wide text-white font-medium ">
               <li className="mb-1 hover:bg-black p-2 rounded">
                  <a className="flex" target="_new" href="https://twitter.com/messages/compose?recipient_id=139532624">
                     <div className="h-6 w-6 mr-2 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                     </div>
              Request a feature
              </a>
               </li>
               <li className=" mb-3 hover:bg-black p-2 rounded">
                  <a className="flex" target="_new" href="https://twitter.com/messages/compose?recipient_id=139532624">
                     <div className="h-6 w-6 mr-2 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                     </div>
              Need help?
              </a>
               </li>
            </ul>
         </div>
         <div className="group flex items-center text-white pt-4 border-t border-gray-700">
            <Avatar className="h-12 w-12 mr-4" />
            <div className="flex-1">
               <div>{currentUser.displayName}</div>
               <div className="text-xs text-gray-400">@{currentUser.username}</div>
            </div>
            <button
               className="h-6 w-6 mr-2 text-red-500 hidden group-hover:block"
               onClick={() =>
                  logout().then(() => {
                     history.replace('/');
                  }).catch(console.log)
               }
            >
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
               </svg>
            </button>
         </div>
      </div>
   )
}

export default Drawer