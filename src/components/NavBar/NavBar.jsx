import React from "react";
// import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { MdAirplaneTicket } from "react-icons/md";
import "./NavBar.css";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlinePhone,
  AiOutlineUser,
  AiOutlineLogout,
} from "react-icons/ai";

const MyNavbar = ({ user, handleSignout }) => {
  const { userId } = useParams();

  return (
    <Navbar collapseOnSelect expand="lg" className=" bg-light bg-gradient">
      <Navbar.Brand as={Link} to="/">
        <img src="/pic/flight1.png" alt="Logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          {user ? (
            <>
              <Nav.Link as={Link} to="/">
                <AiOutlineHome /> Home
              </Nav.Link>
              <Nav.Link as={Link} to="aboutus">
                <AiOutlineInfoCircle /> About
              </Nav.Link>
              <Nav.Link as={Link} to={`contactUs/${user._id}`}>
                <AiOutlinePhone /> Contact
              </Nav.Link>
              <Nav.Link as={Link} to="#">
              <MdAirplaneTicket />Ticket
              </Nav.Link>
              <Nav.Link as={Link} to={`profile/${user._id}`}>
                <AiOutlineUser /> Profile
              </Nav.Link>
              <Nav.Link as={Link} to="" onClick={handleSignout}>
                <AiOutlineLogout /> Sign Out
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/">
                <AiOutlineHome /> Home
              </Nav.Link>
              <Nav.Link as={Link} to="aboutus">
                <AiOutlineInfoCircle /> About
              </Nav.Link>
              {/* <Nav.Link as={Link} to="#">
                <AiOutlinePhone /> Contact
              </Nav.Link> */}
              <Nav.Link as={Link} to="/signin">
                <AiOutlineUser /> Sign In
              </Nav.Link>
              <Nav.Link as={Link} to="/signup">
                <AiOutlineUser /> Sign Up
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
