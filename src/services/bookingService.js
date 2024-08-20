const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/booking`;

const create = async (tripId, tripData) => {
  try {
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tripData),
    };

    const res = await fetch(`${BASE_URL}/${tripId}`, options);
    console.log(tripData);
    console.log(tripId);
    return res.json();
  } catch (e) {
    console.log(e);
  }
};

export default { create };
