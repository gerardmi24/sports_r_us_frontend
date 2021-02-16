import React, {useState} from 'react';
import CommentsForm from './CommentsForm';

export default function UserSportsList({id, editRoster, fav, team, roster, deleteFav}) {
    const [currentRoster, setCurrentRoster] = useState(roster)
    const [formClick, setFormClick] = useState(false)

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
    }
    
    function changeRoster(e) {
        setCurrentRoster(e.target.value)
    }
    
    function handleRosterEdit(e, team, currentRoster){
        e.preventDefault()
        setFormClick(!formClick)
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
