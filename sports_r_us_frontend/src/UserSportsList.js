import React from 'react';
import CommentsForm from './CommentsForm';

export default function UserSportsList({fav, deleteFav}) {
    // console.log("Fav Id", fav.team.id)

    function removeFromFav(e){
        console.log("Delete Fav", e)
        fetch(`http://localhost:3000/favorites/${fav.team.id}`, {
            method: "DELETE"
        })
        .then((r) => r.json())
        .then(() => {
            console.log("Deleted")
            deleteFav(fav.team.id)
        })
    }

    return (
        <div>
            <div className="userProfFavs">
            <p> {fav.team.city} {fav.team.team_name}</p>
            <p> Coach: {fav.team.coach} </p>
            <p> Roster: {fav.team.roster} </p>
            <button className="DelBtn" onClick={removeFromFav}>Delete Team</button>
            </div>
            <CommentsForm />
        </div>
    )
}
