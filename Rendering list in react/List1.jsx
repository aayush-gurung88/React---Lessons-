function List1(){


    // const fruits = ["apple","orange"," Banana", "coconut", "pineapple"];
    

    const fruits = [{ id: 1 , name: "apple", calories: 95},
                    {id: 2, name: "orange", calories: 45},
                    {id: 3, name: "banana", calories: 105},
                    {id: 4, name: "coconut", calories: 159},
                    {id: 5, name: "pineapple", calories: 37}];

    
     fruits.sort((a,b) => a.name.localeCompare(b.name));// APLAPBETICAL 
     // fruits.sort((a,b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL 
    
     //fruits.sort((a,b) => a.calories - b.calories) // Numeric based on calories 

    // fruits.sort((a,b) => b.calories - a.calories) // REVERSE NUMERIC 

    // const lowCalFruits = fruits.filter(fruits => fruits.calories < 100)
    const highCalFruits = fruits.filter(fruits => fruits.calories >= 100)

    // const listItems = lowCalFruits.map(lowCalFruits=> <li></li>)

    const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>
                                                    {highCalFruit.name}: &nbsp;
                                                    <b>{highCalFruit.calories}</b></li>);



        // we took each elements form the array named fruits and placed it to the newwly list array 
        // then returnted that 

    return (<ol>{listItems}</ol>);

    
}

export default List1