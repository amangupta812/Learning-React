import Item from "./Item";

const FoodItems = ( {items}) => {
  
  return (
    <ul className="list-group">
      {items.length ===0 && <h3>i am still hungry.</h3>}
      {items.map((item) => (
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
