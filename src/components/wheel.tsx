'use client'

import React, { useId, useState, useEffect } from "react";
import * as d3 from "d3-shape";

interface Item {
  label: string;
  image: string;
}

interface DonutWheelProps {
  items: Item[];
  sizeh?: number;
  sizew?: number;
  imageSize?: number;
  innerRadius?: number;
  outerRadius?: number;
  centerText?: string;
}

const DonutWheel: React.FC<DonutWheelProps> = ({
  items,
  sizeh = 400,
  sizew = 430,
  innerRadius = 70,
  outerRadius = 140,
  imageSize = 50,
  centerText = "Select",
}) => {
  const uniqueId = useId();

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scale factor based on screen width
  let scale = 1;
  if (windowWidth < 768) scale = 0.8; // small screens
  // else if (windowWidth < 1024) scale = 0.8; // medium screens

  // Scaled dimensions
  const sizewScaled = sizew * scale;
  const sizehScaled = sizeh * scale;
  const innerRadiusScaled = innerRadius * scale;
  const outerRadiusScaled = outerRadius * scale;
  const imageSizeScaled = imageSize * scale;
  const strokeWidthScaled = 2 * scale;
  const centerFontSize = 23 * scale;

  const arcs = d3
    .pie<any>()
    .value(1)
    .sort(null)
    .startAngle(Math.PI)
    .endAngle(Math.PI * 2 + Math.PI)(items);

  const arcGen = d3
    .arc<any>()
    .innerRadius(innerRadiusScaled)
    .outerRadius(outerRadiusScaled)
    .padAngle(0.05)
    .cornerRadius(0);

  const cx = sizewScaled / 2;
  const cy = sizehScaled / 2;

  return (
    <svg width={sizewScaled} height={sizehScaled}>
      <g transform={`translate(${cx}, ${cy})`}>
        {arcs.map((arc, i) => {
          const path = arcGen(arc) as string;

          // Mid-angle for placing image and label
          const angle = (arc.startAngle + arc.endAngle) / 2;

          // Image at mid-radius
          const rMid = (innerRadiusScaled + outerRadiusScaled) / 2;
          const xImg = rMid * Math.cos(angle - Math.PI / 2);
          const yImg = rMid * Math.sin(angle - Math.PI / 2);

          // Label slightly outside the donut
          const rLabel = outerRadiusScaled + 10 * scale;
          const xLabel = rLabel * Math.cos(angle - Math.PI / 2);
          const yLabel = rLabel * Math.sin(angle - Math.PI / 2);

          // Decide text alignment based on quadrant
          let textAnchor: "start" | "middle" | "end" = "middle";
          if (angle > Math.PI && angle < 2 * Math.PI) textAnchor = "end";
          else if (angle > 2 * Math.PI && angle < 3 * Math.PI) textAnchor = "start";

          return (
            <g key={i}>
              <path d={path} stroke="#00f5d4" strokeWidth={strokeWidthScaled} fill="none" className="slice" />

              <image
                href={items[i].image}
                x={xImg - imageSizeScaled / 2}
                y={yImg - imageSizeScaled / 2}
                width={imageSizeScaled}
                height={imageSizeScaled}
                style={{ pointerEvents: "none" }}
              />

              <text
                x={xLabel}
                y={yLabel}
                fill="white"
                fontSize={18 * scale}
                fontWeight="500"
                textAnchor={textAnchor}
                alignmentBaseline="middle"
              >
                {items[i].label}
              </text>
            </g>
          );
        })}

        {/* Center text */}
        <text
          x={0}
          y={0}
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize={centerFontSize}
          fontWeight="bold"
          fill="#00f5d4"
        >
          {centerText}
        </text>
      </g>
    </svg>
  );
};

export default DonutWheel;