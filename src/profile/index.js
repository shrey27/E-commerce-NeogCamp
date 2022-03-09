import { Fragment, useState } from 'react';
import './profile.css';
import Navbar from '../common/navbar';
import Category from '../common/header/Category';
import Footer from '../common/footer';
import ProfileFormCtr from './profileCtr';
import Address from '../address';
import Payment from '../payment';
import ChangePassword from '../authentication/ChangePassword';

export default function Profile() {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [component, setComponent] = useState(<ProfileFormCtr />);

  const handleMainContent = (component) => {
    switch (component) {
      case 'ADDRESS':
        setComponent(<Address />);
        break;
      case 'PAYMENT':
        setComponent(<Payment />);
        break;
      case 'PASSWORDS':
        setComponent(<ChangePassword />);
        break;
      default:
        setComponent(<ProfileFormCtr />);
        break;
    }
    setOptionsOpen(false);
  };

  return (
    <Fragment>
      <Navbar />
      <Category />
      <div className='hb--box'>
        {/* header */}
        <header className='hb--header'>
          <nav className='navbar'>
            <section className='end xs-s'>
              <span
                className='slider btn hb--btn'
                onClick={() => setOptionsOpen((e) => !e)}
              >
                Account&nbsp;<i className='fas fa-chevron-down'></i>
              </span>
            </section>
          </nav>
        </header>

        {/* aside container */}
        <aside
          className={`hb--aside sm-s shadow ${optionsOpen ? 'hb--open' : ''}`}
        >
          <div className='mg-full'>
            <h1 className='primary sm reg aside__title'>MY ACCOUNT</h1>
            <ul className='stack'>
              <li
                className='stack__item primary sm'
                onClick={handleMainContent.bind(this, 'PROFILE')}
              >
                Profile Settings <i className='fa-solid fa-chevron-right'></i>
              </li>
              <li
                className='stack__item primary sm'
                onClick={handleMainContent.bind(this, 'ADDRESS')}
              >
                Manage Address <i className='fa-solid fa-chevron-right'></i>
              </li>
              <li
                className='stack__item primary sm'
                onClick={handleMainContent.bind(this, 'PAYMENT')}
              >
                Manage Payment Info{' '}
                <i className='fa-solid fa-chevron-right'></i>
              </li>
              <li
                className='stack__item primary sm'
                onClick={handleMainContent.bind(this, 'PASSWORDS')}
              >
                Update Password <i className='fa-solid fa-chevron-right'></i>
              </li>
            </ul>
          </div>
          <div className='mg-full'>
            <h1 className='primary sm reg aside__title'>MY STUFF</h1>
            <ul className='stack'>
              <li className='stack__item primary sm'>
                My Cart <i className='fa-solid fa-chevron-right'></i>
              </li>
              <li className='stack__item primary sm'>
                My Orders <i className='fa-solid fa-chevron-right'></i>
              </li>
              <li className='stack__item primary sm'>
                My Wishlist <i className='fa-solid fa-chevron-right'></i>
              </li>
            </ul>
          </div>
          <button className='btn btn--auth btn--wide'>Logout</button>
        </aside>

        {/* main container */}
        <main className='hb--main hb--open'>{component}</main>
      </div>

      {/* Footer */}
      <Footer />
    </Fragment>
  );
}
