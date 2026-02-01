import { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import Hero from './Hero';
import Letters from './Letters';
import Memories from './Memories';
import Loader from '../components/Loader';

const Home = ( {user, setUser, error} ) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (video, images, animations)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className='min-h-screen bg-white overflow-hidden '>

      <section id="hero" className='min-h-screen'>
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
  )
}

export default Home