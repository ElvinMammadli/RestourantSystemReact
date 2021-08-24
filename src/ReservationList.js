import React, { Component } from "react";
import axios from "axios";

export default class ReservationList extends Component {
    
    state ={
        reservations:[],
        error:'',
        id:localStorage.getItem("userId")
    };
     
    
    


//User Id must come to here !
  componentDidMount=()=> {

    console.log("Id:"+this.state.id);
    axios({
      method: "get",
      url: "http://localhost:8080/api/1/reservation/"+this.state.id,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then(response=> {
        this.setState({
            reservations:response.data
        });
    })
      .catch(function (error) {
        this.setState({
          error:error.response.message
      });
        //handle error
        console.log(error.response);
       
      });
  }

  render() {
      const{reservations,error}=this.state;

    return <div>
        {reservations.map((reservation,index)=>(
          <p key={index}>Id: {reservation.id} Date: {reservation.date}  Restourant:{reservation.restourant.name}</p>        ))}
                {error && <div className="alert alert-danger">{error}</div>}


    </div>
  };
}
