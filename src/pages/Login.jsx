import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../AuthContext";
import axios from "./../axiosInstance";
import Loading from "./Loading";

const Login = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const [loading, setLoading] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make a POST request to your server's login endpoint
      setLoading(true);
      const response = await axios.post(
        "/api/users/login",
        {
          email,
          password,
        }
      );
      // Assuming your server returns a token upon successful login
      const { token, user } = response.data;
      // Update the auth context with the token
      auth.login(token, user);
      setLoading(false);
      toast.success("Login successful");
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      console.error("Login Error:", error.message);
      setLoading(false);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div>
      {loading && <Loading />}
      <div className="loginForm m-2 py-6 flex flex-col justify-center sm:py-12">
        {auth.user ? (
          <>
            <div className="loggegIn text-center text-lg text-bold" id="#envelope">
              <h1>You are already Logged In!</h1>
            </div>
          </>
        ) : (
          <div className="login w-full relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="login absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="login relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div className="max-w-md mx-auto">
                <div>
                  <h1 className="text-2xl font-bold">Log On To RPA Club!</h1>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="divide-y divide-gray-200">
                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                      <div className="relative">
                        <input
                          autoComplete="off"
                          id="email"
                          name="email"
                          type="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                          placeholder="Email address"
                        />
                        <label
                          htmlFor="email"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          Email Address
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          autoComplete="off"
                          id="password"
                          name="password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                          placeholder="Password"
                        />
                        <label
                          htmlFor="password"
                          className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          Password
                        </label>
                      </div>
                      <div className="relative">
                        <button
                          type="submit"
                          className="bg-blue-500 text-white rounded-md px-2 py-1"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <p className="text-center text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/reg"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Register here!
                  </Link>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
