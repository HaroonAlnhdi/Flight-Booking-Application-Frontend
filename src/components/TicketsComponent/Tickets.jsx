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

  if (!userData) {
    return <h1>Loading...</h1>;
  }
  console.log(userData);

  return (
    <div>
      <h1>Booking Details</h1>
      {userData.bookings.map((booking) => (
        <div key={booking._id}>
          <h2>Booking ID: {booking._id}</h2>
          <p>
            <strong>Departure Airport:</strong> {booking.dep_airport}
          </p>
          <p>
            <strong>Arrival Airport:</strong> {booking.arr_airport}
          </p>
          <p>
            <strong>Departure Date:</strong>{" "}
            {new Date(booking.depTripDate).toLocaleDateString()}
          </p>
          <p>
            <strong>Arrival Date:</strong>{" "}
            {new Date(booking.arrTripDate).toLocaleDateString()}
          </p>
          <p>
            <strong>Duration:</strong> {booking.duration} minutes
          </p>
          <p>
            <strong>Price:</strong> ${booking.price}
          </p>
          <p>
            <strong>ID:</strong> ${booking.trip}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Tickets;
