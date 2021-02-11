import React from 'react'

export default function RosterForm() {
    return (
        <form>
            <label>
                Roster
                <input type="text" placeholder="roster" name="name" value="players" />
            </label>
        </form>
    )
}
