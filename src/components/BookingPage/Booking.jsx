const Booking = ({ selectedTrip, ticketsData }) => {
  if (!ticketsData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Booking Details</h1>
      <ul>
        {ticketsData.map((trip, index) => (
          <li key={index}>
            <p>Tickets: {trip.tickets}</p>
            <p>Departure Airport: {trip.dep_airport}</p>
            <p>Departure Airport IATA: {trip.dep_airport_IATA}</p>
            <p>Arrival Airport: {trip.arr_airport}</p>
            <p>Arrival Airport IATA: {trip.arr_airport_IATA}</p>
            <p>Departure Date & Time: {trip.dep_date_time}</p>
            <p>Arrival Date & Time: {trip.arr_date_time}</p>
            <p>Duration: {trip.duration}</p>
            <p>Price: {trip.price}</p>
            {index < ticketsData.length - 1 && <hr />}{" "}
            {/* Line between tickets */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Booking;
