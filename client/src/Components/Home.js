import React from 'react'
import Header from './Header'
import SnowboardMan from './SnowboardMan'

export default function Home({ currentUser, setCurrentUser}){
    return (
        <>
        <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <div>
            <SnowboardMan />
            <p>Welcome to Powder Planner!</p>
        </div>
        </>
    )
}


