import React from "react";
import styles from "./Dashboard.module.css";
import Card from "../Card/Card";

const Dashboard = () => {
  const { container } = styles;
  const flowData = [
    {
      title: "Sub-Category",
      description:
        "The assets are distributed between equity and cash & equivalents. ",
      type: "pie-chart",
      pieChartData: [
        {
          category: "Flexi Cap Fund",
          percentage: 32.19,
          color: "rgba(117, 214, 255, 1)",
        },
        {
          category: "ELSS",
          percentage: 26.04,
          color: "rgba(170, 117, 255, 1)",
        },
        {
          category: "Small Cap Fund",
          percentage: 26.4,
          color: "rgba(117, 255, 255, 1)",
        },
        {
          category: "Index Fund",
          percentage: 12.03,
          color: "rgba(255, 123, 242, 1)",
        },
        {
          category: "Sectoral Fund",
          percentage: 26.4,
          color: "rgba(255, 196, 106, 1)",
        },
        {
          category: "Large & Mid Cap Fund",
          percentage: 12.03,
          color: "rgba(255, 142, 93, 1)",
        },
      ],
    },
    {
      title: "Fund Distribution",
      description:
        "A mutual fund distribution represents the earnings of a fund being passed on to the individual investor or unit holder of the fund.",
      type: "bar-chart",
      pieChartData: [
        {
          category: "Equity",
          percentage: 32.19,
          color: "rgba(117, 214, 255, 1)",
        },
        {
          category: "Gold",
          percentage: 26.04,
          color: "rgba(170, 117, 255, 1)",
        },
        {
          category: "Bonds",
          percentage: 26.4,
          color: "rgba(117, 255, 255, 1)",
        },
        {
          category: "Govt. Securities",
          percentage: 12.03,
          color: "rgba(255, 123, 242, 1)",
        },
      ],
    },
    {
      title: "Top Sectors",
      description:
        "The assets are distributed between equity and cash & equivalents. ",
      type: "multi-bar-chart",
      pieChartData: [
        {
          category: "Oil & Gas",
          percentage: 32.19,
          color: "rgba(117, 214, 255, 1)",
        },
        {
          category: "Private Bank",
          percentage: 26.04,
          color: "rgba(170, 117, 255, 1)",
        },
        {
          category: "Pharmaceuticals",
          percentage: 26.4,
          color: "rgba(117, 255, 255, 1)",
        },
        {
          category: "Construction",
          percentage: 12.03,
          color: "rgba(255, 123, 242, 1)",
        },
        {
          category: "Power Generation",
          percentage: 26.4,
          color: "rgba(255, 196, 106, 1)",
        },
        {
          category: "Other",
          percentage: 12.03,
          color: "rgba(255, 142, 93, 1)",
        },
      ],
    },
  ];
  return (
    <div className={container}>
      {flowData?.map((each, index) => (
        <Card {...each} key={index} />
      ))}
    </div>
  );
};

export default Dashboard;
