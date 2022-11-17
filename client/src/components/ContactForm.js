import React from "react";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

// resource from bulma ui website
const ContactForm = (props) => {
  //user able to chose preference either artwork or books infor
  const Choice = ["Artwork", "Books"];
  // initial state 
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  
 // handle the user inputting the values
  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((originalValues) => ({
        ...originalValues,
        [name]: value,
      }));
    };
  };

// function to handle the user submitting information
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    props.onSubmit(values)
  };

  

  return (
    <Container maxWidth="sm" class="has-background-link-light">
      <h1 class="is-size-2"> Newsletter </h1>
      <div className="content">
        <p class="is-size-2">Sign up for our weekly newsletter</p>
      </div>
      <form onSubmit={handleSubmit}>
        <Paper elevation={0} class="has-background-link-light">
          {/** User input name here */}
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Text input"
                value={values.name}
                onChange={set("name")}
              />
            </div>
          </div>

          {/** User input email here */}
          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input is-danger"
                type="email"
                placeholder="Email input"
                required
                value={values.email}
                onChange={set("email")}
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
          </div>
          {/** User can search subject like artwork or books monthly updates here */}
          <div class="field">
            <label class="label">Subject</label>
            <div class="control">
              <div class="select">
                <select>
                  <option>Select dropdown</option>
                  {Choice.map((preference) => (
                    <option key={preference}>{ preference }</option>
                  ))}
                  {/* <option>Artwork</option>
                  <option>Books</option> */}
                </select>
              </div>
            </div>
          </div>
          {/** User can send a message */}
          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea
                class="textarea"
                placeholder="Textarea"
                value={values.message}
                onChange={set("message")}
              ></textarea>
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">Submit</button>
            </div>
            <div class="control">
              {/** refractor this code to use useNavigate to go back previous */}
              <a href="/">
                <button class="button is-link is-light">Cancel</button>
              </a>
            </div>
          </div>
        </Paper>
      </form>
    </Container>
  );
};

export default ContactForm;
