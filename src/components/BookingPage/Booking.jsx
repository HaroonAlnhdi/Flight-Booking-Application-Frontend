import bookingService from "../../services/bookingService";
import { useNavigate } from "react-router-dom";
import "./Booking.css";
import { useEffect } from "react";
const Booking = ({ selectedTrip, ticketsData, user }) => {
  const navigate = useNavigate();

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
    const optionsTime = { hour: '2-digit', minute: '2-digit' };
    return {
      date: date.toLocaleDateString(undefined, optionsDate),
      time: date.toLocaleTimeString(undefined, optionsTime),
    };
  };

  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("refresh", "true");
    });

    const isRefreshed = sessionStorage.getItem("refresh") === "true";

    if (isRefreshed) {
      sessionStorage.removeItem("refresh");
      navigate("/");
    }
  }, [navigate]);


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
        const tripData = { ...selectedTrip, Qty: Number(Qty) };
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
      <p>Secure your next adventure with our hassle-free flight booking service. Choose your destination, select your travel dates, and enjoy a smooth journey. Book now and start planning your next trip!</p>

      <div className="booking-column">
        {ticketsData.map((trip, index) => {
          const depDateTime = formatDateTime(trip.dep_date_time);
          const arrDateTime = formatDateTime(trip.arr_date_time);
      
          return (
            <article className="card fl-left" key={index}>
              
              <section className="date">
                <time dateTime={trip.dep_date_time}>
                  <span>{new Date(trip.dep_date_time).getDate()}</span>
                  <span>
                    {new Date(trip.dep_date_time).toLocaleString("default", {
                      month: "short",
                    })}
                  </span>
                </time>
              </section>
      
              <section className="card-cont">
                <small>{trip.dep_airport}</small>
                <h3>
                  <span className="displayinfo"> {trip.dep_airport} </span> to <span className="displayinfo"> {trip.arr_airport} </span>
                </h3>
                <div className="even-date">
                  <i className="fa fa-calendar"></i>
                  <time>
                    <span>{depDateTime.date}</span>
                    <span>{depDateTime.time}</span>
                    <span>{arrDateTime.date}</span>
                    <span>{arrDateTime.time}</span>
                  </time>
                </div>
                <div className="even-info">
                  <i className="fa fa-map-marker"></i>
                  <p>
                    <span className="displayinfo"> Departure:</span> {trip.dep_airport_IATA}    
                    <span className="displayinfo"> Arrival: </span>{" "}{trip.arr_airport_IATA}
                  </p>
                </div>
                <p><span className="displayinfo">Available :</span>{trip.tickets}</p>
                <form
                  onSubmit={(e) => handleSubmit(e, trip._id, e.target.Qty.value)}
                >
                  <label htmlFor="Qty">Quantity:</label>
                  <input required defaultValue={1} type="number" name="Qty" id="Qty" />
                  <p><span className="displayinfo">Duration:</span> {trip.duration % 60 %60 } hours </p>
                  <p><span className="displayinfo">Price:</span> {trip.price} BD</p>
                  <button type="submit">Booking</button>
                </form>
              </section>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Booking;
