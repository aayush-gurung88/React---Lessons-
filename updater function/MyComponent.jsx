// React updater functions - a function passed as an argument to setState().

import { useState } from "react";

function MyComponent(){
    const[count , setCount] = useState(0);

    function increament (){
        // setCount(count + 1);
        setCount(c => c + 2);
    }

    function decreament (){
        setCount (c => c - 1);
        setCount (c => c - 1);
    }

    function reset ()
    {
        setCount(c => c = 0 );
        // same as setCount(0);
    }

    return(
        <div>
            <p>Count : {count}</p>
            <button onClick={increament}>Increment</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decreament}>Decrement</button>
        </div>
    )
}

export default MyComponent