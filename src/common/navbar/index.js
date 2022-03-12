import './navbar.css';
import Drawer from './Drawer';
import { useState } from 'react';
import { useCartCtx } from '../../context/cartContext';
import { useWishlistCtx } from '../../context/wishlistContext';
import { useProductsCtx } from '../../context/productsContext';

export default function Navbar({ noDrawer, showSearchBar }) {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const { totalItems } = useCartCtx();
  const { wishlistData } = useWishlistCtx();
  const { dispatch } = useProductsCtx();

  const handleSearch = (e) => {
    e.preventDefault();
    const { value } = e.target;
    //route to products page
    setSearch(value);
    dispatch({
      type: 'NAVBAR_ITEM_SEARCH',
      payload: value.toLowerCase()
    });
  };

  const handleSearchClear = () => {
    dispatch({ type: 'NAVBAR_SEARCH_CLEAR' });
    setSearch('');
  };
  return (
    <div>
      <Drawer open={open} setOpen={setOpen} />
      <nav className='navbar xs-s border--btm'>
        {!noDrawer && (
          <span className='nav__icons'>
            <i
              className='fas fa-bars md sb show--drawer'
              onClick={() => setOpen(true)}
            ></i>
          </span>
        )}
        <section className='start'>
          <a href='/'>
            <img className='box__image' src='lalogo.jpg' alt='logo' />
          </a>
          <span className='box-span'>
            <span className='title primary'>LEGION ATHLETICS</span>
          </span>
        </section>
        {showSearchBar && <section className='middle'>
          <div className='search--ctr'>
            {!search && <i className='fas fa-search search--btn'></i>}
            <input
              type='text'
              placeholder='Search'
              className='input no--bdr'
              id='user-name'
              name='user-name'
              autoComplete='off'
              value={search}
              onChange={handleSearch}
            />
            {search && (
              <i
                class='fa-solid fa-xmark search--btn'
                onClick={handleSearchClear}
              ></i>
            )}
          </div>
        </section>}
        <section className='end'>
          <div className='menu'>
            <span className='menu__btn lg sb primary'>
              <i className='far fa-user-circle'></i>
              <span className='menu__btn__name'>Account</span>
            </span>
            <div className='submenu shadow xs-s'>
              <section className='submenu__btn'>
                <button className='btn btn--float'>Sign In</button>
                <button className='btn'>Sign Up</button>
              </section>
              <section className='submenu__items flex-st-ct flex-vertical'>
                <span className='submenu__item sb'>My Account</span>
                <span className='submenu__item sb'>My Order</span>
                <span className='submenu__item sb'>
                  Cart
                  <i
                    icon-badge={totalItems}
                    bdg-size='medium'
                    className='fas fa-shopping-cart lg fl-rt'
                  ></i>
                </span>
                <span className='submenu__item sb'>
                  Wishlist
                  <i
                    icon-badge={wishlistData.length}
                    bdg-size='medium'
                    className='far fa-heart lg fl-rt'
                  ></i>
                </span>
              </section>
              <section className='submenu__btn flex-st-ct'>
                <button className='btn btn--float btn--wide'>Log Out</button>
              </section>
            </div>
          </div>
        </section>
      </nav>
    </div>
  );
}
