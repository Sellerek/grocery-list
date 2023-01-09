import { useRef } from 'react';
import { FaPlus } from 'react-icons/fa';

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor='item'>Add item</label>
      <input
        autoFocus
        id='item'
        ref={inputRef}
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder='Add item'
        type='text'
      />
      <button
        type='submit'
        aria-label='Add item'
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
