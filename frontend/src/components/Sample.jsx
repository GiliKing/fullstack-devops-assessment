import "./style/sample.css";
import { useState, useEffect } from "react";

export default function Sample({ setShowGroup }) {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => setIsOn(!isOn);

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", "section1");
  };

  // Load title from localStorage if exists
  const [title, setTitle] = useState(() => {
    return localStorage.getItem("sectionTitle") || "";
  });

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    if (data === "section1") {
      // Hide Sample and show Group
      setShowGroup(true);
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  // Save title to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("sectionTitle", title);
  }, [title]);

  return (
    <div className="sections">
      <div className="section" draggable onDragStart={handleDragStart}>
        <div className="top">
          <span>Section 1</span>
          <div className="toggle">
            <span className="small">Required</span>
            <div className="toggle-switch" onClick={handleToggle}>
              <div className={`switch ${isOn ? "on" : "off"}`}></div>
            </div>
            <span>
              <i className="fa-regular fa-clone"></i>
            </span>
            <span>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </div>
        </div>
        <input
          type="text"
          className="section-title-input"
          placeholder="Title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Drop Area */}
      <div className="drop" onDrop={handleDrop} onDragOver={handleDragOver}>
        <span>Drag or Drop</span>
      </div>
    </div>
  );
}
