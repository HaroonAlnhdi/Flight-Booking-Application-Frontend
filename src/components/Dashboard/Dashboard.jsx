import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhone,FaSearch } from "react-icons/fa";
const Dashboard = ({ tripData, setselectedTrip }) => {
  const navigate = useNavigate();
  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");

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
    navigate("/booking");
  };

  const isFormValid = fromInput !== "" && toInput !== "";

  return (
    <main>
      <section className="flight-booking-container">
        <div className="flight-booking-header">
          <h1>Find And Book</h1>
          <h1>A Great Experience</h1>
          <img src="/pic/home.jpg" alt="flightHeader " />
        </div>
        <div className="flight-booking-form-conta"> 
        <h2>Booking a flight</h2>
        <div className="flight-booking-form">

          <form onSubmit={handleSubmit}>
            <label htmlFor="From">From</label>
            <select name="From" id="From" onChange={handelChange}>
              <option value="">Select Departure</option>
              {tripData.map((trip, index) => (
                <option key={index} value={trip.airport_IATA}>
                  {trip.airport_name} {trip.city}, {trip.country} (
                  {trip.airport_IATA})
                </option>
              ))}
            </select>

            <label htmlFor="To">To</label>
            <select name="To" id="To" onChange={handleChangeTo}>
              <option value="">Select Arrival</option>
              {filteredToOptions.map((trip, index) => (
                <option key={index} value={trip.airport_IATA}>
                  {trip.airport_name} {trip.city}, {trip.country} (
                  {trip.airport_IATA})
                </option>
              ))}
            </select>

            {isFormValid ? <button type="submit">Search <FaSearch /></button> : ""}
          </form>
        </div>
        </div>
      </section>

      <section className="explor-sec">
        <div className="container">
          <div className="section-heading mb-4">
            <h2 className="h1 mb-0">Explore Nature</h2>
            <p> </p>
            <p>Explore the breathtaking beauty of nature in Bahrain and the Kingdom of Saudi Arabia. From stunning landscapes to rich cultural heritage, these destinations offer a unique experience for nature lovers and adventure enthusiasts. Discover the architectural wonders of Bahrain and immerse yourself in its vibrant culture. In the Kingdom of Saudi Arabia, explore the coastal city of Jeddah and its fascinating history, or visit the picturesque city of Abha surrounded by majestic mountains. Whether it's exploring beautiful beaches, enjoying pleasant climates, or taking in breathtaking views, these destinations have something for everyone.</p>
          </div>
          <div className="row position-relative mt-n1-9">
            <div className="col-md-6 col-lg-4 mt-1-9">
              <div className="places text-center">
                <img
                  src="https://i.pinimg.com/564x/80/2b/b4/802bb410fe2c52b954551a1283b986d0.jpg"
                  className="border-radius-5 fixed-size-img"
                  alt="bahrain"
                />
                <div className="places-info">
                  <h3 className="text-primary mb-1 h4">Bahrain</h3>
                  <span className="font-weight-600 text-secondary">Manama</span>
                </div>
                <div className="places-overlay">
                  <div className="d-table h-100 w-100">
                    <div className="d-table-cell align-middle">
                      <h3>
                        <a href="#" className="text-white">
                          About Bahrain
                        </a>
                      </h3>
                      <p className="text-white mb-0">
                        Bahrain is a country located in the Middle East, known
                        for its rich history and vibrant culture. It is an
                        archipelago consisting of several islands in the Arabian
                        Gulf. Bahrain is famous for its stunning architecture,
                        beautiful beaches, and warm hospitality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-1-9">
              <div className="places text-center">
                <img
                  src="https://i.pinimg.com/564x/34/68/fc/3468fc2ba6081cf11dbe56f73faf0d18.jpg"
                  className="border-radius-5 fixed-size-img"
                  alt="jeddah"
                />
                <div className="places-info">
                  <h3 className="text-primary mb-1 h4">
                    Kingdom of Saudi Arabia
                  </h3>
                  <span className="font-weight-600 text-secondary">Jeddah</span>
                </div>
                <div className="places-overlay">
                  <div className="d-table h-100 w-100">
                    <div className="d-table-cell align-middle">
                      <h3>
                        <a href="#" className="text-white">
                          About Jeddah
                        </a>
                      </h3>
                      <p className="text-white mb-0">
                        Jeddah is a city located in the Kingdom of Saudi Arabia.
                        It is known for its rich history, vibrant culture, and
                        stunning architecture. Jeddah is situated on the coast
                        of the Red Sea and serves as a major commercial hub in
                        the region.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-1-9">
              <div className="places text-center">
                <img
                  src="https://i.pinimg.com/564x/f3/e4/f1/f3e4f156202190cc0d23851f3fcdd5bc.jpg"
                  className="border-radius-5  fixed-size-img"
                  alt="abha"
                />
                <div className="places-info">
                  <h3 className="text-primary mb-1 h4">
                    Kingdom of Saudi Arabia
                  </h3>
                  <span className="font-weight-600 text-secondary">Abha</span>
                </div>
                <div className="places-overlay">
                  <div className="d-table h-100 w-100">
                    <div className="d-table-cell align-middle">
                      <h3>
                        <a href="#" className="text-white">
                          About Abha
                        </a>
                      </h3>
                      <p className="text-white mb-0">
                        Abha is a city located in the Kingdom of Saudi Arabia.
                        It is known for its beautiful landscapes, pleasant
                        climate, and rich cultural heritage. Abha is surrounded
                        by mountains and offers breathtaking views, making it a
                        popular destination for nature lovers and adventure
                        enthusiasts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contactSec">
        <h1>Contact</h1>
        <div className="contact-container">
          <div className="contact-info">
            <p>Let us book your next trip!</p>
            <div className="info">
              <p>
                {" "}
                <FaMapMarkerAlt />
                123 Street, Manama, BHA
              </p>
            </div>
            <div className="info">
              <p>
                {" "}
                <FaPhone />
                Phone: +973 33440454
              </p>
            </div>
            <div className="info">
              <p>
                <FaEnvelope />
                Email:FlightHaro24@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
