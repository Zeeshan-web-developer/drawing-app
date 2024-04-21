import React from "react";
import { CompactPicker } from "react-color";

function ToolSet({
  handleColorChange,
  handleToolChange,
  tool,
  decreaseEraserSize,
  color,
  increaseEraserSize,
  eraserSize,
}) {
  return (
    <div className="flex flex-col myt-2">
      <CompactPicker color={color} onChange={handleColorChange} />

      <div className="flex gap-2">
        <button
          className={`tool-button ${tool === "pencil" && "active"}`}
          onClick={() => handleToolChange("pencil")}
        >
          Pencil
        </button>
      </div>

      <div className="flex gap-2">
        <button
          className={`tool-button ${tool === "eraser" && "active"}`}
          onClick={() => handleToolChange("eraser")}
        >
          Eraser
        </button>

        {tool === "eraser" && (
          <>
            <button className="eraser-size-button" onClick={decreaseEraserSize}>
              - Eraser Size: {eraserSize}px
            </button>
            <button className="eraser-size-button" onClick={increaseEraserSize}>
              + Eraser Size: {eraserSize}px
            </button>
          </>
        )}
      </div>
      <div className="flex gap-2">
        <button
          className={`tool-button ${tool === "circle" && "active"}`}
          onClick={() => handleToolChange("circle")}
        >
          Circle
        </button>
      </div>
      <div className="flex gap-2">
        <button
          className={`tool-button ${tool === "rectangle" && "active"}`}
          onClick={() => handleToolChange("rectangle")}
        >
          Rectangle
        </button>
      </div>
    </div>
  );
}

export default ToolSet;
