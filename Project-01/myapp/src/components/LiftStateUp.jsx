import { useState } from "react";

export const LiftStateUp = () => {
    const [inputValue, setInputValue] = useState(""); // Fixed function naming
    
    return (
        <>
            {/* Passing inputValue and setInputValue as props */}
            <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
            <DisplayComponent inputValue={inputValue} />
        </>
    );
};

const InputComponent = ({ inputValue, setInputValue }) => {
    return (
        <>
            {/* Fixed typo in "target" and proper event handling */}
            <input
                type="text"
                placeholder="Enter the text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} 
            />
        </>
    );
};

const DisplayComponent = ({ inputValue }) => {
    return (
        <>
            {/* Properly display the input value */}
            <p>The current input value is: {inputValue}</p>
        </>
    );
};
