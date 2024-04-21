"use client";
import React, { useState, useRef } from "react";
import { Stage } from "react-konva";
import { getCursor } from "@/utils";
import LinesLayer from "./LinesLayer";
import CircleLayer from "./CircleLayer";
import ActionButton from "./ActionButton";
import ToolSet from "./ToolSet";
import RectangleLayer from "./RectangleLayer";
const DrawingApp = () => {
  const [tool, setTool] = useState("pencil");
  const [color, setColor] = useState("#000000");
  const [lines, setLines] = useState([]);
  const [circles, setCircles] = useState([]);
  const [rectangles, setRectangles] = useState([]);

  const [eraserSize, setEraserSize] = useState(10);
  const [isDrawing, setIsDrawing] = useState(false);
  const stageRef = useRef(null);

  const handleToolChange = (newTool) => setTool(newTool);
  const handleColorChange = (newColor) => setColor(newColor.hex);
  const increaseEraserSize = () => setEraserSize((prevSize) => prevSize + 5);

  const decreaseEraserSize = () => {
    if (eraserSize > 5) {
      setEraserSize((prevSize) => prevSize - 5);
    }
  };

  const handleMouseDown = (event) => {
    setIsDrawing(true);
    const { offsetX, offsetY } = event.evt;

    if (tool === "eraser") {
      setLines([
        ...lines,
        { tool, color, points: [offsetX, offsetY], size: eraserSize },
      ]);
    } else if (tool === "circle") {
      setCircles([...circles, { x: offsetX, y: offsetY, radius: 0, color }]);
    } else if (tool === "rectangle") {
      setRectangles([{ x: offsetX, y: offsetY, width: 0, height: 0, color }]);
    } else {
      setLines([...lines, { tool, color, points: [offsetX, offsetY] }]);
    }
  };

  const handleMouseMove = (event) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = event.evt;
    if (tool === "circle") {
      const lastIndex = circles.length - 1;
      const updatedCircles = [...circles];
      updatedCircles[lastIndex] = {
        ...updatedCircles[lastIndex],
        radius: Math.sqrt(
          (offsetX - updatedCircles[lastIndex].x) ** 2 +
            (offsetY - updatedCircles[lastIndex].y) ** 2
        ),
      };
      setCircles(updatedCircles);
    } else if (tool === "rectangle" && rectangles.length > 0) {
      const lastIndex = rectangles.length - 1;
      const updatedRectangles = [...rectangles];
      updatedRectangles[lastIndex] = {
        ...updatedRectangles[lastIndex],
        width: offsetX - updatedRectangles[lastIndex].x,
        height: offsetY - updatedRectangles[lastIndex].y,
      };
      setRectangles(updatedRectangles);
    } else {
      const lastIndex = lines.length - 1;
      const lastLine = lines[lastIndex];
      lastLine.points = lastLine.points.concat([offsetX, offsetY]);
      const newLines = [...lines.slice(0, -1), lastLine];
      setLines(newLines);
    }
  };

  const handleMouseUp = () => setIsDrawing(false);

  const download = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = stageRef.current.toDataURL();
    downloadLink.download = "drawing.png";
    downloadLink.click();
  };

  const clearDrawing = () => {
    setLines([]);
    setCircles([]);
  };

  return (
    <>
      <ActionButton {...{ clearDrawing, download }} />
      <div className="drawing-container">
        <ToolSet
          {...{
            color,
            handleColorChange,
            handleToolChange,
            tool,
            decreaseEraserSize,
            increaseEraserSize,
            eraserSize,
          }}
        />
        <div className="toolbar">
          <Stage
            ref={stageRef}
            width={800}
            height={600}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            style={{
              cursor: getCursor(tool),
            }}
          >
            <LinesLayer lines={lines} />
            <CircleLayer circles={circles} />
            <RectangleLayer rectangles={rectangles} />
          </Stage>
        </div>
      </div>
    </>
  );
};

export default DrawingApp;
