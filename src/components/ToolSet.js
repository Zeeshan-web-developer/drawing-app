import React from "react";
import { CompactPicker } from "react-color";
import { BsPencil } from "react-icons/bs";
import { FaRegCircle } from "react-icons/fa";
import { PiRectangle } from "react-icons/pi";
import { CiEraser } from "react-icons/ci";
import { MdOutlineRectangle } from "react-icons/md";

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
    <div className="flex flex-col border-black border-2 p-2 ">
      <h2
        className=" 
              text-xl font-bold mb-2 text-center underline
          "
      >
        Toolbar
      </h2>
      <div
        className="grid grid-cols-2 gap-1 mb-8
      
    
      "
      >
        <BsPencil
          size={50}
          className="tool-icon   cursor-pointer border-black border-2 p-2"
          onClick={() => handleToolChange("pencil")}
        />
        <FaRegCircle
          size={50}
          className="tool-icon  cursor-pointer border-black border-2 p-2"
          onClick={() => handleToolChange("circle")}
        />
        <CiEraser
          size={50}
          className="tool-icon   cursor-pointer border-black border-2 p-2"
          onClick={() => handleToolChange("eraser")}
        />
        <MdOutlineRectangle
          size={50}
          className="tool-icon   cursor-pointer border-black border-2 p-2"
          onClick={() => handleToolChange("rectangle")}
        />
      </div>

      <CompactPicker color={color} onChange={handleColorChange} />
    </div>
  );
}

export default ToolSet;
