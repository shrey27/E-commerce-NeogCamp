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
      <div class='hb--box'>
        {/* Header */}
        <header class='hb--header'>
          <nav class='navbar'>
            <section class='end xs-s'>
              <span
                class='slider btn hb--btn'
                onClick={() => setFilterOpen((e) => !e)}
              >
                Filter <i class='fas fa-chevron-down'></i>
              </span>
            </section>
          </nav>
        </header>

        {/* Filters */}
        <aside class={`hb--aside sm-s ${filterOpen ? 'hb--open' : ''}`}>
          <span class='primary sm sb'>FILTERS</span>
          <span class='primary sm reg fl-rt clear__btn'>Clear All</span>

          <h1 class='primary sm sb mg-full'>Price</h1>

          <span class='primary sm sb'>₹ 2000</span>
          <span class='primary sm sb fl-rt'>₹ 25000</span>
          <input
            class='filter__slider mg-full'
            type='range'
            id='price'
            name='price'
            step='500'
            min='2000'
            max='25000'
          />
          <div class='filter__category mg-full'>
            <h1 class='primary sm sb'>Category</h1>
            <label for='mens'>
              <input
                class='filter__ip'
                type='checkbox'
                name='mens'
                id='mens'
                value='mens'
              />{' '}
              Men's
            </label>
            <label for='womens'>
              <input
                class='filter__ip'
                type='checkbox'
                name='womens'
                id='womens'
                value='womens'
              />{' '}
              Women's
            </label>
            <label for='kids'>
              <input
                class='filter__ip'
                type='checkbox'
                name='kids'
                id='kids'
                value='kids'
              />{' '}
              Kids
            </label>
          </div>

          <div class='filter__rating mg-full'>
            <h1 class='primary sm sb'>Rating</h1>
            <label for='4star--above'>
              <input
                class='filter__ip'
                type='radio'
                name='rating'
                id='4star--above'
                value='4star--above'
              />{' '}
              4 Star & above
            </label>
            <label for='3star--above'>
              <input
                class='filter__ip'
                type='radio'
                name='rating'
                id='3star--above'
                value='3star--above'
              />{' '}
              3 Star & above
            </label>
            <label for='2star--above'>
              <input
                class='filter__ip'
                type='radio'
                name='rating'
                id='2star--above'
                value='2star--above'
              />{' '}
              2 Star & above
            </label>
            <label for='1star--above'>
              <input
                class='filter__ip'
                type='radio'
                name='rating'
                id='1star--above'
                value='1star--above'
              />{' '}
              1 Star & above
            </label>
          </div>

          <div class='filter__sorting mg-full'>
            <h1 class='primary sm sb'>Sort By</h1>
            <label>
              <input
                class='filter__ip'
                type='radio'
                name='sorting'
                id='hightolow'
                value='hightolow'
              />{' '}
              High to Low
            </label>
            <label>
              <input
                class='filter__ip'
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
        <main class='hb--main sm-s'>
          <Deals items={items} name='Products' wishlist={true}/>
        </main>
      </div>
      <Footer />
    </div>
  );
}
