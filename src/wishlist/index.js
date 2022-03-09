import { Fragment } from 'react';
import './wishlist.css';
import Navbar from '../common/navbar';
import Category from '../common/header/Category';
import Footer from '../common/footer';
import Deals from '../common/deals';
import { useWishlistCtx } from '../context/wishlistContext';
import Loader from '../common/Loader';

export default function Wishlist() {
  const { wishlistLoading, wishlistData } = useWishlistCtx();

  return (
    <Fragment>
      <Navbar />
      <Category />
      {wishlistLoading ? (
        <Loader />
      ) : (
        <Fragment>
          {wishlistData.length > 0 ? (
            <Deals items={wishlistData} close={true} name='Wishlist Items' wishlist={true} />
          ) : (
            <img
              src='empty.webp'
              alt='empty'
              className='image__empty img--md'
            />
          )}
        </Fragment>
      )}
      <Footer fixed={wishlistData.length === 0} />
    </Fragment>
  );
}
