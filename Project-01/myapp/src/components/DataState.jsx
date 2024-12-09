import { useState } from "react"
import './CSS/Evh.css';
export const DataState = () => {
    const [user, setUser] = useState(
        [{ name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 },
        { name: "Angles", age: 45 },
        ]);
    return (
        <>
            <section className="main-div">
                <ul>
                    {user.map((currElem, index)=>{
                       return(
                        <li key={index}>
                        {currElem.name}-{currElem.age}
                    </li>
                       );
                    })}
                </ul>
            </section>
        </>)
}