import "./style/group.css";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { createForm } from "../api/form";

export default function Group({ setShowGroupAgain }) {
  const [sections, setSections] = useState([{}]);
  const [isOnArray, setIsOnArray] = useState([false]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // const navigate = useNavigate();

  const [showGroup, setShowGroup] = useState(() => {
    const stored = localStorage.getItem("showGroup");
    return stored ? stored === "true" : true;
  });

  // const [title, getTitle] = useState(() => {
    const title = localStorage.getItem("sectionTitle");
    // return title;
  // });

  const [formData, setFormData] = useState({
    title: title,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    website: "",
    dateOfBirth: "",
    country: "",
    file: null,
  });

  const handleToggle = (index) => {
    const newIsOnArray = [...isOnArray];
    newIsOnArray[index] = !newIsOnArray[index];
    setIsOnArray(newIsOnArray);
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", `section${index}`);
  };

  // const handleDrop = (e) => {
  //   e.preventDefault();
  //   const data = e.dataTransfer.getData("text/plain");
  //   if (data.startsWith("section")) {
  //     navigate("/newpage");
  //   }
  // };

  // const handleDragOver = (e) => e.preventDefault();

  const addSection = () => {
    setSections([...sections, {}]);
    setIsOnArray([...isOnArray, false]);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    try {
      const formToSend = new FormData();
      for (const key in formData) {
        formToSend.append(key, formData[key]);
      }

      const response = await createForm(formToSend);
      console.log("Response:", response);
      alert("Data submitted successfully!");
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Error submitting data");
    }
  };

  useEffect(() => {
    localStorage.setItem("showGroup", showGroup.toString());
  }, [showGroup]);

  useEffect(() => {
    if (setShowGroupAgain) {
      setShowGroup(true);
      localStorage.setItem("showGroup", "true");
    }
  }, [setShowGroupAgain]);

  if (!showGroup) return null;

  return (
    <div className="group-page-container">
      <div className={`groups ${sidebarOpen ? "shifted" : ""}`}>
        {sections.map((_, index) => (
          <div
            key={index}
            className="section"
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
          >
            <div className="top">
              <span>{title}</span>
              <div className="toggle">
                <span className="small">Required</span>
                <div
                  className="toggle-switch"
                  onClick={() => handleToggle(index)}
                >
                  <div
                    className={`switch ${isOnArray[index] ? "on" : "off"}`}
                  ></div>
                </div>
                <span>
                  <i className="fa-solid fa-share-nodes"></i>
                </span>
                <span>
                  <i className="fa-regular fa-clone"></i>
                </span>
                <span>
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </span>
                <span
                  className="reset"
                  onClick={() => {
                    setShowGroup(false);
                    localStorage.setItem("showGroup", "false");
                    setShowGroupAgain(false);
                  }}
                >
                  X
                </span>
              </div>
            </div>

            {/* Input fields */}
            <div className="main-one">
              <div className="first-name">
                <span>First Name</span>
                <div className="detail">
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>

            <div className="main-two">
              <div className="last-name">
                <span>Last Name</span>
                <div className="detail">
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>

            <div className="main-three">
              <div className="email">
                <span>Email</span>
                <div className="detail">
                  <input
                    type="text"
                    value={formData.email}
                    onChange={(e) =>
                      handleInputChange("email", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>

            <div className="main-four">
              <div className="phone">
                <span>Phone</span>
                <div className="detail">
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) =>
                      handleInputChange("phone", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>

            <div className="main-five">
              <div className="address">
                <span>Address</span>
                <div className="detail">
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) =>
                      handleInputChange("address", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>

            <div className="main-six">
              <div className="date-of-birth">
                <span>Website</span>
                <div className="detail">
                  <input
                    type="text"
                    value={formData.website}
                    onChange={(e) =>
                      handleInputChange("website", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>

            <div className="main-seven">
              <div className="state">
                <span>DOB</span>
                <div className="detail">
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) =>
                      handleInputChange("dateOfBirth", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>

            <div className="main-eight">
              <div className="residency">
                <span>Country</span>
                <div className="detail">
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) =>
                      handleInputChange("country", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>

            <div className="main-nine">
              <div className="photo">
                <span>Photo</span>
                <div className="detail">
                  <input
                    type="file"
                    onChange={(e) =>
                      handleInputChange("file", e.target.files[0])
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="add-section" onClick={addSection}>
          <i className="fa-solid fa-square-plus"></i>
        </div>

        <div className="end">
          <button className="end" onClick={handleSubmit}>
            End
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <button
        className="sidebar-toggle-btn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <span>+</span>
        <span>&nbsp; Add Elements</span>
      </button>

      <aside className={`my-sidebar-right ${sidebarOpen ? "open" : ""}`}>
        <div className="element">
          <span className="close" onClick={() => setSidebarOpen(!sidebarOpen)}>
            X
          </span>{" "}
          &nbsp; &nbsp;Element
        </div>

        <div className="prf">
          <span>PRF - Account Profile</span>
          <span>v</span>
        </div>

        <div className="list">
          <div className="one">
            <ol>
              <li>
                <i className="fa-solid fa-chevron-down"></i> Photo
              </li>
              <li>
                <i className="fa-solid fa-chevron-down"></i> State
              </li>
              <li>
                <i className="fa-solid fa-chevron-down"></i> Gender
              </li>
              <li>
                <i className="fa-solid fa-chevron-down"></i> Email Address
              </li>
            </ol>
          </div>
          <div className="two">
            <ol>
              <li>
                <i className="fa-solid fa-chevron-down"></i> DATE oF Birth
              </li>
              <li>
                <i className="fa-solid fa-chevron-down"></i> Mobile Number
              </li>
              <li>
                <i className="fa-solid fa-chevron-down"></i> First Name
              </li>
              <li>
                <i className="fa-solid fa-chevron-down"></i> Last Name
              </li>
            </ol>
          </div>
        </div>
      </aside>
    </div>
  );
}
