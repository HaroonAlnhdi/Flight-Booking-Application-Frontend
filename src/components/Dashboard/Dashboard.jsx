import { useState } from "react";

const Dashboard = ({ tripData, setselectedTrip }) => {
  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");
  console.log(fromInput);
  console.log(toInput);
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

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Dashboard;
