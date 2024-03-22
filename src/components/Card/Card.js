import React from "react";
import styles from "./Card.module.css";
import Collection from "../../common/Collection";
import { convertToMultiArray } from "../../utils/changeTo2d";

const Card = (props) => {
  const {
    container,
    headerContainer,
    componentContainer,
    cardContainer,
    mainContainer,
  } = styles;
  const { title, description, data, type, pieChartData } = props;
  return (
    <div className={container}>
      <div className={headerContainer}>
        <h1>{title}</h1>
        <h3>{description}</h3>
      </div>
      <div className={cardContainer}>
        <div className={componentContainer}>
          <Collection
            type={type}
            data={
              type === "multi-bar-chart"
                ? convertToMultiArray(pieChartData, 2)
                : pieChartData
            }
            originalData={pieChartData}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
