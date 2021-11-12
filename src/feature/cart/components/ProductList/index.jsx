import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { productListState } from '../../productState';
import { addToCart, cartState } from '../../cartState';

ProductList.propTypes = {};

function ProductList() {
  const [cart, setCart] = useRecoilState(cartState);

  const productList = useRecoilValue(productListState);

  const handleAddToCart = (product) => {
    const newCart = addToCart(cart, product); // Truyền vào giỏ hàng hiện tại và sản phẩm ta muốn add
    setCart(newCart);
  }

  return (
    <div>
      <h2>Product List</h2>
      <ul className="product-list">
        {productList.map(product => (
          <li key={product.id}>
            {product.title} - {product.price}
            <button
            style = {{marginLeft: '1rem'}}
            onClick= {() => handleAddToCart(product)}
            >
              ADD TO CART
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;

// Lý thuyết
// Nếu chúng ta chỉ muốn lấy giá trị mà không muốn cập nhật thay đổi state thì dùng useRecoilValue 
// còn nếu muốn cập nhật thay đổi state thì dùng useRecoilState
