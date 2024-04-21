"use client";
import React from "react";
import { Layer, Line } from "react-konva";

function LinesLayer({ lines }) {
  return (
    <Layer>
      {lines.map((line, i) => (
        <Line
          key={i}
          points={line.points}
          stroke={line.color}
          strokeWidth={line.tool === "eraser" ? line.size : 5}
          tension={0.5}
          lineCap="round"
          globalCompositeOperation={
            line.tool === "eraser" ? "destination-out" : "source-over"
          }
        />
      ))}
    </Layer>
  );
}

export default LinesLayer;
