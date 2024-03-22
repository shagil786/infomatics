import React, { useRef, useEffect } from "react";
import styles from "./MultiBar.module.css";
import GridView from "../GridView/GridView";
import Bar from "../Bar/Bar";

const MultiBar = (props) => {
  const { container, barClass } = styles;
  const { data, originalData, type } = props;
  return (
    <div className={container}>
      {data?.map((each, index) => (
        <Bar key={index} data={each} type={type} importedStyles={barClass} />
      ))}
      <GridView data={originalData} />
    </div>
  );
};

export default MultiBar;
