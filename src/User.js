import React from 'react';
import Navbar from './NavbarUser';
import ReservationList from './ReservationList';

function User(){
   const a=localStorage.getItem("userName");
    return (

        <div>
            <Navbar />
            <h1> Reservations of {a} </h1>
            <ReservationList/>
        </div>
    )
}

export default User;