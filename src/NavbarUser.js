import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const NavbarUser = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const a=localStorage.getItem("userName");
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar-dark bg-dark" expand="md">
        <NavbarBrand href="/User">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/Reservation">New Reservation</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/AboutUs">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Log Out</NavLink>
            </NavItem>
          </Nav>
          <NavbarText > {a}</NavbarText>

        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarUser;