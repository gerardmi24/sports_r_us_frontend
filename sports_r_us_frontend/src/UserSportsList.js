import React, {useState} from 'react';
import CommentsForm from './CommentsForm';

export default function UserSportsList({id, editRoster, fav, team, roster, deleteFav}) {
    const [currentRoster, setCurrentRoster] = useState(roster)
    const [formClick, setFormClick] = useState(false)
    // const {id, sport_id, team_name, city} = team
    // console.log("Current?", currentRoster)
    // console.log("Team Id", id, currentRoster)
    // const [currentRoster, setCurrentRoster] = useState(fav.team.roster)
    // let roster = fav.team.roster
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
    
    function toggleClick(e) {
        setFormClick(!formClick)
        // console.log("Form click", formClick)
    }
    
    function changeRoster(e) {
        setCurrentRoster(e.target.value)
        // console.log("Value", e.target.value)
    }
    
    function handleRosterEdit(e, team, currentRoster){
        e.preventDefault()
        // console.log("Pass to PATCH", team, team.id, currentRoster)
        editRoster(e, team, currentRoster)
    }

    return (
        <div>
            <div className="userProfFavs">
            <p> {team.city} {team.team_name} </p>
            <p> Coach: {team.coach}
            <button className="DelBtn" onClick={removeFromFav}>Delete Team</button>
            </p>
            <p> Roster: {roster}
            <button className="EditRoster" onClick={toggleClick}>Edit Roster</button>
            {formClick === true ? 
            <form onSubmit={((e) => handleRosterEdit(e, team, currentRoster))}>
                <label className="EditLabel">
                    Edit Roster:
                    <input className="EditPlayers" type="text" name="currentRoster" onChange={changeRoster} value={currentRoster} />
                </label>
                <input className="FormSubmit" type="submit" value="Submit" />
            </form>
            :
             null}
            </p>
            </div>
            <CommentsForm />
        </div>
    )
}
