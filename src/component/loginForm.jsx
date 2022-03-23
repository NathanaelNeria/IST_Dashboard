import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";
import logo from "../assets/istlogo.jpg";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loggedin, setLoggedin] = useState(true);
  var role
  var OK = "";
  var Token = "";
  const history = useHistory();

  const handleToken = async () => {
    const body = { username: username, password: password };

    await axios.post("https://api-portal.herokuapp.com/api/v1/auth/login", body).then((resp) => {
      const json = JSON.stringify(resp.data);
      const parsed = JSON.parse(json);
      Token = parsed.data.token;
      console.log("login", Token);
      console.log('resp', resp)
    })

    if(Token !== ''){
      handleLogin()
    }
    else{
      setLoading(false)
      setLoggedin(false)
    }
    
  }

  const handleLogin = async () => {
    await axios.get("https://api-portal.herokuapp.com/api/v1/auth/admin", { headers: { Authorization: `Bearer ${Token}` } }).then((resp) => {
      const json = JSON.stringify(resp.data);
      const parsed = JSON.parse(json);
      OK = parsed.message;
      console.log(OK);
    });

    await axios.get('https://api-portal.herokuapp.com/api/v1/auth/admin', { headers: { Authorization: `Bearer ${Token}` } })
    .then(resp => {
      const json = JSON.stringify(resp.data)
      const parsed = JSON.parse(json)
      OK = parsed.message
      console.log(OK)
      role = parsed.data.role
      console.log('var role', role)
    })

    if(OK === 'OK'){
      window.location.href = '/dashboard/' + role
    }
  };
  console.log(loading);
  return (
    <>
      <form>
        <img className="mb-4" src={logo} alt="" width="300" height="300" />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input type="text" className="form-control" id="floatingInput" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          <label htmlFor="floatingInput">User Name</label>
        </div>
        <div className="form-floating">
          <input type="password" 
          className="form-control" 
          id="floatingPassword" 
          placeholder="Password" 
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)} />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        {/* <p hidden={loggedin} style='text-align:center; color:red'>Wrong username or password</p> */}

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <Button color="primary" className="px-4" onClick={handleToken} disabled={loading}>
          {loading && <Spinner component="span" size="sm" aria-hidden="true" />}
          Login
        </Button>
        <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
      </form>
    </>
  );
}

export default LoginForm;
