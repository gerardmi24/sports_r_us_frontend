import React from 'react';
import CommentsForm from './CommentsForm';

export default function UserSportsList({fav}) {
    return (
        <div>
            {fav}
            <CommentsForm />
        </div>
    )
}
