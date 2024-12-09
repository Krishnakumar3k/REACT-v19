import './CSS/Evh.css';
export const EventHandling = ()=>{
     const handleClick = ()=>{
       
            alert("Hi there this is onclick event");
     }

     // When define the function and passed something insides the paranthesis is called parameter.
     const handleWelcomeUser = (user)=>{
        console.log(`Hello, ${user} Welcome`)
     }

    return(
        <>
{/* Remember how we haven't called this function, if you call this function here  then
 it will run without even clicking. You just need to pass reference and not call here. */}
          <button onClick={handleClick}>Click Me</button>  
 {/* In React, event handlers receive the event object as an argument by default. However, when you use an arrow function directly
  in the onClick attribute without passing the event explicitly, React doesn't pass the event object to your handler function.
  This is because the arrow function creates a new function and calls your handler without passing any arguments. */}
          <button onClick={()=> handleClick()}>Click Me</button>  
    {/*      Inline Event Handlers */}
          <button onClick={(event)=>console.log(event)}>Inline Function </button> 
          
          {/* //? Function Components with Inline Arrow Functions */}
      <button onClick={() => alert("Hey I am inline evnt function")}> </button>
   {/* //? Function Components with Inline Arrow Functions */}
   <button onClick={() => alert("Hey I am inline evnt function")}> Inline Arrow fun</button>
      {/* {/* //? Passing Arguments to Event Handlers } */}
      {/* During function call we  pass something inside the paranthesis is called arguments. */}
      <button onClick={() => handleWelcomeUser("KKK")}>click Me</button>
     

        </>
    )
}