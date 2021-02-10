import React from 'react'

export default function FavSidebar({sport}) {
    return (
        <div className="FavSideBar">
            {sport.sport_name}
            <button className="removeBtn">Remove</button>
        </div>
    )
}
