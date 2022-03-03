import './navbar.css';
import Drawer from './Drawer';
import { useState } from 'react';

export default function Navbar({ noDrawer }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Drawer open={open} setOpen={setOpen}/>
      <nav class='navbar xs-s border--btm'>
        {!noDrawer && (
          <span class='nav__icons'>
            <i
              class='fas fa-bars md sb show--drawer'
              onClick={() => setOpen(true)}
            ></i>
          </span>
        )}
        <section class='start'>
          <a href='/'>
            <img class='box__image' src='lalogo.jpg' alt='logo' />
          </a>
          <span class='box-span'>
            <span class='title primary'>LEGION ATHLETICS</span>
          </span>
        </section>
        <section class='middle'>
          <div class='search--ctr'>
            <i class='fas fa-search search--btn'></i>
            <input
              type='text'
              placeholder='Search'
              class='input no--bdr'
              id='user-name'
              name='user-name'
            />
          </div>
        </section>
        <section class='end'>
          <div class='menu'>
            <span class='menu__btn lg sb primary'>
              <i class='far fa-user-circle'></i>
              <span class='menu__btn__name'>Account</span>
            </span>
            <div class='submenu shadow xs-s'>
              <section class='submenu__btn'>
                <button class='btn btn--float'>Sign In</button>
                <button class='btn'>Sign Up</button>
              </section>
              <section class='submenu__items flex-st-ct flex-vertical'>
                <span class='submenu__item sb'>My Account</span>
                <span class='submenu__item sb'>My Order</span>
                <span class='submenu__item sb'>
                  Cart
                  <i
                    icon-badge='3'
                    bdg-size='medium'
                    class='fas fa-shopping-cart lg fl-rt'
                  ></i>
                </span>
                <span class='submenu__item sb'>
                  Wishlist
                  <i
                    icon-badge='3'
                    bdg-size='medium'
                    class='far fa-heart lg fl-rt'
                  ></i>
                </span>
                <span class='submenu__item sb'>Manage Account</span>
              </section>
              <section class='submenu__btn flex-st-ct'>
                <button class='btn btn--float btn--wide'>Log Out</button>
              </section>
            </div>
          </div>
        </section>
      </nav>
    </div>
  );
}
