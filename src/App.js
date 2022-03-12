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
import OrderSummarySelection from './summary';
import Profile from './profile';

import { CartAPIProvider } from './context/cartContext';
import { FormOpenProvider } from './context/formOpenContext';
import { AddressApiProvider } from './context/addressContext';
import { ProductsContextProvider } from './context/productsContext';
import { PaymentApiProvider } from './context/paymentContext';
import { WishlistProvider } from './context/wishlistContext';

function App() {
  return (
    <CartAPIProvider>
      <FormOpenProvider>
        <AddressApiProvider>
          <PaymentApiProvider>
            <WishlistProvider>
              <ProductsContextProvider>
                <div className=''>
                  {/* <HomePage /> */}
                  <Products />
                  {/* <Signin /> */}
                  {/* <Signup /> */}
                  {/* <Product /> */}
                  {/* <Cart /> */}
                  {/* <Wishlist /> */}
                  {/* <AddressSelection /> */}
                  {/* <PaymentSelection /> */}
                  {/* <Checkout /> */}
                  {/* <OrderSummarySelection /> */}
                  {/* <Profile /> */}
                </div>
              </ProductsContextProvider>
            </WishlistProvider>
          </PaymentApiProvider>
        </AddressApiProvider>
      </FormOpenProvider>
    </CartAPIProvider>
  );
}

export default App;
