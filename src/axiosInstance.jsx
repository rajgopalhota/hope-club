import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // Replace with your actual API base URL
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: cookies.get("token") ? `Bearer ${cookies.get("token")}` : "",
  },
});

export default axiosInstance;
