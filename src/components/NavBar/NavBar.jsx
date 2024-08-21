import React from "react";
// import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
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
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src="/pic/logo.png" alt="Logo" className="logo" /> Flight Booking
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
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
                <Nav.Link as={Link} to={`tickets/${user._id}`}>
                  <MdAirplaneTicket />
                  Tickets
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
              </>
            )}
          </Nav>
          <Nav className="ms-auto">
            {user ? (
              <>
                <Nav.Link as={Link} to={`profile/${user._id}`}>
                  <AiOutlineUser /> Profile
                </Nav.Link>
                <Nav.Link as={Link} to="" onClick={handleSignout}>
                  <AiOutlineLogout /> Sign Out
                </Nav.Link>
              </>
            ) : (
              <>
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
      </Container>
    </Navbar>
  );
  
};

export default MyNavbar;
