import React, { useState } from "react";
import CommonBanner from "../CommonBanner";

import { tabs } from "../../physiotherapyData";

const PhysiotherapyTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
    <CommonBanner title={"Physiotherapy"} />
    <div className="container-lg">
      <div className="tabsContainerParent" style={styles.container}>
        <div className="innerTabsContainer" style={styles.tabsContainer}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              style={activeTab === index ? styles.activeTab : styles.tab}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="tabsContent-Conatiner" style={styles.contentContainer}>
          <h3 style={styles.title}>{tabs[activeTab]?.title} : </h3>
          {tabs[activeTab]?.content?.map((item, index) => {
            // Get the content key dynamically (content1, content2, etc.)
            const contentKey = `content${index + 1}`;
            const content = item[contentKey];

            return (
              <div key={index}>
                <div className="row align-items-center border p-3 mb-3 border-bottom">
                  <div className="col-md-8">
                    <h4
                      style={{ color: "rgb(5, 145, 191)", fontWeight: "600" }}
                    >
                      {content?.title}
                    </h4>
                    <ul className="mt-4">
                      {content?.text?.map((text, textIndex) => (
                        <li key={textIndex}>{text}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <div className="excerciseImage">
                      <img src={content?.image} alt={content?.title} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
};

// Styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "row-reverse",
    margin: "20px",
    fontFamily: "Arial, sans-serif",
    border: "1px solid #ccc",
    borderRadius: "8px",
    overflow: "hidden",
  },
  tabsContainer: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    backgroundColor: "#f8f9fa",
    borderRight: "1px solid #ccc",
    // marginTop: "200px",
    height: "fit-content",
    border: "1px solid #ccc",
  },
  tab: {
    padding: "15px 10px",
    border: "none",
    textAlign: "left",
    backgroundColor: "transparent",
    color: "#333",
    fontWeight: "normal",
    cursor: "pointer",
    outline: "none",
    borderLeft: "4px solid transparent",
  },
  activeTab: {
    padding: "15px 10px",
    border: "none",
    textAlign: "left",
    backgroundColor: "#e9ecef",
    color: "rgb(5, 145, 191)",
    fontWeight: "bold",
    cursor: "pointer",
    outline: "none",
    borderLeft: "4px solid rgb(5, 145, 191)",
  },
  contentContainer: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#fff",
    // marginTop: "200px",
  },
  title: {
    marginBottom: "10px",
    fontWeight: "600",
  },
};

export default PhysiotherapyTabs;
