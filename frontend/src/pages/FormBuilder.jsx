import "./style/HomePage.css";
import Nav from "../components/Nav";
import Group from "../components/Group";
import Sample from "../components/Sample";
import { useState, useEffect } from "react";

export default function FormBuilder() {
  // Initialize from localStorage
  const [showGroup, setShowGroup] = useState(() => {
    return localStorage.getItem("showGroup") === "true";
  });

  // Save state whenever it changes
  useEffect(() => {
    localStorage.setItem("showGroup", showGroup);
  }, [showGroup]);

  return (
    <div>
      <Nav />
      <div className="wrapper">
        {!showGroup && <Sample setShowGroup={setShowGroup} />}
        {showGroup && <Group setShowGroupAgain={setShowGroup} />}
      </div>
    </div>
  );
}
