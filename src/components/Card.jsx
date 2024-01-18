import React from "react";
import Hero from "../assets/images/illustration-d.svg";
import "./card.css";

export default function card() {
  return (
    <div className="card">
      <div className="card-content">
        <h1>Stay Updated!</h1>
        <p className="card-subtitle">
          Join 60,000+ products managers receiving monthly updates on:
        </p>
        <ul>
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>
        <p className="card-email">Email address</p>
        <input type="email" placeholder="email@company.com" />
        <button>Subscribe to monthly newsletter</button>
      </div>
      <img src={Hero} />
    </div>
  );
}
