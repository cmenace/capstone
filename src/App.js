import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer.js';
import Header from './Components/Header.js';
import HomePage from './Pages/Homepage.js';
import Booking from './Pages/Booking.js';
import CompleteBooking from './Pages/CompleteBooking.js';

function App() {
  return (
    <>
      <Header />
      <Routes> 
        <Route path="/" exact element={<HomePage />}></Route>
        <Route path="/booking" element={<Booking />}></Route> 
        <Route path="/confirmed" element={<CompleteBooking />}></Route>
      </Routes>
      <Footer />
    </>
  );
}
export default App;
