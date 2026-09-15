function ConditionalRendering (category , items){

    const vegetable = [];

    return (<>
        <h3>Category</h3>

        {category === "Vegetables" && (
        <ol>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ol>
      )}
    </>);
}