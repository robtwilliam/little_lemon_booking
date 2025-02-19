import { render,  screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookingPage from './components/pages/reservations/BookingPage';
import { initializeTimes, updateTimes } from './utils/TimeAndDateGenerators';
import BookingForm from './components/pages/reservations/BookingForm';

test('Renders the BookingPage heading', () => {
    render(<MemoryRouter><BookingPage /></MemoryRouter>);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test('Generates the list of times using the initializeTimes function', () => {
  const result = initializeTimes()
  expect(result).toBeTruthy()
})

test('Generates the list of times using the updateTimes function', () => {
  const result = updateTimes(new Date())
  expect(result).toBeTruthy()
})

test('Submit button is deactivated before required fields are filled', () => {
  render(<MemoryRouter><BookingForm /></MemoryRouter>)
  const submitButton = screen.getByText(/Enter Reservation Details/i)
  expect(submitButton).toBeDisabled();
})

test('Error message shows when guests are set to 0', () => {
  render(<MemoryRouter><BookingForm /></MemoryRouter>)
  const guestsInput = screen.getByLabelText('Guests');;
  fireEvent.change(guestsInput, {target: {value: '0'}});
  const errorMsg = screen.getByText("Please enter at least one guest")
  expect(errorMsg).toBeTruthy();
})