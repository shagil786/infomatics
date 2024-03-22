import React from "react";
import styles from "./GridView.module.css";

const GridView = (props) => {
  const { data, style } = props;
  const { container, blockConatainer } = styles;
  return (
    <div className={container}>
      {data?.map((each, index) => (
        <div className={blockConatainer} key={`${each?.percentage}_${index}`}>
          {Object?.entries(each)?.map(([key, _], index) => (
            <p
              key={index}
              style={
                key == "color"
                  ? {
                      backgroundColor: each?.[key],
                    }
                  : {}
              }
              data-type={key}
            >
              {key != "color" ? each?.[key] : ""}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GridView;
