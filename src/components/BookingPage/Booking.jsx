import bookingService from "../../services/bookingService";
import { useNavigate } from "react-router-dom";

const Booking = ({ selectedTrip, ticketsData, user }) => {
  const navigate = useNavigate();

  const handleSubmit = async (event, tripId, Qty) => {
    event.preventDefault();

    try {
      if (!user) {
        if (window.confirm("Please sign in to book tickets")) {
          navigate("/signin");
        } else {
          return;
        }
      } else {
        const tripData = { ...selectedTrip, Qty };
        await bookingService.create(tripId, tripData);
        navigate(`/tickets/${user._id}`);
      }
    } catch (error) {
      console.error("Error adding tickets:", error);
    }
  };

  if (!ticketsData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Booking Details</h1>
      <ul>
        {ticketsData.map((trip, index) => (
          <li key={index}>
            <form
              onSubmit={(e) => handleSubmit(e, trip._id, e.target.Qty.value)}
            >
              <label htmlFor="Qty"></label>
              <input type="number" name="Qty" id="Qty" />
              <p>Departure Airport: {trip.dep_airport}</p>
              <p>Departure Airport IATA: {trip.dep_airport_IATA}</p>
              <p>Arrival Airport: {trip.arr_airport}</p>
              <p>Arrival Airport IATA: {trip.arr_airport_IATA}</p>
              <p>Departure Date & Time: {trip.dep_date_time}</p>
              <p>Arrival Date & Time: {trip.arr_date_time}</p>
              <p>Duration: {trip.duration}</p>
              <p>Price: {trip.price}</p>

              <button type="submit">ADD</button>
            </form>
            {index < ticketsData.length - 1 && <hr />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Booking;
