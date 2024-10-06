// src/components/UpdateItem.js
import { useState } from 'react';

const UpdateItem = ({ item, onUpdate }) => {
  const [name, setName] = useState(item.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    onUpdate({ ...item, name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateItem;
