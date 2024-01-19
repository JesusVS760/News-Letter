import React from "react";
import MobileHero from "../assets/images/illustration-m.svg";
export const MobileCard = () => {
  return (
    <div>
      <div className="mobile-card">
        <div className="mobile-card-content">
          <h1>Stay Updated!</h1>
          <p className="mobile-card-subtitle">
            Join 60,000+ products managers receiving monthly updates on:
          </p>
          <ul>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
          <p className="mobile-card-email">Email address</p>
          <input type="email" placeholder="email@company.com" />
          <button>Subscribe to monthly newsletter</button>
        </div>
        <img src={MobileHero} />
      </div>
    </div>
  );
};
