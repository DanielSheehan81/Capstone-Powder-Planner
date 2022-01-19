import React from 'react'
import Header from './Header'

export default function Home({ currentUser, setCurrentUser}){
    return (
        <>
        <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <div>
            <p>Welcome to Powder Planner!</p>
        </div>
        </>
    )
}


