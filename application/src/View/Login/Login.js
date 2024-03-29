import "./Login.css";

import { useEffect, useState } from "react";
import { auth, db } from "../../Utility/firebase-config";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { SessionSetter } from "../../Utility/SessionSetter";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const [employees, setEmployees] = useState([]);

  useEffect(() => {

    const getEmployees = async () => {

      const employeesCollectionRef = collection(db, "employees");
      const data = await getDocs(employeesCollectionRef);
      setEmployees(data.docs.map((doc) => ({...doc.data(), id: doc.id})));

    }

    getEmployees();

  }, []);

  const findEmployee = () => {

    for (let i = 0; i < employees.length; i++)
      if (employees[i].EmployeeEmail === email) return employees[i];

  }

  const logIn = (e) => {

    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {

      if (!sessionStorage.getItem('EmployeeName')) 
        SessionSetter.getInstance().setUserSession(findEmployee()); 
      nav('/');
    
    }).catch((error) => {
      SessionSetter.getInstance().resetUserSession();
      alert("Wrong Credentials");
    });

  }

  const handleResetPassword = () => {

    sendPasswordResetEmail(auth, sessionStorage.getItem('EmployeeEmail'));
    alert('Password Reset Email Submitted')

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
          <div className="button-container">
            <button id="login-button">Login</button>
            <button id="login-button" type="button" onClick={handleResetPassword}>Reset Password</button>
          </div>
          
        </form>
      </div>
    </div>

   );
}
 
export default Login;