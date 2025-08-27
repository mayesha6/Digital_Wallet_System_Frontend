// components/Tour.tsx
import React, { useState, useEffect } from "react";
import Joyride, { Step } from "react-joyride";

const Tour: React.FC = () => {
  const [runTour, setRunTour] = useState(false);

  // Check localStorage if user has already seen the tour
  useEffect(() => {
    const tourSeen = localStorage.getItem("tourSeen");
    if (!tourSeen) {
      setRunTour(true);
    }
  }, []);

  const steps: Step[] = [
    {
      target: ".nav-menu",
      content: "Use the navigation menu to switch between sections quickly.",
      placement: "right",
    },
    {
      target: ".dashboard-cards",
      content: "Here you can see a quick summary of your key stats.",
      placement: "bottom",
    },
    {
      target: ".chart-section",
      content: "Visualize trends over time using our interactive charts.",
      placement: "top",
    },
    {
      target: ".table-search",
      content: "Search or filter your records easily here.",
      placement: "bottom",
    },
    {
      target: ".theme-toggle",
      content: "Switch between light and dark themes anytime.",
      placement: "left",
    },
  ];

  return (
    <Joyride
      steps={steps}
      run={runTour}
      continuous
      scrollToFirstStep
      showProgress
      showSkipButton
      styles={{
        options: {
          zIndex: 10000,
          primaryColor: "#7f5af0",
          textColor: "#333",
          overlayColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
      callback={(data) => {
        const { status } = data;
        if (["finished", "skipped"].includes(status)) {
          localStorage.setItem("tourSeen", "true");
          setRunTour(false);
        }
      }}
    />
  );
};

export default Tour;
