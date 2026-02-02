import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import Hero from "./Hero";
import Letters from "./Message";
import Memories from "./Memories";
import Loader from "../components/Loader";
import { Loader2 } from "lucide-react";
import MainBG from "../components/MainBG";

const Home = ({ user, setUser, error }) => {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Simulate loading (video, images, animations)
    const timer = setTimeout(() => {
      setLoading(false);
      // Trigger fade-in after loading completes
      setTimeout(() => setFadeIn(true), 50);
    }, 2000); // adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div
      className={`min-h-screen bg-white overflow-hidden transition-opacity duration-700 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <section id="hero" className="min-h-screen">
        <Navbar />
        <Hero />
      </section>

      <section id="memories">
        <Memories />
      </section>

      <section id="letters">
        <Letters />
      </section>

      <Menu />
    </div>
  );
};

export default Home;
