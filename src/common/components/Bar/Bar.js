import React, { useRef, useEffect } from "react";
import styles from "./Bar.module.css";
import GridView from "../GridView/GridView";

const Bar = (props) => {
  const { data, width, height, type, importedStyles } = props;
  const canvasRef = useRef(null);
  const { container, canvasStyle } = styles;

  useEffect(() => {
    const drawBarChart = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const colors = data.map((value) => value.color); // Assuming data contains color information

      let totalPercentage = data.reduce(
        (acc, value) => acc + value.percentage,
        0,
      );
      let startX = 10; // Starting x-coordinate for the first bar

      for (let i = 0; i < data.length; i++) {
        const barWidth = canvas.width * (data[i].percentage / totalPercentage);
        ctx.fillStyle = colors[i % colors.length];
        ctx.fillRect(startX, 0, barWidth, canvas.height); // Drawing a rectangle
        startX += barWidth; // Add some padding between bars
      }
    };

    drawBarChart();
  }, [data]);
  return (
    <div className={container}>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className={`${importedStyles ? importedStyles : canvasStyle}`}
      ></canvas>
      {type == "bar-chart" ? <GridView data={data} /> : null}
    </div>
  );
};

export default Bar;
