import PropTypes from "prop-types";

function List(props) {
  const category = props.category;

  const itemList = props.items;

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;
      {item.calories}
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}

List.defaultProps = {
    category : "Category",
    items : [],
}

List.propTypes = {
  category : PropTypes.string,
  items: Proptypes.arrayOf(PropTypes.shape(
    {
      id: Proptypes.number,
      name: Proptypes.string,
      calories: Proptypes.number,
    }
  ))
}

export default List;
