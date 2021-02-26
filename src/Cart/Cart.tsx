import CartItem from '../CartItem/CartItem';
// Styles
import { Wrapper } from './Cart.styles';
// Types
import { CartItemType } from '../App';

type CartProps = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<CartProps> = ({
  cartItems,
  addToCart,
  removeFromCart,
}) => {
  const calcTotalAmount = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No Items in cart</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      {cartItems.length !== 0 ? (
        <h2>Total: ${calcTotalAmount(cartItems).toFixed(2)}</h2>
      ) : null}
    </Wrapper>
  );
};

export default Cart;
