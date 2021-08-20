import UserLogin from "./UserLogin"
import RestourantLogin from "./RestourantLogin"
import React from 'react';
import Register from "./Register"
import ForgetPassword from "./ForgetPasswordPage";
import User from "./User";
import EnterPage from "./EnterPage";
import Restourant from "./Restourant";
import AboutUs from "./AboutUs";
import NewReservation from "./NewReservation";
import {BrowserRouter as Router ,Route,Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={EnterPage} />
      <Route exact path="/Reservation" component={NewReservation} />
      <Route exact path="/UserLogin" component={UserLogin} />
      <Route exact path="/RestourantLogin" component={RestourantLogin} />
      <Route exact path="/AboutUs" component={AboutUs}/>

      <Route exact path="/User" component={User}/>
      <Route exact path="/Restourant" component={Restourant}/>

      <Route exact path="/register" component={Register}/>
      <Route exact path="/forgetpassword" component={ForgetPassword} />

      </Switch>
    </Router>
  );
}

export default App;
