import React from 'react';

function ForgetPassword() {
    return (
      <div>
        <h1>Forget Password Page</h1>
        <form>
          <label>
            UserName:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Password:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Password Again :
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Change Password" />
        </form>
        <a href="/">Back To Login Page</a>

      </div>
    );
  }
  
  export default ForgetPassword;
  