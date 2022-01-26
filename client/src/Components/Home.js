import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import SnowboardMan from './SnowboardMan'
import Activities from './Activities'
import MapContainer from './MapContainer'
import ActivityModalForm from './ActivityModalForm'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Resort from './Resort';
export default function Home({ currentUser, setCurrentUser }) {
    // const [activityDate, setActivityDate] = useState("Default")
    const [buttonPopup, setButtonPopup] = useState(false);
    const [resort, setResort] = useState([])
    
    function handleActivityClick() {
        setButtonPopup(true);
    }
    const [activities, setActivities] = useState([])
    
    useEffect(() => {
        fetch(`/users/${currentUser.id}`).then(r => r.json()).then(data => {
            setActivities(data.activities)
            console.log(data)
            // setResort(data.resorts[0].id)
        })
    }, [])

    // let activityDate
    // console.log(activities)
    const renderActivities = activities.map(activity => {
        // activity.date && (setActivityDate(activity.date))
        // activityDate = activity.date
        console.log(activity)

        
        return (
            <div>
                <Activities user_id={activity.user_id} resort_id={activity.resort_id} date={activity.date} description={activity.description} checked={activity.checked} handleActivityClick={handleActivityClick} buttonPopup={buttonPopup} />

            </div>
        )
        })

        const renderResorts = resort.map(resort => {
            console.log(resort)
            return (
                <h1>{resort.name}</h1>
            )
        })



    // console.log(currentUser.resorts[0].id)

    return (
        <>
            <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
            
            <div className='homePage'>
                {/* <SnowboardMan /> */}
                <MapContainer />
                <br />
                <Resort setResort={setResort} resort={resort}/>
                <div className='activityData'>
                    <p>Welcome to Powder Planner!</p>
                    {/* <h1>{activityDate}</h1> */}
                    {renderResorts}
                    {renderActivities}
                    {/* <button onClick={handleActivityClick}>Add New Activity</button> */}

                <ActivityModalForm  trigger={buttonPopup}
           user={currentUser.id}  handleActivityClick={handleActivityClick} activities= {activities} setActivities= {setActivities} />
                </div>
                <footer></footer>
            </div>

        </>
    )
}


