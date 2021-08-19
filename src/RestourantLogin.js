import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

const Login = props => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

 

  const onClickLogin = async event => {

    
    setError(undefined);

    const { history } = props;
    const { push } = history;


    event.preventDefault();
    const creds = {
      name,
      password
    };
    axios({
      method: 'post',
      url: 'http://localhost:8080/api/1/restourant/login',
      data: creds,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then(function (response) {
          push('/Restourant');

          console.log(response.data);
      })
      .catch(function (error) {
          //handle error
          setError(error.response.data.message);
          console.log(error.response.data);
      });
  };
   

  
  return (
    
    <div>
      <h1>Login Page to Restourants</h1>
      <form>
      
        <label>
          Name:
          <input type="text" name="name" onChange={event => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password"  onChange={event => setPassword(event.target.value)} />
        </label>
        {error && <div className="alert alert-danger">{error}</div>}
        <button onClick={onClickLogin}  >Login</button>
        
      </form>
    </div>
  );
};

export default Login;
