import React from 'react'

export default function FavSidebar({team}) {
    return (
        <div className="FavSideBar">
            {team.team_name}
        </div>
    )
}
