import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Login from './pages/Login';
import Home from './pages/Home';
import { useEffect } from 'react';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [authLoading, setAuthLoading] = useState(true);
  
  useEffect(() => {
      const fetchUser = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
          setAuthLoading(false);
          return;
        }

        try {
          const res = await axios.get("api/users/me", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(res.data);
        } catch (error) {
          localStorage.removeItem("token");
        } finally {
          setAuthLoading(false);
        }
      };

      fetchUser();
    }, []);

  return (
    <Router>
      <Routes>
        <Route 
          path='/' 
          element={
            <ProtectedRoute user={user}>
              <Home user={user} setUser={setUser} error={error} />
            </ProtectedRoute>
          } 
        />
        <Route path='/login' element={<Login setUser={setUser}/>} />
      </Routes>
    </Router>
  )
}

export default App
