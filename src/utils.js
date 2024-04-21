export const getCursor = (tool) => {
  if (tool === "eraser") {
    return `url(https://icons.iconarchive.com/icons/custom-icon-design/flatastic-6/128/Eraser-icon.png), auto`;
  }
  if (tool === "circle") {
    return "crosshair";
  } else if (tool === "text") {
    return "text";
  } else {
    return "crosshair";
  }
};
