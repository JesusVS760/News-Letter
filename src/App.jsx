import React, { useState } from "react";
import Card from "./components/Card";
import "./App.css";
import { SuccessMessage } from "./components/SuccessMessage";

export default function App() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="container">
      {isSubmitted ? (
        <SuccessMessage email={email} />
      ) : (
        <Card setEmail={setEmail} setSubmitted={setIsSubmitted} email={email} />
      )}
    </div>
  );
}
