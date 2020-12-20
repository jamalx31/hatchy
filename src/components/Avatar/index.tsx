import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client';

import { USER } from '../../apollo/queries'


const Avatar = ({ className, alt }: any) => {

   const { data }: any = useQuery(USER, {})

   return (
      <img className={`object-cover rounded-full ${className}`} src={data?.currentUser?.photo || "https://pbs.twimg.com/profile_images/1272652105132605440/Ej6TuHI6_400x400.jpg"} alt={alt} />
   );
}

export default Avatar