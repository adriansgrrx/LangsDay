import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import api from '../lib/axios';


const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({
    email: "clydecatorce@gmail.com",
    password: "",
  });

  
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
    <div className='min-h-screen flex items-center justify-center'>
      <fieldset className="z-10 fieldset">
        <legend className="fieldset-legend text-white text-sm">Enter the password</legend>
        <form className='join' onSubmit={handleSubmit}>
          <input 
            type="password"
            className="input input-outline bg-transparent border-white text-xs join-item"
            placeholder="Type here" 
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button 
            type="submit"
            className='btn btn-outline text-white join-item'
            disabled={loading}
          >
            GO
          </button>
        </form>
        <p className="label text-white">Lang knows her password</p>
      </fieldset>

      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video/video-bg.mp4"
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default Login;