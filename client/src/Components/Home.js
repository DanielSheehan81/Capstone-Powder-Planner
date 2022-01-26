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
            // console.log(data)
            // setResort(data.resorts[0].id)
        })
    }, [])

    // let activityDate
    // console.log(activities)
    const renderActivities = activities.map(activity => {
        // activity.date && (setActivityDate(activity.date))
        // activityDate = activity.date
        // console.log(activity)


        return (
            <div>
                <Activities activity_id={activity.id} user_id={activity.user_id} resort_id={activity.resort_id} date={activity.date} description={activity.description} checked={activity.checked} handleActivityClick={handleActivityClick} setActivities={setActivities} stuff={activities} />

            </div>
        )
    })

    useEffect(() => {
        fetch("/resorts").then(r => r.json()).then(data => {
            setResort(data)
            console.log(data)
            // setResort(data.resorts[0].id)
        })
    }, [])

    let filterResorts = currentUser.resorts.filter((r, ind) => ind === currentUser.resorts.findIndex(elem => elem.name === r.name))

    console.log(resort)
    const renderResorts = filterResorts?.map(r => {
        console.log(r)
        return (
            <div className='resortInfo'>
                <h3>{r.name}</h3>
                <p><strong>Address:</strong> {r.address}</p>
                <p><strong>Rating:</strong> {r.rating}</p>
            </div>

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
                <div className='dataCards'>

                <div className='resortData'>
                    <h1>Resorts:</h1>
                    {renderResorts}
                    <Resort setResort={setResort} resort={resort} />
                    
                </div>
                <div className='activityData'>
                    <h1>Activities:</h1>
                    {/* <h1>{activityDate}</h1> */}
                    {renderActivities}
                    {/* <button onClick={handleActivityClick}>Add New Activity</button> */}

                    <ActivityModalForm resort={resort}
                        user={currentUser.id} handleActivityClick={handleActivityClick} activities={activities} setActivities={setActivities} />
                </div>
                </div>
                <footer></footer>
            </div>

        </>
    )
}


