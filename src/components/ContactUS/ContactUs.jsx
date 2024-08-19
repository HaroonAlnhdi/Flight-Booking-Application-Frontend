import { useParams } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import userService from "../../services/userServicr";
import "./ContactUs.css";

const ContactUS = () => {
  const [show, setShow] = useState(false);
  const { userId } = useParams();
  const [userData, setuserData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await userService.show(userId);

      setuserData(userData);
    };

    if (userId) fetchUser();
  }, []);
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

  return (
    <>
      <form className="CantactUs">
        <h1>Contact Us</h1>
        <label htmlFor="email"> Email :</label>
        <input type="text" name="email" id="email" value={userData.email} />
        <label htmlFor="Descreption">Descreption :</label>
        <textarea name="Descreption" id="Descreption"></textarea>
        <button onClick={handleClick}>Submit</button>
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
