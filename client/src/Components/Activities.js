import React from 'react'
import Form from 'react-bootstrap/Form'
import ActivityModalForm from './ActivityModalForm';

function Activities({ user_id, resort_id, description, checked, date, handleActivityClick, buttonPopup }){




    return (
        <div className='activityForm'>
            <h1>{date}</h1>
            <Form>
                {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label={`${description}`}
                        />
                    </div>
                ))}
            </Form>
            
        </div>
    )
}

export default Activities
