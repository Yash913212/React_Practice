import React, { useState } from "react";
import './colorpicker.css'

function ColorPicker() {
    const [color, setColor] = useState("");

    function handle(event) {
        setColor(event.target.value);
    }

    return (
        <div className="color">
            <h1>Color Picker</h1>
            <div className="display" style={{ backgroundColor: color }}>
                <p>Selected Color : {color}</p>
            </div>
            <label>Select a color : </label>
            <input type="color" value={color} onChange={handle} />
        </div>
    );
}

export default ColorPicker;