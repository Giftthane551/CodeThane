import React, { useState } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import PriceBanner from './PriceBanner';

import './Checkin.css';

function Checkin() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const [guestName, setGuestName] = useState('');
  const [roomPreference, setRoomPreference] = useState('');
  const [adultCount, setAdultCount] = useState('1 Adult'); // New state for dropdown

  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const handleBooking = () => {
    if (startDate && endDate && guestName && roomPreference) {
      const checkInDate = startDate.format('MMMM D, YYYY');
      const checkOutDate = endDate.format('MMMM D, YYYY');
      alert(`Guest: ${guestName}\nRoom Preference: ${roomPreference}\nAdults: ${adultCount}\nBooking from ${checkInDate} to ${checkOutDate}`);
    } else {
      alert('Please fill in all the fields.');
    }
  };

  return (
    <div className='CheckinPage'>


<PriceBanner label="Discounted Price" price="$149" />

        <div className="booking-container">
         <h2 className="title">Hotel Booking Details</h2>
          <div className="input-container">
        <div className="date-picker-container">
          <DateRangePicker
            startDate={startDate}
            startDateId="your_unique_start_date_id"
            endDate={endDate}
            endDateId="your_unique_end_date_id"
            onDatesChange={handleDatesChange}
            focusedInput={focusedInput}
            onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
            numberOfMonths={1}
            isOutsideRange={() => false}
            displayFormat="MMMM D, YYYY"
          />
        </div>
        <input
          type="text"
          placeholder="First Name:"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          className="input-box"
        />
        <input
          type="text"
          placeholder="Last Name:"
          value={roomPreference}
          onChange={(e) => setRoomPreference(e.target.value)}
          className="input-box"
        />
        <input
          type="text"
          placeholder="Contact Details:"
          value={roomPreference}
          onChange={(e) => setRoomPreference(e.target.value)}
          className="input-box"
        />
        <input
          type="text"
          placeholder="UserEmail:"
          value={roomPreference}
          onChange={(e) => setRoomPreference(e.target.value)}
          className="input-box"
        />
        <input
          type="text"
          placeholder="Special Request:"
          value={roomPreference}
          onChange={(e) => setRoomPreference(e.target.value)}
          className="input-box"
        />
         
         <label htmlFor="adultCount">Select Room Preference Below</label>
       
        <select
          value={adultCount}
          onChange={(e) => setAdultCount(e.target.value)}
          className="input-box"
        >
          <option value="1 Adult">1 Adult</option>
          <option value="2 Adults">2 Adults</option>
          <option value="3 Adults">2 Adults and Children</option>

        </select>
      </div>
      <button onClick={handleBooking} className="booking-button">Book Now</button>
    </div>
</div>
  );
}

export default Checkin;
