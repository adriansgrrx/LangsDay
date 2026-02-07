import React, { useState } from "react";
import { useNavigate } from "react-router";
import api from "../lib/axios";
import TextType from "../components/TextType";
import VideoBG from "../components/VideoBG";
import ImageBG from "../components/ImageBG";
import { Eye, EyeOff } from "lucide-react";

const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    if (error) setError("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await api.post("/users/login", formData);
      localStorage.setItem("token", res.data.token);
      setUser(res.data);
      navigate("/");
    } catch (error) {
      if (error.response?.status === 401) {
        setError("Wrong password");
      } else if (error.response?.status === 429) {
        setError("Too many attempts. Please try again later.");
      } else {
        setError("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <ImageBG />
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center gap-10 px-4 mb-30">
        {/* Typing Animation - with explicit styling */}
        <img
          src="/assets/langdays-logo-white.png"
          alt="logo"
          className="w-60 h-29 md:w-80 md:h-38 lg:w-80 lg:h-38  xl:w-80 xl:h-38 mt-10 mb-10"
        />
        <div className="max-w-xs md:max-w-md lg:max-w-md xl:max-w-md min-h-30 text-center text-white text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-medium">
          <TextType
            text={[
              "A little corner of the internet made for Clyde",
              "To celebrate her birthday.",
              "To remember the day she was born.",
              "To celebrate her every birthdays to come."
            ]}
            typingSpeed={90}
            pauseDuration={2000}
            showCursor
            cursorCharacter="|"
            deletingSpeed={20}
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
            <div className="relative flex-1 join-item">
              <input
                type={showPassword ? "text" : "password"}
                className="input input-outline bg-transparent border-white text-white text-sm w-full pr-10 placeholder:text-white/60"
                placeholder="Type here"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                autoFocus={false}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <button
              type="submit"
              className="btn btn-outline text-white join-item hover:bg-white hover:text-black transition-colors"
              disabled={loading}
            >
              {loading ? <span className="loading loading-dots loading-xs"></span> : "GO"}
            </button>
          </form>
          {!error && (
            <i className="label text-white text-xs text-center opacity-80">
              Lang knows her password
            </i>
          )}
          {/* Error Message */}
          {error && (
            <i className="label text-error text-xs text-center opacity-80">
              {error}
            </i>
          )}
        </fieldset>
      </div>
    </div>
  );
};

export default Login;