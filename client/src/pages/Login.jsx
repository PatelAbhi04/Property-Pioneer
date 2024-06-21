import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

import { FiChevronsRight } from "react-icons/fi";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Sign in failed");
      }

      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="flex flex-col md:flex-row ">
      <div className="w-1/4 bg-custom bg-no-repeat bg-cover border-b-2 md:border-r-2 md:min-h-screen slide-in  ">
        <div className="  left-0   my-20 py-10   justify bg-transparent  align-top slide-in">
          <p className="font-bold text-gray-500 font-semibold text-3xl pl-8">
            Things you Can Do with <br />
            <span className="text-[#3D5280]">Property</span>
            <span className="text-[#7091E6]">Pioneer</span> Account
          </p>
          <div className="flex items-center">
            <FiChevronsRight />
            <p className="text-lg p-4 text-teal-700">
              Post unlimited Property for FREE
            </p>
          </div>
          <div className="flex items-center">
            <FiChevronsRight />
            <p className="text-lg p-4 text-teal-700">
              Showcase your property as Rent or Sale
            </p>
          </div>
          <div className="flex items-center">
            <FiChevronsRight />
            <p className="text-lg p-4 text-teal-700">
              Performance in search & Track responses & views online
            </p>
          </div>
          <div className="flex items-center">
            <FiChevronsRight />
            <p className="text-lg p-4 text-teal-700">
              Add detailed property information & multiple photos per listing
            </p>
          </div>
          <div className="flex items-center">
            <FiChevronsRight />
            <p className="text-lg p-4 text-teal-700">
              you can contact to other user also to contract with them
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 max-w-5xl ">
        <div
          id="signin"
          className="p-3 max-w-lg mx-auto mt-44 backdrop-blur-sm border-4 bg-transparent border-r-teal-300 border-l-teal-300 rounded-2xl"
        >
          <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="border p-3 rounded-lg"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="border p-3 rounded-lg"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              disabled={loading}
              className="bg-[#3D52A0] text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
            >
              {loading ? "Loading..." : "Sign In"}
            </button>
            <OAuth />
          </form>
          <div className="flex gap-2 mt-5">
            <p>Dont have an account?</p>
            <Link to={"/sign-up"}>
              <span className="text-blue-700">Sign up</span>
            </Link>
          </div>
          {error && <p className="text-red-500 mt-5">{error}</p>}
        </div>
      </div>
    </div>
  );
}
