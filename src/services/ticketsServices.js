const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/trips`;

const index = async (dep, arr) => {
  try {
    const res = await fetch(BASE_URL + `?dep=${dep}&arr=${arr}`);
    return res.json();
  } catch (error) {
    console.error(error);
  }
};



export default { index };
