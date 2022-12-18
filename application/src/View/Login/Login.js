import "./Login.css";

import { useState } from "react";
import { auth } from "../../Utility/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth"
import AuthDetails from "./AuthDetails";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logIn = (e) => {

    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password);

  }

  return ( 

    <div id="login">
      <div className="form-container">
        <p className="title">Login</p>
        <br />
        <form id="login-form" onSubmit={logIn}>
          <div className="input-container">
            <label className="login-form-label" htmlFor="login-email">Email</label>
            <input className="login-input" type="email" name="login-email" id="login-email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <br /><br />
          <div className="input-container">
            <label className="login-form-label" htmlFor="login-password">Password</label>
            <input className="login-input" type="password" name="login-password" id="login-password" value={password} onChange={e=> setPassword(e.target.value)} />
          </div>
          <button id="login-button">Login</button>
        </form>
      </div>
      <AuthDetails />
    </div>
    

   );
}
 
export default Login;