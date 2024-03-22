import React from "react";
import PieChart from "./components/PieChart/PieChart";
import Bar from "./components/Bar/Bar";
import MultiBar from "./components/MultiBar/MultiBar";

const Collection = (props) => {
  switch (props.type) {
    case "pie-chart":
      return <PieChart {...props} />;
    case "bar-chart":
      return <Bar {...props} />;
    case "multi-bar-chart":
      return <MultiBar {...props} />;
    default:
      return <div>wrong chart type given</div>;
  }
};

export default Collection;
