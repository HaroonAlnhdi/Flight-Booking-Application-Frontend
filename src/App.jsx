import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import authService from "./services/authService";

import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./components/Dashboard/Dashboard";
import SignupForm from "./components/SignupForm/SignupForm";
import SigninForm from "./components/SigninForm/SigninForm";
import AboutUs from "./components/AboutUs/AboutUs";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import userService from "./services/userServicr";
import ContactUS from "./components/ContactUS/ContactUs";
import tripServices from "./services/tripServices";
import Booking from "./components/BookingPage/Booking";
import ticketsServices from "./services/ticketsServices";
import Tickets from "./components/TicketsComponent/Tickets";
import FAQ from "./components/FAQ/FAQ";

const App = () => {
  const [user, setUser] = useState(authService.getUser());
  const [tripData, setTripData] = useState([]);
  const [selectedTrip, setselectedTrip] = useState([]);
  const [ticketsData, setticketsData] = useState([]);
  useEffect(() => {
    const fetchtripData = async () => {
      const trips = await tripServices.index();
      setTripData(trips);
    };

    fetchtripData();
  }, []);

  useEffect(() => {
    const fetchTicketsData = async (from, to) => {
      const tickets = await ticketsServices.index(from, to);
      setticketsData(tickets);
    };

    if (selectedTrip.length) {
      const [{ from, to }] = selectedTrip;
      fetchTicketsData(from, to);
    }
  }, [selectedTrip]);

  const handleSignout = () => {
    authService.signout();
    setUser(null);
  };

  return (
    <>
      <NavBar user={user} handleSignout={handleSignout} />
      <Routes>
        {user ? (
          <>
            <Route path="/tickets/:userId" element={<Tickets />} />
            <Route
              path="/contactUS/:userId"
              element={<ContactUS user={user} />}
            />
            <Route
              path="/booking"
              element={
                <Booking
                  selectedTrip={selectedTrip}
                  ticketsData={ticketsData}
                  user={user}
                />
              }
            />
            <Route
              path="/"
              element={
                <Dashboard
                  tripData={tripData}
                  setselectedTrip={setselectedTrip}
                />
              }
            />
          </>
        ) : (
          <>
            <Route
              path="/"
              element={
                <Dashboard
                  tripData={tripData}
                  setselectedTrip={setselectedTrip}
                />
              }
            />
            <Route
              path="/booking"
              element={
                <Booking
                  selectedTrip={selectedTrip}
                  ticketsData={ticketsData}
                  user={user}
                />
              }
            />
          </>
        )}

        <Route path="/signup" element={<SignupForm setUser={setUser} />} />
        <Route path="/signin" element={<SigninForm setUser={setUser} />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route
          path="/profile/:userId"
          element={<Profile setUser={setUser} />}
        />
        < Route path="/FAQ" element={< FAQ />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
