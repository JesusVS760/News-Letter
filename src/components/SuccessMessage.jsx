import React from "react";
import SuccessCheck from "../assets/images/icon-list.svg";
import "./SuccessMessage.css";

export const SuccessMessage = ({ email }) => {
  return (
    <div className="successContainer">
      <div className="successContent">
        <img src={SuccessCheck} className="successCheckmark" />
        <h1>Thank you for subscribing!</h1>
        <p>
          A confirmation email has been sent to{" "}
          <span className="emailSent">{email} </span>. Please open it and click
          the button inside to confirm your subscription
        </p>
      </div>
      <button>Dismiss message</button>
    </div>
  );
};
