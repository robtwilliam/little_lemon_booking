import { useLocation } from "react-router-dom";
import hero from '../../../assets/restaurant chef B.jpg';

function BookingConfirmed() {
    const location = useLocation();

    return (
        <div className='booking-confirmation'>
            <img src={hero} className='booking-hero' alt="booking chef"/>
            <h3>Your booking for {location.state.guests} on {location.state.date} at {location.state.time}  has been confirmed!</h3>
            <p>We'll send you an email with the details.</p>
        </div>
    )
}

export default BookingConfirmed;