import { useState } from "react"
import './CSS/Evh.css';
export const Derived = () => {
     const [users, setUser] = useState([
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 },
        { name: "Angles", age: 45 },
      ]);

  // Derived state: count of users
  console.log(users)
  const userCount = users.length;
  // Derived state: average age of users
  const averageAge = users.reduce((sum, user) => sum + user.age, 0)/userCount;
    return(
        <>
              <section className="main-div">
                <ul>
                    {users.map((currElem, index)=>{
                       return(
                        <li key={index}>
                        {currElem.name}-{currElem.age}
                    </li>
                       );
                    })}
                </ul>
                <p> User Count: {userCount}</p>
                <p>User Avg age: {averageAge}</p>
            </section>
        </>
    )
}