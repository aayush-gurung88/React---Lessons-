import React, {useState,useEffect,useRef} from "react"

function MyComponent(){
    // let [number,setNumber] = useState(0);
    const ref = useRef("Pizza");

    console.log(ref)

    useEffect(() => {
        console.log("Component Rendered")
    })

    function handleClick(){
        // setNumber(n => n + 1)
        ref.current++;
        // console.log(ref.current) ;
    }

    return(
        <button onClick={handleClick}>
            Click Me !
        </button>
    )
}

export default MyComponent