"use client";
import React from "react";
import { Layer, Rect } from "react-konva";
export default function CircleLayer({ rectangles }) {
  return (
    <Layer>
      {rectangles.map((rect, i) => (
        <Rect
          key={i}
          x={rect.x}
          y={rect.y}
          width={rect.width}
          height={rect.height}
          stroke={rect.color}
        />
      ))}
    </Layer>
  );
}
