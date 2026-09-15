function List ()
{
    // const category = props.category;
    // const itemList = props.items;

    vegetables.sort((a,b)=> a.name.localeCompare(b.name));

    const listItems = vegetables.map(vegetable => <li key={vegetable.id}>
                                                    {vegetable.name}: &nbsp;
                                                    <b>{vegetable.calories}</b></li>);


    // const listItems = itemList.map(item => <li key={item.id}>
    //                                                 {item.name}: &nbsp;
    //                                                 <b>{item.calories}</b></li>);

return (<>

    {/* <h3>{category}</h3> */}
    <ol>{listItems}</ol>
    
    </>)
}

export default List