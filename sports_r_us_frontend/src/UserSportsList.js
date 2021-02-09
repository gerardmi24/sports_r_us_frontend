import React from 'react';
import CommentsForm from './CommentsForm';

export default function UserSportsList({fav, deleteFav}) {

    function removeFromFav(e){
        console.log("Delete Fav")
        // deleteFav()
    }

    return (
        <div>
            Testing out
            {fav}
            <button onClick={removeFromFav}>Delete Team</button>
            <CommentsForm />
        </div>
    )
}
