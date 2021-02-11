import React from 'react';
import { NavLink } from "react-router-dom"

export default function NavagationBar({onChangePage}) {

    function handleLinkClick(e) {
        e.preventDefault()
        onChangePage(e.target.pathname)
    }

    return (
        <nav>
            <NavLink exact to="/">Log In</NavLink>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
        </nav>
    )
}
