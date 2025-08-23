import React, { useId } from "react";
import * as d3 from "d3-shape";

interface Item {
  label: string;
  image: string;
}

interface DonutWheelProps {
  items: Item[];
  size?: number;
  innerRadius?: number;
  outerRadius?: number;
  centerText?: string;
}

const DonutWheel: React.FC<DonutWheelProps> = ({
  items,
  size = 400,
  innerRadius = 100,
  outerRadius = 180,
  centerText = "Select",
}) => {
  const arcs = d3.pie<any>()
    .value(1)
    .sort(null)
    .startAngle(Math.PI)      // start from bottom (6 o’clock)
    .endAngle(Math.PI * 2 + Math.PI)  // full circle
    (items);
  const arcGen = d3.arc<any>()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)
    .padAngle(0.05)
    .cornerRadius(0);

  const cx = size / 2;
  const cy = size / 2;

  const uniqueId = useId(); // unique per component instance

  return (
    <svg width={size} height={size}>
      <defs>
        {arcs.map((arc, i) => {
          const startAngle = arc.startAngle - Math.PI / 2;
          const endAngle = arc.endAngle - Math.PI / 2;
          const r = outerRadius + 5;

          const startX = r * Math.cos(startAngle);
          const startY = r * Math.sin(startAngle);
          const endX = r * Math.cos(endAngle);
          const endY = r * Math.sin(endAngle);

          const id = `textPath-${uniqueId}-${i}`;
          return (
            <path
              key={id}
              id={id}
              d={`M ${startX} ${startY} A ${r} ${r} 0 0 1 ${endX} ${endY}`}
              fill="none"
            />
          );
        })}
      </defs>

      <g transform={`translate(${cx}, ${cy})`}>
        {arcs.map((arc, i) => {
          const path = arcGen(arc) as string;
          const angle = (arc.startAngle + arc.endAngle) / 2;
          const rMid = (innerRadius + outerRadius) / 2;
          const x = rMid * Math.cos(angle - Math.PI / 2);
          const y = rMid * Math.sin(angle - Math.PI / 2);

          return (
            <g key={i}>
              <path d={path} stroke="#00f5d4" strokeWidth={2} className="slice" />

              <image
                href={items[i].image}
                x={x - 30}
                y={y - 30}
                width={60}
                height={60}
                style={{ pointerEvents: "none" }}
              />

              <text fill="white" fontSize="20" fontWeight="400">
                <textPath
                  href={`#textPath-${uniqueId}-${i}`}
                  startOffset="50%"
                  textAnchor="middle"
                >
                  {items[i].label}
                </textPath>
              </text>
            </g>
          );
        })}

        <text
          x={0}
          y={0}
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize="33"
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