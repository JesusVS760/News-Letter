import React from "react";
import Card from "./components/Card";
import "./App.css";
import MobileCard from "./components/MobileCard";

export default function App() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="container">{isMobile ? <Card /> : <MobileCard />}</div>
  );
}
