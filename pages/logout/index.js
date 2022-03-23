import React, { useContext, useEffect } from 'react';
import { useRouter } from "next/router";
import { userContext } from '../_app';

const Logout = () => {

    const router = useRouter();
  const [loggedInUser, setloggedInUser] = useContext(userContext);
  
  useEffect(()=>{ 

    localStorage.setItem("email", undefined);
    localStorage.setItem("name", '');
    setloggedInUser({})
  
    router.push('/login')
   }, [])
  
    return (
        <div>
            loading.....
        </div>
    );
};

export default Logout;