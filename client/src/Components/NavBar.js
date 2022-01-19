import React from 'react'
import { Link } from "react-router-dom"
import {FaSnowboarding} from "react-icons/fa"
import {RiLogoutBoxFill} from "react-icons/ri"
import {RiLoginBoxFill} from "react-icons/ri"

export const NavBar = ({ currentUser, setCurrentUser }) => {
    const handleLogout = () => {
        fetch("/logout", { method: "DELETE" });
        setCurrentUser(null)
    }


    return (
        <div className="navbar">
            <Link to="/">
                <FaSnowboarding size='110' color='black' />
            </Link>

            {currentUser ?
                (<Link to='/'> <RiLogoutBoxFill size='120' color='black' onClick={handleLogout} /> </Link>) :
                (<Link to='/login'> <RiLoginBoxFill size='120' color='black' /> </Link>)
            }
        </div>
    )
}

export default NavBar
