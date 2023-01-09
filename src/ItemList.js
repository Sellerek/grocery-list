import React from 'react';
import LineItem from './LineItem';

const ItemList = ({ items, handleCheck, handleRemoveItem }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleRemoveItem={handleRemoveItem}
        />
      ))}
    </ul>
  );
};

export default ItemList;
