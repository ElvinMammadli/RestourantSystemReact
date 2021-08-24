import React, { Component } from "react";
import axios from "axios";

export default class Userlist extends Component {
    
    state ={
        users:[],
        error:''
    };    

  componentDidMount=()=> {
    axios({
      method: "get",
      url: "http://localhost:8080/api/1/users",
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then(response=> {
        console.log(response.data);
        this.setState({
            users:response.data
        });
    })
      .catch(function (error) {
        //handle error
        console.log(error.response);
        this.setState({
            error:error.response.message
        });
      });
  }

  render() {
      const{users,error}=this.state;

    return <div>
        {users.map((user,index)=>(
            <h4>{user.id}   {user.username}   {user.password}</h4>
        ))}
                {error && <div className="alert alert-danger">{error}</div>}


    </div>
  };
}
