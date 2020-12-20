import React from 'react'
import { useQuery, useMutation } from '@apollo/client';
// import {
//    useHistory,
//    useLocation
// } from "react-router-dom";


// import styled from 'styled-components/macro'

// import { LOGIN } from './mutation'
// import { USER } from '../../apollo/queries'
import { TOKEN } from '../../apollo/queries'


const Demo = () => {

   // const [login] = useMutation(LOGIN);
   const { refetch } = useQuery(TOKEN, { skip: true });
   // let history = useHistory();
   // let location = useLocation();

   const handleTwitterLoging = (values: any) => {

      refetch().then(({ data }: any) => {
         // console.log({ data })
         window.location.href = `https://api.twitter.com/oauth/authenticate?oauth_token=${data.reverse.oauth_token}`
      })
   };



   return (
      <div className="flex h-screen">
         <div className="xl:w-2/3 w-full flex justify-center items-center">
            <div className="m-2">
               <div className="text-2xl sm:text-4xl mb-4">
                  Let's get your account set up
               </div>
               <button
                  className="flex items-center bg-twitter text-white text-sm  font-semibold tracking-wide p-3 rounded"
                  onClick={handleTwitterLoging}
               >
                  <div className="w-5 h-5 mr-2 text-white ">
                     <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                  </div>
                  Sign in with Twitter
               </button>
            </div>
         </div >

         <div className="hidden xl:flex w-1/3 bg-teal-200  justify-center items-center">
            <div className="text-gray-800 text-center">
               <div className="max-w-sm text-2xl font-semibold mb-5">
                  “Hatchy helps us build a better model of content that generates more engagement.”
               </div>
               <div className="h-32 w-32 m-auto mb-2">
                  <img className="h-full w-full object-cover object-right rounded-full" src="https://upload.wikimedia.org/wikipedia/en/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg" alt="yoga" />
               </div>
               <div>
                  <div className="font-semibold text-lg">
                     Princess Leia
                  </div>
               </div>
            </div>

         </div>
      </div>


   );
};

export default Demo