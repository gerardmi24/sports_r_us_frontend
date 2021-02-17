import React from 'react'

export default function Dropdown({allSports, setCurrentSport, currentSport}) {
    // console.log(sport)
    // console.log("Current Sport", currentSport)

    const renderSports = allSports.map((sport) => 
    <option value={sport.sport_name}>{sport.sport_name}</option>
    )

    return (
        <div className="SearchText">
        Search by Sport:
        <select onChange={(e) => {setCurrentSport(e.target.value)}} className="SportOps">
            <option>All</option>
            {renderSports}
        </select>
        </div>
    )
}
