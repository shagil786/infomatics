import React, { useEffect, useRef, useState } from "react";
import styles from "./PieChart.module.css";
import GridView from "../GridView/GridView";
import DataPortal from "../PortalView/DataPortal";
import { createPortal } from "react-dom";

const PieChart = (props) => {
  const { data, width, height } = props;
  const canvasRef = useRef(null);
  const { container, canvasStyle, tableView } = styles;
  const [position, setPosition] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const totalValue = data.reduce((acc, value) => acc + value.percentage, 0);
    const ctx = canvas.getContext("2d");
    const colors = data.map((value) => value.color);

    let startAngle = 0;

    const drawPieSegment = (index) => {
      if (index >= data.length) return; // Stop drawing if all segments have been drawn

      const sliceAngle = 2 * Math.PI * (data[index].percentage / totalValue);
      ctx.fillStyle = colors[index % colors.length];
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, canvas.height / 2);
      ctx.arc(
        canvas.width / 2,
        canvas.height / 2,
        Math.min(canvas.width / 2, canvas.height / 2),
        startAngle,
        startAngle + sliceAngle,
      );
      ctx.closePath();
      ctx.fill();

      startAngle += sliceAngle;

      // Draw the next segment after a delay
      setTimeout(() => {
        drawPieSegment(index + 1);
      }, 200); // Adjust the delay duration as needed
    };

    drawPieSegment(0);

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const angle =
        Math.atan2(y - canvas.height / 2, x - canvas.width / 2) + Math.PI; // Angle from center

      let segmentIndex = data.findIndex((_, i) => {
        let cumulativePercentage = 0;
        for (let j = 0; j <= i; j++) {
          cumulativePercentage += data[j].percentage;
        }
        const segmentStart =
          ((cumulativePercentage - data[i].percentage) * 2 * Math.PI) /
          totalValue;
        const segmentEnd = (cumulativePercentage * 2 * Math.PI) / totalValue;
        return angle >= segmentStart && angle <= segmentEnd;
      });

      if (segmentIndex !== -1) {
        // Check if a segment was found
        setPosition({
          content: `${data[segmentIndex].percentage}`, // Customize tooltip content
          x: x,
          y: y,
          show: true,
        });
      } else {
        setPosition({ ...position, show: false }); // Hide tooltip
      }
    };

    const handleMouseLeave = () => {
      setPosition(null); // Reset position when mouse leaves canvas
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup event listener
    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [data]);

  console.log(position);

  return (
    <div className={container}>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className={canvasStyle}
      ></canvas>
      {position &&
        createPortal(
          <DataPortal data={data[0]} rect={position} />,
          document.body,
        )}
      <GridView data={data} />
    </div>
  );
};

export default PieChart;
