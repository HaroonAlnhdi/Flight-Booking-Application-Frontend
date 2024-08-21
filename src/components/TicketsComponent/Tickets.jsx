import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import userServicr from "../../services/userServicr";

const Tickets = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await userServicr.show(userId);
      setUserData(userData);
    };

    if (userId) fetchUser();
  }, [userId]);

    const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
    const optionsTime = { hour: '2-digit', minute: '2-digit' };
    return {
      date: date.toLocaleDateString(undefined, optionsDate),
      time: date.toLocaleTimeString(undefined, optionsTime),
    };
  };

  if (!userData) {
    return <h1>Loading...</h1>;
  }
  console.log(userData);

  return (
    <section className="container booking-info">
  <h1>Tickets</h1>
  <p></p>

  <div className="booking-column">
    {userData.bookings.map((booking) => {
      const depDateTime = new Date(booking.depTripDate);
      const arrDateTime = new Date(booking.arrTripDate);
      
      return (
        <article className="card fl-left" key={booking._id}>
          
          <section className="date">
            <time dateTime={booking.depTripDate}>
              <span>{depDateTime.getDate()}</span>
              <span>{depDateTime.toLocaleString("default", { month: "short" })}</span>
            </time>
          </section>
  
          <section className="card-cont">
            <small>{booking.trip.dep_airport}</small>
            <h3>
              <span className="displayinfo"> {booking.trip.dep_airport} </span> to <span className="displayinfo"> {booking.trip.arr_airport} </span>
            </h3>
            <div className="even-date">
              <i className="fa fa-calendar"></i>
              <time>
                <div className="dateTime">
                  <p>Departure date <span>{depDateTime.toLocaleDateString()}</span></p>
                  <p>Arrival date <span>{arrDateTime.toLocaleDateString()}</span></p>
                </div>
                <div className="dateTime">
                  <p>Departure time <span>{depDateTime.toLocaleTimeString()}</span></p>
                  <p>Arrival Time <span>{arrDateTime.toLocaleTimeString()}</span></p>
                </div>
              </time>
            </div>
            <div className="even-info">
              <i className="fa fa-map-marker"></i>
              <p>
                <span className="displayinfo"> Departure:</span> {booking.trip.dep_airport_IATA}
                <span className="displayinfo"> Arrival: </span> {booking.trip.arr_airport_IATA}
              </p>
            </div>
            <p><span className="displayinfo">Qty:</span> {booking.Qty}</p>
            <p><span className="displayinfo">Duration:</span> {Math.floor(booking.trip.duration / 60)} hours {booking.trip.duration % 60} minutes</p>
            <p><span className="displayinfo">Price:</span> ${booking.price}</p>
          </section>
        </article>
      );
    })}
  </div>
</section>

  );
};

export default Tickets;









