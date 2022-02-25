import React from 'react';

const SearchBar = (props) => {
  const [inputValue, setInputValue] = React.useState('');
  const [checked, setChecked] = React.useState(false)

  React.useEffect(() => {
    let searchResults = props.products.filter((searchItem) => {
      return searchItem.name.toLowerCase().includes(inputValue.toLowerCase()) && (!checked || searchItem.inStock);
    });
    props.setSearchProduct(searchResults);
  }, [inputValue, checked]);

  return (
    <div>
      <label>Search</label>
      <br />
      <input
        value={inputValue}
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <input type="checkbox" onChange={() => {setChecked(!checked)}} />
    </div>
  );
};

export default SearchBar;
