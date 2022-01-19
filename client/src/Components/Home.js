import React, { useState, useEffect } from 'react'
import Header from './Header'
import SnowboardMan from './SnowboardMan'
import Activities from './Activities'
import MapContainer from './MapContainer'

export default function Home({ currentUser, setCurrentUser }) {
    const [activities, setActivities] = useState([])

    useEffect(() => {
        fetch('/activities').then(r => r.json()).then(data => {
            setActivities(data)
        })
    }, [])

    let activityDate 

        const renderActivities = activities.map(activity => {
            activityDate = activity.date
            console.log(activity)
            return (
                <Activities user_id={activity.user_id} resort_id={activity.resort_id} description={activity.description} checked={activity.checked} />
        )
        })











        return (
            <>
                <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
                <div className='homePage'>
                    <SnowboardMan />
                    <MapContainer />
                    <br/>
                    <div className='activityData'>
                    <p>Welcome to Powder Planner!</p>
                    <h1>{activityDate}</h1>
                    {renderActivities}

                    </div>
                    <footer></footer>
                </div>

            </>
        )
    }


