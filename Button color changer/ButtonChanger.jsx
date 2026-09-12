import { useState } from "react";

function ButtonChanger(){


    const[bgColor , setBgColor] = useState("white");

    function changeColor(newColor){
        setBgColor(newColor);
    }

    return(
        <div className="color-box" style = {{backgroundColor : bgColor}}>

        <h1> Selected Color : {bgColor}</h1>
            
            <button className="bt-one" onClick={()=> changeColor("red")}>Red</button>
            <button className="bt-two" onClick={()=> changeColor("green")}>Green</button>
            <button className="bt-three" onClick={()=> changeColor("blue")}>Blue</button>
        </div>
    )
}

export default ButtonChanger