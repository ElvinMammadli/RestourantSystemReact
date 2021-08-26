import React from 'react';
import Navbar from './NavbarUser';
import image from './images/image.jpeg'

const AboutUs=() =>{
    return (
        <div>
            <Navbar />
            <div classname="container emp-profile">
                <form method="">
                    <div classname="row">
                        <div classname="col-md-4">
                            <img src={image}  alt="Elvin" srcset="" width="300" height="300"/>
                        </div>
                        <div classname="col-md-6">
                            <div className="profile-head">
                                <h5>Elvin Mammadli </h5>
                                <h6>YTU Computer Engineering</h6>
                                <a href="https://www.linkedin.com/in/elvin-mammadli-2650461a3/">Click to Show Linkedin Profile</a>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
            </div>
    )
}

export default AboutUs;