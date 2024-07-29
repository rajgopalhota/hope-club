import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const baseURL = "https://rpa-club.vercel.app";
// const baseURL = "http://localhost:5000";

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: cookies.get("token") ? `Bearer ${cookies.get("token")}` : "",
  },
});

export default axiosInstance;
