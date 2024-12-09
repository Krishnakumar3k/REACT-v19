import { useState } from 'react';
import './CSS/Evh.css';
export const State = () => {
/*     let value = 0;
    const handleButtonClick = ()=>{
        value ++;
        console.log(value);
    } */
 const[count, setCount] = useState(0);
 const handleButtonClick = ()=>{
    setCount(()=>count+1);
 };

    return(
    <>
        <section className="main-div">
            <h1>{count}</h1>
            <button onClick={handleButtonClick}>Click to Increment</button>
        </section>
    </>)
}