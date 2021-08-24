import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

const Login = props => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();


  const onClickLogin = async event => {

    
    setError(undefined);

    const { history } = props;
    const { push } = history;


    event.preventDefault();
    const creds = {
      username,
      password
    };
    axios({
      method: 'post',
      url: 'http://localhost:8080/api/1/user/login',
      data: creds,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then(function (response) {
        console.log(response.data);
        localStorage.setItem('userName', response.data.username);
        localStorage.setItem('userPassword', response.data.password);
        localStorage.setItem('userId', response.data.id);
       

        push('/user');
         
      })
      .catch(function (error) {
          //handle error
          setError(error.response.data.message);
          console.log(error.response.data);
      });
  };
   

  
  return (
    
    <div>
      <h1>Login Page to Consumer</h1>
      <form>
      
        <label>
          UserName:
          <input type="text" name="username" onChange={event => setUsername(event.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password"  onChange={event => setPassword(event.target.value)} />
        </label>
        {error && <div className="alert alert-danger">{error}</div>}
        <button onClick={onClickLogin}  >Login</button>
        
      </form>
      <a href="forgetpassword">Forget Password</a>
      &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      <a href="Register">Register </a>
    </div>
  );
};

export default Login;
