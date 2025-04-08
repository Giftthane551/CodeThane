import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Reservation from './Pages/Reservation';
import Nav from './Pages/Nav';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import CardGrid from './Pages/CardGrid';
import HotelGrid from './Pages/Hotel/HotelGrid'
import StudentGrid from'./Pages/Student/StudentGrid'
import LodgeGrid from './Pages/Lodge/LodgeGrid'
import Checkin from './Pages/Checkin'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/CardGrid"element={<CardGrid/>}/>
          <Route path="/HotelGrid"element={<HotelGrid/>}/>
          <Route path="/StudentGrid"element={<StudentGrid/>}/>
          <Route path="/LodgeGrid"element={<LodgeGrid/>}/>
          <Route path="/Checkin"element={<Checkin/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
