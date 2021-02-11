import React, {useState} from 'react';
import RosterForm from './RosterForm'
import CommentsForm from './CommentsForm';

export default function UserSportsList({fav, deleteFav}) {
    // const {team, roster} = fav
    // console.log("Destructure Test", team)
    // const [currentRoster, setCurrentRoster] = useState(fav.team.roster)
    // let roster = fav.team.roster

    // console.log("Current Roster", roster)


    // const renderRoster = roster.map(players => console.log(players))

    function removeFromFav(e){
        fetch(`http://localhost:3000/favorites/${fav.id}`, {
            method: "DELETE"
        })
        .then((r) => r.json())
        .then(() => {
            deleteFav(fav.id)
        })
    }

    function handleRosterEdit(e){
        // console.log("Roster Form", e)
        // return <RosterForm />
        // return team.map(players => console.log("Players", players))
        // <Roster  />
    }
      // console.log("PATCH", e, fav.team.roster)

        // fetch(`http://localhost:3000/teams/`, {
        //     method: "PATCH",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({fav.team})
        // })

    return (
        <div>
            <div className="userProfFavs">
            <p> {fav.team.city} {fav.team.team_name} </p>
            <p> Coach: {fav.team.coach}
            <button className="DelBtn" onClick={removeFromFav}>Delete Team</button>
            </p>
            <p> Roster: {fav.team.roster}
            <button className="EditRoster" onClick={handleRosterEdit}>Edit Roster</button>
            </p>
            </div>
            <CommentsForm />
        </div>
    )
}
