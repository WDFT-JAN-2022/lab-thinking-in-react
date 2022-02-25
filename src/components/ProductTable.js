import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
  return (
    <div>
      <table style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <ProductRow
          products={props.products}
          setProducts={props.setProducts}
          searchProducts={props.searchProducts}
          setSearchProduct={props.setSearchProduct}
        />
      </table>
    </div>
  );
};

export default ProductTable;
