import { useState } from 'react';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import SearchItems from './SearchItems';

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('shoppinglist'))
  );

  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  const today = new Date();

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };

  const handleRemoveItem = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  };

  return (
    <div className='App'>
      <Header title='Grocery list' />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItems search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleRemoveItem={handleRemoveItem}
      />
      <Footer
        length={items.length}
        title={`Copyright \u00a9  ${today.getFullYear()}`}
      />
    </div>
  );
}

export default App;
