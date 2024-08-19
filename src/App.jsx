import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import authService from "./services/authService";

// Components
import NavBar from "./components/NavBar/NavBar";
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import SignupForm from "./components/SignupForm/SignupForm";
import SigninForm from "./components/SigninForm/SigninForm";
import AboutUs from "./components/AboutUs/AboutUs";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import userService from "./services/userServicr";
import ContactUS from "./components/ContactUS/ContactUs";
import tripServices from "./services/tripServices";
const App = () => {
  const [user, setUser] = useState(authService.getUser());
  const [tripData, setTripData] = useState([]);
  const [selectedTrip, setselectedTrip] = useState([]);

  useEffect(() => {
    const fetchtripData = async () => {
      const trips = await tripServices.index();
      setTripData(trips);
    };

    fetchtripData();
  }, []);

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
              path="/contactUS/:userId"
              element={<ContactUS user={user} />}
            />
          </>
        ) : (
          <Route path="/" element={<Landing />} />
        )}
        <Route path="/signup" element={<SignupForm setUser={setUser} />} />
        <Route path="/signin" element={<SigninForm setUser={setUser} />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route
          path="/profile/:userId"
          element={<Profile setUser={setUser} />}
        />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
