import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import userService from "../../services/userServicr";
const profile = () => {
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

  return (
    <div>
      <h1>{userData._id}</h1>
      <h2>{userData.username}</h2>
      <h3>{userData.first_name}</h3>
      <h4>{userData.last_name}</h4>
      <h4>{userData.email}</h4>
      <h4>{userData.phone_number}</h4>
    </div>
  );
};

export default profile;
