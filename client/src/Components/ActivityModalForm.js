import React, {useState} from 'react'

function ActivityModalForm(props){
    // const [description, setDescription] = useState("")
    // const [checked, setChecked] = useState(false)
    // const [date, setDate] = useState("")
    const [newActivityForm, setNewActivityForm] = useState({
        description: "",
        checked: false,
        date: "",
        user_id: props.user_id,
        resort_id: props.resort_id
    })


    function handleChange(e) {
        setNewActivityForm({...newActivityForm, [e.target.name]: e.target.value})
    }



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
        //   .then((data) => props.handleChange(data));
      }










    return props.trigger ? (
            <div className="popup">
              <div className="popup-inner">
                <form className="pform" onSubmit={handleSubmit}>
                  <p>Description</p>
                  <input
                    name="description"
                    onChange={(e) => handleChange(e)}
                    placeholder="Enter a description."
                    value= {newActivityForm.description}
                  ></input>
                  <br />
                  <br />
                  <p>Date</p>
                  <input
                    name="date"
                    placeholder="Enter a date."
                    onChange={(e) => handleChange(e)}
                    value = {newActivityForm.date}
                  ></input>
                  
                  <br />
                  <br />
        
                  <button id="pbutton" type="submit">
                    Submit Activity
                  </button>
                  <button
                    className="close-button"
                    onClick={() => props.setTrigger(false)}
                  >
                    X
                  </button>
                  {props.children}
                </form>
              </div>
            </div>
          ) : (
            ""
          );
}

export default ActivityModalForm
