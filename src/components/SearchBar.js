import React from 'react';

const SearchBar = (props) => {
  const [inputValue, setInputValue] = React.useState('');

  let filteredProducts = (typedProduct) => {
    setInputValue(typedProduct);
    let searchResults = props.products.filter((searchItem) => {
      return searchItem.name.toLowerCase().includes(typedProduct.toLowerCase());
    });
    props.setSearchProduct(searchResults);
  };

  return (
    <div>
      <label>Search</label>
      <br />
      <input
        value={inputValue}
        type="text"
        onChange={(e) => {
          filteredProducts(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
