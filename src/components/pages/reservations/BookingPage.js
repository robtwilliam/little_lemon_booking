import './booking.css';
import BookingForm from './BookingForm';
import hero from '../../../assets/restaurant chef B.jpg';

function BookingPage({availableTimes, setAvailableTimes}) {
    return (
        <div className='booking-page'>
            <img src={hero} className='booking-hero' alt="chef"/>
            <h2>Book Now</h2>
            <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>
        </div>
    )
}

export default BookingPage;