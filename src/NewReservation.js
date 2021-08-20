import React from "react";
import Navbar from "./NavbarUser";
import Datepicker from "./DatePicker";
import Clockpicker from "./TimePicker";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function Reservation() {
  const options = ["10:00", "11:00", "12:00"];
  const restourants = ["Ella", "thete", "bresdfew"];
  const  consumers= ["1", "2", "3","4"];

  const defaultOption = options[0];
  const defaultRestourant=restourants[0];
  const defaultConsumers=consumers[0];

  return (
    <div>
      <Navbar />
      <h3>New Reservation!</h3>

      <form>
        <label>
          Restourant Name:
          <Dropdown
            options={restourants}
            value={defaultRestourant}
            placeholder="Select an option"
          />
          
        </label>
        <br />
        <label>
          Number of people:
          <Dropdown
            options={consumers}
            value={defaultConsumers}
            placeholder="Select an option"
          />
          
        </label>
        <br />
        <label>
          Select your date:
          <Datepicker />
        </label>
        <br />
        <label>
          Select your clock:
          <Dropdown
            options={options}
            value={defaultOption}
            placeholder="Select an option"
          />
          ;
        </label>
        <br />

        <button>Reserv!</button>
      </form>
    </div>
  );
}

export default Reservation;
