import React, { useState } from "react";
import { patientEducationData } from "../../patientEDucationData";

const PatientEducationTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [subActiveTab, setSubActiveTab] = useState(0);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      fontFamily: "Arial, sans-serif",
    },
    mainTabsContainer: {
      display: "flex",
      justifyContent: "space-around",
      backgroundColor: "#f8f9fa",
      borderBottom: "2px solid #ccc",
      padding: "10px 0",
    },
    mainTab: {
      padding: "10px 20px",
      border: "none",
      backgroundColor: "transparent",
      color: "#333",
      fontWeight: "normal",
      cursor: "pointer",
      outline: "none",
      borderBottom: "4px solid transparent",
    },
    activeMainTab: {
      padding: "10px 20px",
      border: "none",
      backgroundColor: "transparent",
      color: "rgb(5, 145, 191)",
      fontWeight: "bold",
      cursor: "pointer",
      outline: "none",
      borderBottom: "4px solid rgb(5, 145, 191)",
    },
    contentContainer: {
      display: "flex",
      marginTop: "20px",
      flexDirection: "row-reverse",
    },
    subTabsContainer: {
      display: "flex",
      flexDirection: "column",
      width: "250px",
      backgroundColor: "rgb(5 145 191)",
      color: "white",
      padding: "10px 0",
      height:" fit-content"
    },
    subTab: {
      padding: "15px",
      textAlign: "left",
      backgroundColor: "transparent",
      color: "white",
      fontWeight: "normal",
      cursor: "pointer",
      outline: "none",
      borderBottom: "1px solid white",
    },
    activeSubTab: {
      padding: "15px",
      textAlign: "left",
      backgroundColor: "#0056b3",
      color: "white",
      fontWeight: "bold",
      cursor: "pointer",
      outline: "none",
    },
    detailsContainer: {
      flex: 1,
      padding: "20px",
    },
    title: {
      color: "rgb(5, 145, 191)",
      fontWeight: "600",
    },
    headingImageContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "15px",
    },
    imageStyle: {
      borderRadius: "10px",
      maxWidth: "200px",
      height: "auto",
    },
    
  };

  const renderContent = (content) => {
    return content.map((section, index) => (
      <div  key={index} className="d-flex justify-content-between tabs-content-separation">
        <div style={{ width: "78%" }}>
          {/* Section Title */}
          <div style={styles.headingImageContainer}>
            <h4 style={styles.title}>{section.title}</h4>
          </div>

          {/* Section Text */}
          {Array.isArray(section.text) ? (
            <ul>
              {section.text.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <ul>
              {section.text.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          {/* Render Subtitles */}
          {section.subtitle1 && (
            <div>
              <h5 style={{fontWeight:600}}>{section.subtitle1}</h5>
              <ul>
                {section.text.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {section.subtitle2 && (
            <div>
              <h5 style={{fontWeight:600}}>{section.subtitle2}</h5>
              <ul>
                {section.text.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {section.subtitle3 && (
            <div>
              <h5 style={{fontWeight:600}}>{section.subtitle3}</h5>
              <ul>
                {section.text.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Section Image */}
        <div style={{ width: "20%" }}>
          {section.image && (
            <img
              src={section.image}
              alt={section.title}
              style={styles.imageStyle}
            />
          )}
        </div>
      </div>
    ));
  };

  return (
    <div className="container-lg" style={styles.container}>
      {/* Main Tabs */}
      <div  className="patientEducatonTabs"  style={styles.mainTabsContainer}>
        {patientEducationData.map((tab, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveTab(index);
              setSubActiveTab(0);
            }}
            style={activeTab === index ? styles.activeMainTab : styles.mainTab}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Content Container */}
      <div className="contentContainer-tabs" style={styles.contentContainer}>
        {/* Sub Tabs */}
        <div className="subTabsContainer" style={styles.subTabsContainer}>
          {patientEducationData[activeTab].subTabs.map((subTab, index) => (
            <button
              key={index}
              onClick={() => setSubActiveTab(index)}
              style={
                subActiveTab === index ? styles.activeSubTab : styles.subTab
              }
            >
              {subTab.title}
            </button>
          ))}
        </div>

        {/* Details Container */}
        <div style={styles.detailsContainer}>
          {/* Main Title */}
          <h3 style={styles.title}>
            {patientEducationData[activeTab].subTabs[subActiveTab].title}
          </h3>

          {/* Render Content */}
          {renderContent(
            patientEducationData[activeTab].subTabs[subActiveTab].content
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientEducationTabs;