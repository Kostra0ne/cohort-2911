import React from 'react'
import Rating from '../components/Rating'

function DriverCard({name, rating, img, car}) {
    return (
        <div className='driver-container'>
            <div className="card">
                <div className="profile-photo"><img src={img} alt="profile" /></div>
                <div className="driver-infos">
                    <h2>{name}</h2>
                    <Rating>{rating}</Rating>
                    <p>{car.model} - {car.licensePlate}</p>
                </div>
            </div>
            
        </div>
    )
}

export default DriverCard
