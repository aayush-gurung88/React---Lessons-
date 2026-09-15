import { useState } from "react";

function MyComponent (){


    // state declaration , state vairable and setter function 
    // this is state 
    const[foods , setFoods] = useState(["Apple", "Oragne","Banana"]);


    function handleAddFood(){
            const newFood = document.getElementById("foodInput").value;
            document.getElementById("foodInput").value = "";
            // console.log(newFood);

            // setFoods([...foods, newFood]);

            // this thing is called updater fucntion that uses current state f to generate new state
            setFoods(f => [...f , newFood]);
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_ , i) => i !== index ));
        
    }   

    // function handleKeyPress(event){
    //     if (event.key === 'Enter') {
    //         handleAddFood();
    //     }
    // }

    return( 
        <div><p> <b>And this is how you update ARRAYS in state </b></p>
             <h3>List of Foods :</h3> 
             <ul>
                {foods.map((food,index) => 
                <li key={index} onClick={() => handleRemoveFood(index)}>
                    {food}
                    </li> )}
             </ul>
             <input type="text" id="foodInput"  placeholder="Enter Food Name" />
            <button onClick={handleAddFood}>ADD FOOOD</button>
            <hr />
            <hr />
            <hr />
        </div>
    )
}

export default MyComponent