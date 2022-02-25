import React from 'react';

const ProductRow = (props) => {
  const productList = props.searchProducts.map((items) => {
    return (
      <tbody>
        <tr>
          <td>{items.name}</td>
          <td>{items.price}</td>
        </tr>
      </tbody>
    );
  });

  return productList;
};

export default ProductRow;
