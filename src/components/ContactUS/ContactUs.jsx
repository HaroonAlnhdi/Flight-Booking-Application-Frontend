import { useParams } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import userService from "../../services/userServicr";
import "./ContactUs.css";
import contectUsService from "../../services/contectUsService";

const ContactUS = () => {
  const [show, setShow] = useState(false);
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({});
  
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await userService.show(userId);
        setUserData(userData);
        setFormData({ email: userData.email }); 
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (userId) fetchUser();
  }, [userId]);
  
  if (!userData) {
    return <h1>Loading...</h1>;
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleClick(event) {
    event.preventDefault();
    handleShow(); // Show the modal
    document.querySelector("#email").value = "";
    document.querySelector("#Descreption").value = "";
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("hhhhhhhhhdd");
      await contectUsService.content(formData,userId);
    // setFormData(newConeantResponse.Body);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <form  onSubmit={handleSubmit}className="CantactUs">
        <h1>Contact Us</h1>
        <label htmlFor="email"> Email :</label>
        <input type="text" name="email" id="email" value={userData.email} onChange={handleChange} />
        <label htmlFor="message">Descreption :</label>
        <textarea name="message" id="message" onChange={handleChange}></textarea>
        <button type="submit" >Submit</button>
      </form>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Thank You</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thank you for contacting us! We will get back to you soon.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactUS;
