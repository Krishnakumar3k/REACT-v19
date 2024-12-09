import './CSS/Evh.css';
export const EventProps = ()=>{
    const  HandleWelcomeUser = (user)=>{
        alert(`Hi, ${user}`);
    }

    const handleHover = ()=>{;
        alert(`you are hovering me`)
    }

    return(
        <>
        <WelcomeUser 
        onClick={()=>HandleWelcomeUser("Krishna")}
        onMouseEnter={handleHover}/>
        </>
    )
};


const WelcomeUser = (props)=>{
    const { onClick, onMouseEnter } = props;
    const handleGreeting = ()=>{
        console.log(`Hi there Welcome`)
        props.onClick();
    }
    return(
        <>
            <button onClick={onClick}>Click me</button>
            <button onMouseEnter={onMouseEnter}>Hover me</button>
            <button onClick={handleGreeting}>Greeting</button>
        </>
    )
}
