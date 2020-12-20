import React, { useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import {
   useHistory,
   useLocation
} from "react-router-dom";

import Loading from '../../components/Loading'

import { LOGIN } from './mutation'
import { USER } from '../../apollo/queries'



const Demo = () => {
   const params = new URLSearchParams(useLocation().search);
   const location = useLocation();
   const history = useHistory();
   const [login] = useMutation(LOGIN);


   useEffect(() => {
      console.log({ p: params.toString() })

      // login({ variables: { auth: Object.fromEntries(params) } })
      //    .then((d) => {
      //       console.log({ d })
      //       history.push("/");
      //    }).catch(console.log)

      login({
         variables: { auth: Object.fromEntries(params) },
         update(cache, { data: { login } }) {
            cache.writeQuery({
               query: USER,
               data: { currentUser: login.user },
            });
         }
      }).then(() => {
         let { from } = location.state || { from: { pathname: "/app" } } as any;
         history.replace(from);
      }).catch(console.log)

      // fetch(`/auth/twitter?${params}`, {
      //    method: "POST",
      // })
   }, [])


   return (
      <Loading />
   );
};

export default Demo