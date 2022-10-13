import React from "react";

const ThankMessage = (props) => {
  return (
    <div>
      <h3>Thank you for submitting our form </h3>
      <h3> {props.data.name} </h3>
      <p> You register the email {props.data.email}</p>
    </div>
  );
};

export default ThankMessage;
