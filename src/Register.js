import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

const Login = props => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [passwordAgain, setPasswordAgain] = useState();

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
    if(password!=null&&passwordAgain!=null&&password.length>6){
      if(password===passwordAgain){
        axios({
          method: 'post',
          url: 'http://localhost:8080/api/1/user',
          data: creds,
          config: { headers: {'Content-Type': 'multipart/form-data' }}
          })
          .then(function (response) {
              push('/User');

              console.log(response.data);
          })
          .catch(function (error) {
              //handle error
              setError(error.response.data.message);
              console.log(error.response.data);
          });
      }else{
        setError("Your passwords dont match");
        
      }
  }else {
    setError("Your password must be grater than 6");
  }
}
  
  return (
    
    <div>
      <h1>Register Page to Consumer</h1>
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
        <br />
        <label>
          Password Again:
          <input type="password" name="passwordAgain"  onChange={event => setPasswordAgain(event.target.value)} />
        </label>
        {error && <div className="alert alert-danger">{error}</div>}
        <button onClick={onClickLogin}  >Register</button>
        
      </form>
    </div>
  );
};

export default Login;
