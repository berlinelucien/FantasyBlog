import React from "react";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

// resource from bulma ui website
const ContactForm = () => {
  return (
    <Container maxWidth="sm" class="has-background-link-light">
      <h1 class="is-size-2"> Newsletter </h1>
      <div className="content">
        <p class="is-size-2">Sign up for our weekly newsletter</p>
      </div>
      <Paper elevation={0} class="has-background-link-light">
        {/** User input name here */}
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" />
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
              value="hello@"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-exclamation-triangle"></i>
            </span>
          </div>
          <p class="help is-danger">This email is invalid</p>
        </div>
        {/** User can search subject like artwork or books monthly updates here */}
        <div class="field">
          <label class="label">Subject</label>
          <div class="control">
            <div class="select">
              <select>
                <option>Select dropdown</option>
                <option>Artwork</option>
                <option>Books</option>
              </select>
            </div>
          </div>
        </div>
        {/** User can send a message */}
        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea class="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>

        {/** User can agree to terms */}
        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" />I agree to the{" "}
              <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="radio">
              <input type="radio" name="question" />
              Yes
            </label>
            <label class="radio">
              <input type="radio" name="question" />
              No
            </label>
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
    </Container>
  );
};

export default ContactForm;
