import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

// Get the current base URL dynamically
const baseURL = "";
// const baseURL = window.location.origin;

const axiosInstance = axios.create({
  baseURL: baseURL, // Replace with your actual API base URL
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: cookies.get("token") ? `Bearer ${cookies.get("token")}` : "",
  },
});

export default axiosInstance;
