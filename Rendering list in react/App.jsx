import List from "./List";

function App() {
  const fruits = [ { id: 1 , name: "apple", calories: 95},
                    {id: 2, name: "orange", calories: 45},
                    {id: 3, name: "banana", calories: 105},
                    {id: 4, name: "coconut", calories: 159},
                    {id: 5, name: "pineapple", calories: 37}];

  const vegetables = [
    { id: 6, name: "potato", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "cauli", calories: 105 },
    { id: 9, name: "banda", calories: 159 },
    { id: 10, name: "kerau", calories: 37 },
  ];

//   return (
//     <>
//     <List items={fruits} category="fruits" />
//     <List items={vegetables} category="vegetables" />
//     </>
//   );

 return (
    <>
        {fruits.length > 0 ? <List items={fruits} category="fruits" />:null }

    </>

 );
}

export default App;
