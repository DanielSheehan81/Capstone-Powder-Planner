import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'




function Resort({setResort, resort}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newResortForm, setNewResortForm] = useState({
        name: "",
        address: "",
        rating: 0
    })

    function handleChange(e) {
        setNewResortForm({ ...newResortForm, [e.target.name]: e.target.value })
    }




        
        function handleSubmit(e) {
        e.preventDefault();

        fetch("/newresort", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newResortForm),
        })
            .then((r) => r.json())
            .then((data) => {
                console.log(data)
                setResort([data, ...resort])
                setShow(false)
            });
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add New Resort
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Resort</Modal.Title>
                </Modal.Header>
                {/* <Modal.Body></Modal.Body> */}
                <Form.Group >
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" name="name"
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter a resort."
                        value={newResortForm.name} />
                    <Form.Label>Address: </Form.Label>
                    <Form.Control type="text" name="address"
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter an address."
                        value={newResortForm.address} />
                    <Form.Label>Rating:</Form.Label>
                    <Form.Control type="number" name="rating"
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter a rating."
                        value={newResortForm.rating} />
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


export default Resort
