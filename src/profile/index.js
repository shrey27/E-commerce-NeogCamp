import { Fragment, useState } from 'react';
import './profile.css';
import Navbar from '../common/navbar';
import Category from '../common/header/Category';
import Footer from '../common/footer';
import ProfileForm from './ProfileForm';
import Address from '../address';
import Payment from '../payment';
import ChangePassword from '../authentication/ChangePassword';
import { AddressProvider } from '../address/addressContext';

export default function Profile() {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [component, setComponent] = useState(<ProfileForm />);

  const handleMainContent = (component) => {
    switch (component) {
      case 'ADDRESS':
        setComponent(
          <AddressProvider>
            <Address />
          </AddressProvider>
        );
        break;
      case 'PAYMENT':
        setComponent(<Payment />);
        break;
      case 'PASSWORDS':
        setComponent(<ChangePassword />);
        break;
      default:
        setComponent(<ProfileForm />);
        break;
    }
  };

  return (
    <Fragment>
      {/* Navbar */}
      <Navbar />
      {/* Category header bar */}
      <Category />
      {/* Hamburger menu container */}
      <div class='hb--box'>
        {/* header */}
        <header class='hb--header'>
          <nav class='navbar'>
            <section class='end xs-s'>
              <span
                class='slider btn hb--btn'
                onClick={() => setOptionsOpen((e) => !e)}
              >
                Account&nbsp;<i class='fas fa-chevron-down'></i>
              </span>
            </section>
          </nav>
        </header>

        {/* aside container */}
        <aside class={`hb--aside sm-s shadow ${optionsOpen ? 'hb--open' : ''}`}>
          <div class='mg-full'>
            <h1 class='primary sm reg aside__title'>MY ACCOUNT</h1>
            <ul class='stack'>
              <li
                class='stack__item primary sm'
                onClick={handleMainContent.bind(this, 'PROFILE')}
              >
                Profile Settings <i class='fa-solid fa-chevron-right'></i>
              </li>
              <li
                class='stack__item primary sm'
                onClick={handleMainContent.bind(this, 'ADDRESS')}
              >
                Manage Address <i class='fa-solid fa-chevron-right'></i>
              </li>
              <li
                class='stack__item primary sm'
                onClick={handleMainContent.bind(this, 'PAYMENT')}
              >
                Manage Payment Info <i class='fa-solid fa-chevron-right'></i>
              </li>
              <li
                class='stack__item primary sm'
                onClick={handleMainContent.bind(this, 'PASSWORDS')}
              >
                Update Password <i class='fa-solid fa-chevron-right'></i>
              </li>
            </ul>
          </div>
          <div class='mg-full'>
            <h1 class='primary sm reg aside__title'>MY STUFF</h1>
            <ul class='stack'>
              <li class='stack__item primary sm'>
                My Cart <i class='fa-solid fa-chevron-right'></i>
              </li>
              <li class='stack__item primary sm'>
                My Orders <i class='fa-solid fa-chevron-right'></i>
              </li>
              <li class='stack__item primary sm'>
                My Wishlist <i class='fa-solid fa-chevron-right'></i>
              </li>
            </ul>
          </div>
          <button class='btn btn--auth btn--wide'>Logout</button>
        </aside>

        {/* main container */}
        <main class='hb--main hb--open'>{component}</main>
      </div>

      {/* Footer */}
      <Footer />
    </Fragment>
  );
}
