"use client";
import React from "react";

function ActionButton({ clearDrawing, download }) {
  return (
    <div className="flex gap-4">
      <button className="clear-button bg-blue-200 p-4" onClick={clearDrawing}>
        Clear
      </button>
      <button
        className="download-button bg-blue-200 p-4 "
        onClick={() => download()}
      >
        Download
      </button>
    </div>
  );
}

export default ActionButton;
