import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../Utility/firebase-config";

const AuthDetails = () => {

  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    
    const listen = onAuthStateChanged(auth, (user) =>{
      if (user){
        setAuthUser(user);
      } else{
        setAuthUser(null);
      }
    });

  }, []);

  return (
    <div></div>
  );
}

export default AuthDetails;