import React, { Component } from "react";
import Navbar from "./NavbarUser";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import axios from "axios";

export default class Reservation extends Component {
  state = {
    options: [
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
    ],
    consumers: ["1", "2", "3", "4"],
    restourants: [],
    selectedClock: "",
    selectedConsumers: "",
    selectedRestourant: "",
    selectedTime: "",
  };
   

  onClickLogin() {
    var cor = {
      date:"17:65",
      user:{
        id:"2"
      },
      restourant:{
        id:"1"
      }
    }
    axios({
      method: 'post',
      url: 'http://localhost:8080/api/1/create/reservation',
      data: cor,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then(function (response) {

          console.log(response.data);
      })
      .catch(function (error) {
          //handle error
          console.log(error.response.data);
      });
  }

  handleChangeRestourant = (selectedRestourant) => {
    this.setState({ selectedRestourant });
    console.log(`Restourant selected:`, selectedRestourant.value);
  };

  handleChangeConsumer = (selectedConsumer) => {
    this.setState({ selectedConsumer });
    console.log(`Consumer selected:`, selectedConsumer.value);
  };

  handleChangeClock = (selectedClock) => {
    this.setState({ selectedClock });
    console.log(`Clock selected:`, selectedClock.value);
  };

  handleChangeTime = (selectedTime) => {
    this.setState({ selectedTime });
    console.log(`Time selected:`, selectedTime);
  };

  componentDidMount = () => {
    axios({
      method: "get",
      url: "http://localhost:8080/api/1/restourants",
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then((response) => {
        console.log(response.data);
        this.setState({
          restourants: response.data.map(
            (restourant, index) => restourant.name
          ),
        });
      })
      .catch(function (error) {
        //handle error
        console.log(error.response);
      });
  };

  render() {
    const { options, consumers, restourants } = this.state;
    return (
      <div>
        <Navbar />
        <h3>New Reservation!</h3>

        <form>
          <label>
            Restourant Name:
            <Dropdown
              options={restourants}
              onChange={this.handleChangeRestourant}
              value={restourants[0]}
              placeholder="Select an option"
            />
          </label>
          <br />
          <label>
            Number of people:
            <Dropdown
              options={consumers}
              onChange={this.handleChangeConsumer}
              value={consumers[0]}
              placeholder="Select an option"
            />
          </label>
          <br />
          <label>
            Select your date:
            <br />
          </label>
          <br />
          <label>
            Select your clock:
            <Dropdown
              options={options}
              onChange={this.handleChangeClock}
              value={options[0]}
              placeholder="Select an option"
            />
            ;
          </label>
          <br />
          <button type="button" onClick={this.onClickLogin}>
            Reserv!
          </button>
        </form>
      </div>
    );
  }
}
