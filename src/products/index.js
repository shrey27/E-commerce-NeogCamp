import React, { useState } from 'react';
import './products.css';
import Navbar from '../common/navbar';
import Category from '../common/header/Category';
import Deals from '../common/deals';
import Footer from '../common/footer';
import { items } from '../common/constants';

export default function Products() {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className='container'>
      <Navbar />
      <Category />
      <div className='hb--box'>
        {/* Header */}
        <header className='hb--header'>
          <nav className='navbar'>
            <section className='end xs-s'>
              <span
                className='slider btn hb--btn'
                onClick={() => setFilterOpen((e) => !e)}
              >
                Filter <i className='fas fa-chevron-down'></i>
              </span>
            </section>
          </nav>
        </header>

        {/* Filters */}
        <aside className={`hb--aside sm-s ${filterOpen ? 'hb--open' : ''}`}>
          <span className='primary sm sb'>FILTERS</span>
          <span className='primary sm reg fl-rt clear__btn'>Clear All</span>

          <h1 className='primary sm sb mg-full'>Price</h1>

          <span className='primary sm sb'>₹ 2000</span>
          <span className='primary sm sb fl-rt'>₹ 25000</span>
          <input
            className='filter__slider mg-full'
            type='range'
            id='price'
            name='price'
            step='500'
            min='2000'
            max='25000'
          />
          <div className='filter__category mg-full'>
            <h1 className='primary sm sb'>Category</h1>
            <label for='mens'>
              <input
                className='filter__ip'
                type='checkbox'
                name='mens'
                id='mens'
                value='mens'
              />{' '}
              Men's
            </label>
            <label for='womens'>
              <input
                className='filter__ip'
                type='checkbox'
                name='womens'
                id='womens'
                value='womens'
              />{' '}
              Women's
            </label>
            <label for='kids'>
              <input
                className='filter__ip'
                type='checkbox'
                name='kids'
                id='kids'
                value='kids'
              />{' '}
              Kids
            </label>
          </div>

          <div className='filter__rating mg-full'>
            <h1 className='primary sm sb'>Rating</h1>
            <label for='4star--above'>
              <input
                className='filter__ip'
                type='radio'
                name='rating'
                id='4star--above'
                value='4star--above'
              />{' '}
              4 Star & above
            </label>
            <label for='3star--above'>
              <input
                className='filter__ip'
                type='radio'
                name='rating'
                id='3star--above'
                value='3star--above'
              />{' '}
              3 Star & above
            </label>
            <label for='2star--above'>
              <input
                className='filter__ip'
                type='radio'
                name='rating'
                id='2star--above'
                value='2star--above'
              />{' '}
              2 Star & above
            </label>
            <label for='1star--above'>
              <input
                className='filter__ip'
                type='radio'
                name='rating'
                id='1star--above'
                value='1star--above'
              />{' '}
              1 Star & above
            </label>
          </div>

          <div className='filter__sorting mg-full'>
            <h1 className='primary sm sb'>Sort By</h1>
            <label>
              <input
                className='filter__ip'
                type='radio'
                name='sorting'
                id='hightolow'
                value='hightolow'
              />{' '}
              High to Low
            </label>
            <label>
              <input
                className='filter__ip'
                type='radio'
                name='sorting'
                id='lowtohigh'
                value='lowtohigh'
              />{' '}
              Low to High
            </label>
          </div>
        </aside>

        {/* Products Listing */}
        <main className='hb--main sm-s'>
          <Deals items={items} name='Products' wishlist={true} />
        </main>
      </div>
      <Footer />
    </div>
  );
}
