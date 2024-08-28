const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/profile`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

const show = async (userId) => {
  try {
    const res = await fetch(`${BASE_URL}/${userId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });

    return res.json();
  } catch (error) {
    console.error(error);
  }
};

const update = async (formData, userId) => {
  try {
    const res = await fetch(`${BASE_URL}/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(formData),
    });
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

const deleteUser = async (userId) => {
  try {
    const res = await fetch(`${BASE_URL}/${userId}`, {
      method: "DELETE",
    });
    console.log("service: ", res);
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

const deleteTicket = async (bookingId, userId) => {
  try {
    const res = await fetch(`${BASE_URL}/${userId}/bookings/${bookingId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      method: "DELETE",
    });
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export default { index, show, update, deleteUser, deleteTicket };
