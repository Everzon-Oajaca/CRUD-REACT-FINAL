// src/components/CreateItem.js
import { useState } from 'react';

const CreateItem = ({ onCreate }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    onCreate({ name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter item name"
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateItem;
