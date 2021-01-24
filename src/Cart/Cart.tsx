import CartItem from '../CartItem/CartItem';
import { Wrapper } from './Cart.styles';
import { CartItemType } from '../App';
import React from 'react';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((acc: number, item: CartItemType) => acc + item.amount * item.price, 0);

return (
  <Wrapper>
    <h2>Your shopping cart</h2>
    {cartItems.length === 0 ? <p>No items in cart</p> : null}
    {cartItems.map((item: CartItemType) => (
      <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart}/>
    ))}
    <h2>Total: £{calculateTotal(cartItems).toFixed(2)}</h2>
  </Wrapper>
)
}

export default Cart;
