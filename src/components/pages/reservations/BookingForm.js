import './booking.css';
import { useState } from 'react';
import { getToday } from '../../../utils/TimeAndDateGenerators';
import { submitAPI } from '../../../utils/api';
import { useNavigate } from 'react-router-dom';

function BookingForm({availableTimes, setAvailableTimes}) {

    const [date, setDate] = useState(getToday());
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("None");

    const navigate = useNavigate();

    const isFormValid = () => {
        // Basic validation example: check if both fields are filled
        return date.trim() !== '' && time.trim() !== '' && guests > 0 && guests < 11;
    };

    const useHandleSubmit = (e) => {
        e.preventDefault();
        submitAPI({date: date, time: time, guests: guests, occasion: occasion});
        navigate('/booking-confirmed',{state:{date: date, time: time, guests: guests, occasion: occasion}});
    };

    return (
        <form className='booking-form'>
            <label htmlFor="res-date">Date</label>
            <input type="date" id="res-date" value={date} onChange={(e) => {setDate(e.target.value); setAvailableTimes({type: 'update_times', date: new Date(date)})}}/>
            <label htmlFor="res-time">Time</label>
            <select id="res-time" value={time} onChange={(e)=> setTime(e.target.value)}>
                {availableTimes && availableTimes.map((time,idx) => (<option key={idx}>{time}</option>))}
            </select>
            <label htmlFor="guests">Guests</label>
            <input type="number" value={guests} min="1" max="10" id="guests" onChange={(e) => setGuests(e.target.value)}/>
            {guests === "0" && <span className="error-msg">Please enter at least one guest</span>}
            {Number(guests) > 10 && <span className="error-msg">Please enter less than 10 guests</span>}
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>None</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" aria-label="On Click" value="Make Your reservation" onClick={useHandleSubmit} disabled={!isFormValid()}/>
        </form>
    )
}

export default BookingForm;