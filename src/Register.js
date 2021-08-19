import React, { useState, useEffect } from 'react';

const LoginPage = props => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
}

function Register() {
  return (
    <div>
      <h1>Register Page to Restourant System</h1>
      <form>
        <label>
          UserName:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Password:
          <input type="text" name="password" />
        </label>

        <br />
        <label>
          Password Again:
          <input type="text" name="passwordAgain" />
        </label>
        <br />
        <a href="/">Back To Login Page</a>
        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        <input type="submit" value="Register" />


      </form>
    </div>
  );
}

export default Register;
