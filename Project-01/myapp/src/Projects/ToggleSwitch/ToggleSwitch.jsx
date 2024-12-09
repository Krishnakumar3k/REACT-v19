import "./ToggleSwitch.css";
import { useState } from "react";

export const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggleSwitch = () => {
        setIsOn(!isOn);
    };

    const checkIsOn = isOn ? "on" : "off";
    const toggleBgColor = {backgroundColor:isOn ? "#4caf50" : "#f44336"}

    return (
        <div className="toggle-switch" style={toggleBgColor}
         onClick={handleToggleSwitch}>
            <div className={`switch ${checkIsOn}`}>
            <span className="switch-state">{isOn ? "ON" : "OFF"}</span>
            </div>
        </div>
    );
};
