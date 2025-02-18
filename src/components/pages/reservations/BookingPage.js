import './booking.css';
import BookingForm from './BookingForm';

function BookingPage({availableTimes, setAvailableTimes}) {
    return (
        <div className='booking-page'>
            <h2>Book Now</h2>
            <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>
        </div>
    )
}

export default BookingPage;