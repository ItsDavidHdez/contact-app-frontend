import axios from "axios";

const BASE_API = "http://46.183.112.177:8000/api/v1";

export const login = async (user, setData) => {
  const result = await axios.post(`${BASE_API}/users/login`, user);
  setData(result);
};
