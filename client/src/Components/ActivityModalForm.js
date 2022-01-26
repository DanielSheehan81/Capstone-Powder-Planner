import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


function ActivityModalForm(props) {
    // const [description, setDescription] = useState("")
    // const [checked, setChecked] = useState(false)
    // const [date, setDate] = useState("")
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newActivityForm, setNewActivityForm] = useState({
        description: "",
        checked: false,
        date: "",
        user_id: props.user,
        resort_id: 0
    })
    // console.log(props.activities)

    function handleChange(e) {
        setNewActivityForm({ ...newActivityForm, [e.target.name]: e.target.value })
    }
    const resortSelect = props.resort.map(r => {
        return (
            <option value={r.id}>{r.name}</option>
        )
    })



    function handleSubmit(e) {
        e.preventDefault();

        fetch("/activities", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newActivityForm),
        })
            .then((r) => r.json())
            .then((data) => {
                console.log(data)
                props.setActivities([...props.activities, data])
                setShow(false)
            });
    }






    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add New Activity
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Activity</Modal.Title>
                </Modal.Header>
                {/* <Modal.Body></Modal.Body> */}
                <Form.Group >
                    <Form.Label>Resort:</Form.Label>
                    <Form.Select  name="resort_id"
                        onChange={(e) => handleChange(e)}
                        >
                            {resortSelect}

                        </Form.Select>
                    <Form.Label>Description: </Form.Label>
                    <Form.Control type="text" name="description"
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter a description."
                        value={newActivityForm.description} />
                    <Form.Label>Date:</Form.Label>
                    <Form.Control type="text" name="date"
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter a date."
                        value={newActivityForm.date} />
                </Form.Group>
                <Modal.Footer>
                    <Button variant="secondary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}




//     return props.trigger ? (
//             <div className="popup">
//               <div className="popup-inner">
//                 <form className="pform" onSubmit={handleSubmit}>
//                   <p>Description</p>
//                   <input
//                     name="description"
//                     onChange={(e) => handleChange(e)}
//                     placeholder="Enter a description."
//                     value= {newActivityForm.description}
//                   ></input>
//                   <br />
//                   <br />
//                   <p>Date</p>
//                   <input
//                     name="date"
//                     placeholder="Enter a date."
//                     onChange={(e) => handleChange(e)}
//                     value = {newActivityForm.date}
//                   ></input>

//                   <br />
//                   <br />

//                   <button id="pbutton" type="submit">
//                     Submit Activity
//                   </button>
//                   <button
//                     className="close-button"
//                     onClick={() => props.setTrigger(false)}
//                   >
//                     X
//                   </button>
//                   {props.children}
//                 </form>
//               </div>
//             </div>
//           ) : (
//             ""
//           );


export default ActivityModalForm
