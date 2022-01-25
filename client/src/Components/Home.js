import React, { useState, useEffect } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import SnowboardMan from './SnowboardMan'
import Activities from './Activities'
import MapContainer from './MapContainer'
import ActivityModalForm from './ActivityModalForm'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

export default function Home({ currentUser, setCurrentUser }) {
    const [buttonPopup, setButtonPopup] = useState(false);

    function handleActivityClick() {
        setButtonPopup(true);
    }
    const [activities, setActivities] = useState([])

    useEffect(() => {
        fetch(`/users/${currentUser.id}`).then(r => r.json()).then(data => {
            setActivities(data.activities)
        })
    }, [])

    let activityDate

    const renderActivities = activities.map(activity => {
        activityDate = activity.date

        console.log(activity)
        return (
            <div>
                <Activities user_id={activity.user_id} resort_id={activity.resort_id} description={activity.description} checked={activity.checked} handleActivityClick={handleActivityClick} buttonPopup={buttonPopup} />

            </div>
        )
    })











    return (
        <>
            <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
            
            <div className='homePage'>
                {/* <SnowboardMan /> */}
                <MapContainer />
                <br />
                <div className='activityData'>
                    <p>Welcome to Powder Planner!</p>
                    <h1>{activityDate}</h1>
                    {renderActivities}
                    <button onClick={handleActivityClick}>Add New Activity</button>

                </div>
                {/* <ActivityModalForm  trigger={buttonPopup}
           user={currentUser.id} handleActivityClick={handleActivityClick} /> */}
                <footer></footer>
            </div>

        </>
    )
}


