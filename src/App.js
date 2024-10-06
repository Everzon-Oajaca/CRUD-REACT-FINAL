// src/App.js
import { useState } from 'react';
import CreateItem from './components/CreateItem';
import ItemList from './components/ItemList';
import UpdateItem from './components/UpdateItem';

function App() {
  const [items, setItems] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const handleCreate = (newItem) => {
    setItems([...items, { id: Date.now(), ...newItem }]);
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleUpdateClick = (item) => {
    setIsUpdating(true);
    setCurrentItem(item);
  };

  const handleUpdate = (updatedItem) => {
    setItems(items.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
    setIsUpdating(false);
    setCurrentItem(null);
  };

  return (
    <div>
      <h1>CRUD App</h1>
      {isUpdating ? (
        <UpdateItem item={currentItem} onUpdate={handleUpdate} />
      ) : (
        <CreateItem onCreate={handleCreate} />
      )}
      <ItemList items={items} onDelete={handleDelete} onUpdate={handleUpdateClick} />
    </div>
  );
}

export default App;
