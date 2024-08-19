const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/airports`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default { index };
