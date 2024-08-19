import { useState } from "react";
const Dashboard = ({ tripData }) => {
  const [fromInput, setFromInput] = useState("");

  const handelChange = (event) => {
    event.preventDefault();
    setFromInput(event.target.value);
  };

  const filteredToOptions = tripData.filter(
    (trip) => trip.airport_IATA !== fromInput
  );

  return (
    <main>
      <form>
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
        <select name="To" id="To" onChange={handelChange}>
          <option value="">Select Arrival</option>
          {filteredToOptions.map((trip, index) => (
            <option key={index} value={trip.airport_IATA}>
              {trip.airport_name} {trip.city}, {trip.country} (
              {trip.airport_IATA})
            </option>
          ))}
        </select>
      </form>
    </main>
  );
};

export default Dashboard;
