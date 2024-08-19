import { useState } from "react";

import "./Dashboard.css";

const Dashboard = ({ tripData, setselectedTrip }) => {
  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");
  // console.log(fromInput);
  // console.log(toInput);
  const handelChange = (event) => {
    event.preventDefault();
    setFromInput(event.target.value);
  };

  const filteredToOptions = tripData.filter(
    (trip) => trip.airport_IATA !== fromInput
  );

  const handleChangeTo = (event) => {
    event.preventDefault();
    setToInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setselectedTrip([{ from: fromInput, to: toInput }]);
  };

  return (
    <main>
       <section className="flight-booking-container">
        <div className="flight-booking-header">
          <h1>Find And Book</h1>
          <h1>A Great Experience</h1>
          <img src="/pic/home.jpg" alt="flightHeader " />
        </div>
      

        <div className="flight-booking-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="From">From:</label>
        <select name="From" id="From" onChange={handelChange}>
          <option value="">Select Departure</option>
          {tripData.map((trip, index) => (
            <option key={index} value={trip.airport_IATA}>
              {trip.airport_name} {trip.city}, {trip.country} (
              {trip.airport_IATA})
            </option>
          ))}
        </select>

        <label htmlFor="To">To:</label>
        <select name="To" id="To" onChange={handleChangeTo}>
          <option value="">Select Arrival</option>
          {filteredToOptions.map((trip, index) => (
            <option key={index} value={trip.airport_IATA}>
              {trip.airport_name} {trip.city}, {trip.country} (
              {trip.airport_IATA})
            </option>
          ))}
        </select>
          
        <button type="submit">Search</button>

      </form>
            </div>
      </section>

      <section className="Recommendtion">
        <h2>Recommendation</h2>
        <div className="recommendation-container">
          <div className="recommendation-card">
            <img src="https://i.pinimg.com/564x/80/2b/b4/802bb410fe2c52b954551a1283b986d0.jpg" alt="recommendation" />
            <h3>Bahrain</h3>
            <p>From $200</p>
          </div>
          <div className="recommendation-card">
            <img src="/pic/2.jpg" alt="recommendation" />
            <h3>London</h3>
            <p>From $250</p>
          </div>
          <div className="recommendation-card">
            <img src="/pic/3.jpg" alt="recommendation" />
            <h3>Barcelona</h3>
            <p>From $300</p>
          </div>
        </div>

      </section>
    </main>
  );
};

export default Dashboard;



