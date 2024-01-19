import React, { useState } from "react";
import Hero from "../assets/images/illustration-d.svg";
import Mobilehero from "../assets/images/illustration-m.svg";
import "./card.css";

export default function Card({ email, setEmail, setSubmitted }) {
  return (
    <div className="card">
      <img src={Mobilehero} className="mobile-hero" />

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
        <input
          type="email"
          required
          placeholder="email@company.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={() => {
            if (email) {
              setSubmitted(true);
            }
          }}
        >
          Subscribe to monthly newsletter
        </button>
      </div>
      <img src={Hero} className="hero" />
    </div>
  );
}
