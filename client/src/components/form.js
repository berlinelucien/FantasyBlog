import { useState } from "react";

const Form = (props) => {
  // const [student, setStudent] = useState({
  //   firstname: "",
  //   lastname: "",
  // });
  const {initialStudent = {id: null, 
    firstname: "", 
  lastname: ""}} = props;


// This is the oroginal State with not initial student 
const [student, setStudent] = useState(initialStudent);
  //create functions that handle the event of the user typing into the form
  const handleNameChange = (event) => {
    const firstname = event.target.value;
    setStudent((student) => ({ ...student, firstname }));
  };

  const handleLastnameChange = (event) => {
    const lastname = event.target.value;
    setStudent((student) => ({ ...student, lastname }));
  };

  //A function to handle the post request
  const postStudent = (newStudent) => {
    return fetch("http://localhost:4000/api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStudent),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("From the post ", data);
        // props.addStudent(data);
        props.saveStudent(data);
      });
  };

  //A function to handle the Update request
  const updateStudent = (existingStudent) =>{
    return fetch(`http://localhost:8080/api/students/${existingStudent.id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(existingStudent)
      }).then((response) => {
          return response.json()
      }).then((data) => {
        console.log("From put request ", data);
        props.saveStudent(data);
    });

}

  const handleSubmit = (e) => {
    e.preventDefault();
    //postStudent(student);
    if(student.id){
      updateStudent(student);
    } else{
      postStudent(student);
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>First Name</label>
        <input
          type="text"
          id="add-user-name"
          placeholder="First Name"
          required
          // value={student.name}
          value={student.firstname}
          onChange={handleNameChange}
        />
        <label>Last Name</label>
        <input
          type="text"
          id="add-user-lastname"
          placeholder="Last Name"
          required
          // value={student.lastname}
          value={student.lastname}
          onChange={handleLastnameChange}
        />
      </fieldset>
      <button type="submit">{!student.id ? "ADD": "SAVE"}</button>
      {/* <button type="submit">Add</button> */}
    </form>
  );
};

export default Form;
