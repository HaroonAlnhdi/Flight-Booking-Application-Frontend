import bookingService from "../../services/bookingService";
import { useNavigate } from "react-router-dom";
import "./Booking.css";
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
    // <div>
    //   <h1>Booking Details</h1>
    //   <ul>
    //     {ticketsData.map((trip, index) => (
    //       <li key={index}>
    //         <form
    //           onSubmit={(e) => handleSubmit(e, trip._id, e.target.Qty.value)}
    //         >
    //           <label htmlFor="Qty"></label>
    //           <input type="number" name="Qty" id="Qty" />
    //           <p>Departure Airport: {trip.dep_airport}</p>
    //           <p>Departure Airport IATA: {trip.dep_airport_IATA}</p>
    //           <p>Arrival Airport: {trip.arr_airport}</p>
    //           <p>Arrival Airport IATA: {trip.arr_airport_IATA}</p>
    //           <p>Departure Date & Time: {trip.dep_date_time}</p>
    //           <p>Arrival Date & Time: {trip.arr_date_time}</p>
    //           <p>Duration: {trip.duration}</p>
    //           <p>Price: {trip.price}</p>

    //           <button type="submit">ADD</button>
    //         </form>
    //         {index < ticketsData.length - 1 && <hr />}
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    <section className="container booking-info">
  <h1>Booking</h1>
  <div className="row">
    {ticketsData.map((trip, index) => (
      <article className="card fl-left" key={index}>
        <section className="date">
          <time dateTime={trip.dep_date_time}>
            <span>{new Date(trip.dep_date_time).getDate()}</span>
            <span>
              {new Date(trip.dep_date_time).toLocaleString('default', {
                month: 'short',
              })}
            </span>
          </time>
        </section>
        <section className="card-cont">
          <small>{trip.dep_airport}</small>
          <h3>
            {trip.dep_airport} to {trip.arr_airport}
          </h3>
          <div className="even-date">
            <i className="fa fa-calendar"></i>
            <time>
              <span>{trip.dep_date_time}</span>
              <span>{trip.arr_date_time}</span>
            </time>
          </div>
          <div className="even-info">
            <i className="fa fa-map-marker"></i>
            <p>
              Departure: {trip.dep_airport_IATA}, Arrival: {trip.arr_airport_IATA}
            </p>
          </div>
          <form
            onSubmit={(e) => handleSubmit(e, trip._id, e.target.Qty.value)}
          >
            <label htmlFor="Qty">Quantity:</label>
            <input type="number" name="Qty" id="Qty" />
            <p>Duration: {trip.duration}</p>
            <p>Price: {trip.price}</p>
            <button type="submit">ADD</button>
          </form>
        </section>
        {index < ticketsData.length - 1 && <hr />}
      </article>
    ))}
  </div>
</section>


  );
};

export default Booking;
