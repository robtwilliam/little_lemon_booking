import { useLocation } from "react-router-dom";

function BookingConfirmed() {
    const location = useLocation();

    return (
        <>
            <h1>Your Booking has been confirmed for {location.state.guests} on {location.state.date} at {location.state.time}!</h1>
            <p>We'll send you an email with the details.</p>
        </>
    )
}

export default BookingConfirmed;