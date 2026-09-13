import { useState } from "react";
// react bata useState hook import gareko 

function MyComponent(){
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed , setIsemployed] = useState(false);
// yo chai array disstructuring vanxa , name chai state variable , setName chai state change garne function 


    const updateName = () => {
        setName("Jerry");
        
    }
    // yo chai function banako , button click huda jerry is set into name 

    const increamentAge = () =>
    {
        setAge (age + 1);
    }

    const toggleEmployedStatus = () =>
    {
        setIsemployed(!isEmployed);
    }


    return (
        <div>
            <p>Name: {name}</p>
            {/* {name} vayeko thau ma state value render hunxa */}
            <button onClick={updateName}>Set Name</button>


            <p>Age: {age}</p>
            <button onClick={increamentAge}>AGE Increamet</button>

             <p>Is Employed: {isEmployed ? "Yes" : " No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>
        </div>
    )
}
export default MyComponent
