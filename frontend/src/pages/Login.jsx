import React, { useState } from "react";
import { useNavigate } from "react-router";
import api from "../lib/axios";
import TextType from "../components/TextType";
import VideoBG from "../components/VideoBG";

const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({
    email: import.meta.env.VITE_EMAIL,
    password: "",
  });
  console.log("Email:", import.meta.env.VITE_EMAIL);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post("/users/login", formData);
      localStorage.setItem("token", res.data.token);
      setUser(res.data);
      navigate("/");
    } catch (error) {
      if (error.response?.status === 429) {
        console.log("Too many requests.", error);
      } else {
        console.log("Failed to log in.", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <VideoBG />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center gap-10 px-4 mb-30">
        {/* Typing Animation - with explicit styling */}
        <img
          src="/assets/langdays-logo-white.png"
          alt="logo"
          className="w-60 h-29 md:w-80 md:h-38 lg:w-80 lg:h-38  xl:w-80 xl:h-38 mt-10 mb-10"
        />

        <div className="max-w-xs md:max-w-md lg:max-w-md xl:max-w-md min-h-25 text-start items-start text-white text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-medium">
          <TextType
            text={[
              "Happy 23rd Birthday Lang Lang💖!",
              "I wish you all the best!",
              "I love you so much!",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="|"
            deletingSpeed={50}
            variableSpeedEnabled={false}
            variableSpeedMin={60}
            variableSpeedMax={120}
            cursorBlinkDuration={0.5}
          />
        </div>

        {/* Login Form */}
        <fieldset className="fieldset w-xs md:w-md lg:w-md xl:w-md backdrop-blur-sm bg-white/10 p-6 rounded-lg ">
          <p className="label text-white text-sm font-medium mb-1 text-center opacity-80">
            Enter the password
          </p>
          <form className="join" onSubmit={handleSubmit}>
            <input
              type="password"
              className="input input-outline bg-transparent border-white text-white text-sm join-item flex-1 placeholder:text-white/60"
              placeholder="Type here"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="btn btn-outline text-white join-item hover:bg-white hover:text-black transition-colors"
              disabled={loading}
            >
              {loading ? "..." : "GO"}
            </button>
          </form>
          <i className="label text-white text-xs text-center opacity-80">
            Lang knows her password
          </i>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;
