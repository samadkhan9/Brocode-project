import React, { useState } from "react";

function Colorpicker() {
  const [color, setColor] = useState("#FFFFFF");
  function handleColorChange(event) {
    setColor(event.target.value);
  }
  return (
    <div className="colorpicker-container">
      <h1>Colorpicker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p> Selected Color :{color} </p>
      </div>
      <div className="color-input">
        <label> Select a color: </label>
        <input type="color" value={color} onChange={handleColorChange} />
      </div>
    </div>
  );
}
export default Colorpicker;
