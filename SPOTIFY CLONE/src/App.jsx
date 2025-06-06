import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import MainSection from './components/mainSection/MainSection';
import Footer from './components/footer/Footer';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login'; // ✅ Make sure Login.jsx exists
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Layout wrapper to exclude layout on specific routes like /signup and /login
const Layout = () => {
  const location = useLocation();
  const hideLayout = location.pathname === '/signup' || location.pathname === '/login';

  if (hideLayout) {
    return (
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    );
  }

  return (
    <div className="mainContainer">
      <Navbar />
      <div className="mainSectionContentContainer">
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainSection />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
