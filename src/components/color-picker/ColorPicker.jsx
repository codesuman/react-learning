import { useState } from "react";

import './ColorPicker.css';

const ColorPicker = () => {
    const [color, setColor] = useState('#FFFFFF');

    return(
        <div className="color-picker-container">
            <h2>Color Picker</h2>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>

            <label>Select a Color : </label>
            <input type="color" value={color} onChange={(event) => setColor(event.target.value)}/>
        </div>
    );
}

export default ColorPicker;