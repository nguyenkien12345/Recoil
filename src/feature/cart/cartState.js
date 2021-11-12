// Chỉ xử lý các state liên quan đến giỏ hàng
import {atom, selector } from 'recoil';
export const cartState = atom({
    key: 'cart',
    default: [],
})

export const addToCart = (cart, product) => {
    const newCart = [...cart]; 
    const foundIndex = cart.findIndex(x => x.id === product.id);
  
    // Increase quantity if existing
    if (foundIndex >= 0) {
      // Cập nhật cái thằng ở vị trí chúng ta tìm thấy bằng cách lấy lại những thuộc tính của nó hiện tại chỉ đổi cái quantity bằng cái quantity hiện tại + 1 
      newCart[foundIndex] = {
        ...cart[foundIndex],
        quantity: cart[foundIndex].quantity + 1,
      };
      return newCart;
    }
  
    // Add new item
    newCart.push({
      product,
      id: product.id,
      quantity: 1,
    });
    return newCart;
  }

  export const cartTotal = selector({
    key: 'cartTotal',
    get: ({ get }) => {
      const cart = get(cartState);
  
      return cart.reduce((total, item) => {
        return total + (item.product.price * item.quantity);
      }, 0);
        // 0 là giá trị khởi tạo ban đầu   
    }
  })
  