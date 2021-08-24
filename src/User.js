import React from 'react';
import Navbar from './NavbarUser';
import ReservationList from './ReservationList';

function User(){
   const a=localStorage.getItem("userName");
    console.log(a);
    return (

        <div>
            <Navbar />
            <h1>{a}</h1>
            <ReservationList/>
        </div>
    )
}

export default User;