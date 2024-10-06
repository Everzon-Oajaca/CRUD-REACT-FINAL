// src/components/ItemList.js
const ItemList = ({ items, onDelete, onUpdate }) => {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => onDelete(item.id)}>Delete</button>
            <button onClick={() => onUpdate(item)}>Update</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default ItemList;
  