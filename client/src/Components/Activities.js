import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'


function Activities({ stuff, setActivities, activity_id, user_id, resort_id, description, checked, date, handleActivityClick }){
    console.log(description)
    console.log(stuff)
    // const [complete, setComplete] = useState({checked:true})

    

    const handleCompleted = (e) => {
        // console.log(e)
        // e.preventDefault();
        // complete.checked ? setComplete({checked:false}) : setComplete({checked:true})
        // console.log(checked)
        // console.log(complete)
        fetch(`api/activities/${e}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({checked:!checked}),
        })
            .then((r) => r.json())
            // .then(data => console.log(data.checked))
            .then((data) => {
                const tempStuff = stuff.map(s => {
                    if (s.id === data.id) {
                        return data
                    } else {
                        return s
                    }
                })
                setActivities(tempStuff)
            });
    }


    return (
        <div className='activityForm'>
            <Form>
                <p>{date}</p>
                {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                            onClick= {(e) => handleCompleted(activity_id)}
                            type={type}
                            id={`default-${type}`}
                            label={`${description}`}
                            checked= {checked}
                        />
                    </div>
                ))}
            </Form>
            
        </div>
    )
}

export default Activities
