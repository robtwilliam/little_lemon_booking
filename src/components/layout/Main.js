import '../../App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import BookingPage from '../pages/reservations/BookingPage';
import { useReducer } from 'react';
import { initializeTimes, updateTimes } from '../../utils/TimeAndDateGenerators';
import BookingConfirmed from '../pages/reservations/BookingConfirmed';


function Main() {

    const reducer = (state, action) => {
      switch (action.type) {
        case 'update_times':
          return updateTimes(action.date);
        default:
          return updateTimes(action.date);
      }
    };

    const [availableTimes, dispatch] = useReducer(reducer, initializeTimes(new Date()))

    return (
      <main>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingPage availableTimes={availableTimes} setAvailableTimes={dispatch}/>} />
            <Route path='/booking-confirmed' element={<BookingConfirmed />} />
        </Routes>
      </main>
    );
  }

export default Main;