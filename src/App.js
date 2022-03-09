import HomePage from './homepage';
import Products from './products';
import Product from './product';
import Signin from './authentication/Signin';
import Signup from './authentication/Signup';
import Address from './address';
import Cart from './cart';
import AddressSelection from './address/AddressSelection';
import Checkout from './checkout';
import Wishlist from './wishlist';
import Payment from './payment';
import PaymentSelection from './payment/PaymentSelection';
import OrderSummary from './summary';
import Profile from './profile';
import { CartProvider } from './context/cartContext';
import { FormOpenProvider } from './context/formOpenContext';
import { AddressApiProvider } from './context/addressContext';
import { ProductsContextProvider } from './context/productsContext';
import { PaymentApiProvider } from './context/paymentContext';

function App() {
  return (
    <CartProvider>
      <FormOpenProvider>
        <AddressApiProvider>
          <PaymentApiProvider>
            <ProductsContextProvider>
              <div className='dark'>
                {/* <HomePage /> */}
                {/* <Products /> */}
                {/* <Product /> */}
                {/* <Signin /> */}
                {/* <Signup /> */}
                {/* <Cart /> */}
                {/* <AddressSelection /> */}
                {/* <Wishlist/> */}
                {/* <OrderSummary /> */}
                <Profile />
                {/* <PaymentSelection /> */}
                {/* <Checkout /> */}
              </div>
            </ProductsContextProvider>
          </PaymentApiProvider>
        </AddressApiProvider>
      </FormOpenProvider>
    </CartProvider>
  );
}

export default App;
