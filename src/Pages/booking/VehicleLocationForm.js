// src/components/VehicleLocationForm.js
import React, { useState } from 'react';
import axios from 'axios';

const VehicleLocationForm = () => {
    const [vehicleId, setVehicleId] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [timestamp, setTimestamp] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Construct the payload
        const locationData = {
            vehicleId,
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
            timestamp: timestamp ? new Date(timestamp).toISOString() : new Date().toISOString(), // Ensure it’s in ISO format
        };
        

        try {
            // Send POST request to API
            const response = await axios.post('https://localhost:7194/api/vehicles/location', locationData);
            alert(response.data); // Show success message
        } catch (error) {
            console.error('Error posting data:', error);
            alert('Failed to save location data.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Vehicle ID:
                <input type="text" value={vehicleId} onChange={(e) => setVehicleId(e.target.value)} required />
            </label>
            <br />
            <label>
                Latitude:
                <input type="number" step="0.000001" value={latitude} onChange={(e) => setLatitude(e.target.value)} required />
            </label>
            <br />
            <label>
                Longitude:
                <input type="number" step="0.000001" value={longitude} onChange={(e) => setLongitude(e.target.value)} required />
            </label>
            <br />
            <label>
                Timestamp:
                <input type="datetime-local" value={timestamp} onChange={(e) => setTimestamp(e.target.value)} />
            </label>
            <br />
            <button type="submit">Submit Location</button>
        </form>
    );
};

export default VehicleLocationForm;
