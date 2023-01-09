import ItemList from './ItemList';

const Content = ({ items, handleCheck, handleRemoveItem }) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleRemoveItem={handleRemoveItem}
        />
      ) : (
        <p style={{ marginTop: '2rem' }}>No items in grocery list</p>
      )}
    </main>
  );
};

export default Content;
