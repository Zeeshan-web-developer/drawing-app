"use client";
import React from "react";
import { Layer, Circle } from "react-konva";
export default function CircleLayer({ circles }) {
  return (
    <Layer>
      {circles.map((circle, i) => (
        <Circle
          key={i}
          x={circle.x}
          y={circle.y}
          radius={circle.radius}
          stroke={circle.color}
        />
      ))}
    </Layer>
  );
}
