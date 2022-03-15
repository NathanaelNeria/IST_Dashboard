import React from "react";
import LoginForm from "../../component/loginForm";
function Login() {
  return (
    <>
      <div className="container text-center pt-5">
        <div className="form-signin text-center d-flex justify-content-center">
          <LoginForm />
        </div>
      </div>
    </>
  );
}

export default Login;
