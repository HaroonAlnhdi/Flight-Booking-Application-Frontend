import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import userService from "../../services/userServicr";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const profile = (props) => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [userData, setuserData] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await userService.show(userId);

      setuserData(userData);
    };

    if (userId) fetchUser();
  }, []);

  useEffect(() => {
    if (userData) {
      setFormData({
        username: userData.username,
        first_name: userData.first_name,
        last_name: userData.last_name,
        email: userData.email,
        phone_number: userData.phone_number,
      });
    }
  }, [userData]);

  const handleRemove = async (userId) => {
    const confirmEdit = window.confirm(
      "Are you sure you want to delete your profile if you do you will be redirected to the landing page"
    );
    if (confirmEdit) {
      try {
        await userService.deleteUser(userId);
        props.setUser(null);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleUpdate = async (formData, userId) => {
    try {
      await userService.update(formData, userId);
      props.setUser(null);
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = async (event) => {
    event.preventDefault();

    const confirmEdit = window.confirm(
      "Are you sure you want to edit your profile if you do you will be redirected to the sign in page"
    );
    if (confirmEdit) {
      try {
        await handleUpdate(formData, userId);
        navigate("/signin");
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (!userData) {
    return <h1>Loading...</h1>;
  }

  return (
    
    <section className="ProfileSection">
      <div className="ProfileContainer"></div>

      <div className="ProfileFormContainer">
        <h1>Edit Profile</h1>
        <form onSubmit={handleEdit}>
          <div className="ProfileFormRow">
            <div className="ProfileFormColumn">
              <label htmlFor="username">User name</label>
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="ProfileFormColumn">
              <label htmlFor="first_name">First name</label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                value={formData.first_name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="ProfileFormRow">


            <div className="ProfileFormColumn">
              <label htmlFor="last_name">Last name</label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                value={formData.last_name}
                onChange={handleChange}
              />
            </div>
            <div className="ProfileFormColumn">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>


          <div className="ProfileFormRow">
            <div className="ProfileFormColumn">
              <label htmlFor="phone_number">Phone Number</label>
              <input
                type="text"
                name="phone_number"
                id="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
              />
            </div>
          </div>

          
          <div className="profilebtn">
            <button type="submit">Edit</button>
          </div>
        </form>
        <div className="profilebtn deltBtn">
          <button onClick={() => handleRemove(userId)}>Delete the Account</button>
        </div>
      </div>
    </section>
  );
};

export default profile;
