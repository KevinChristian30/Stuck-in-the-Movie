import "./Login.css";

const Login = () => {
  return ( 

    <div id="login">
      <div className="form-container">
        <p className="title">Login</p>
        <br />
        <form id="login-form" action="">
          <div className="input-container">
            <label className="login-form-label" htmlFor="login-email">Email</label>
            <input className="login-input" type="email" name="login-email" id="login-email" />
          </div>
          <br /><br />
          <div className="input-container">
            <label className="login-form-label" htmlFor="login-password">Password</label>
            <input className="login-input" type="password" name="login-password" id="login-password" />
          </div>
          <button id="login-button">Login</button>
        </form>
      </div>
    </div>

   );
}
 
export default Login;