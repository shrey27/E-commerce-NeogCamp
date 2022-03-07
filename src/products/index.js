import React, { useState } from 'react';
import './products.css';
import Navbar from '../common/navbar';
import Category from '../common/header/Category';
import Deals from '../common/deals';
import Footer from '../common/footer';
import { useProductsCtx } from '../context/productsContext';

export default function Products() {
  const [filterOpen, setFilterOpen] = useState(false);
  const { productListing, priceLimit, dispatch, selectedInputs } =
    useProductsCtx();

  const handleChange = (action) => {
    dispatch(action);
  };

  const handleClear = () => {
    selectedInputs.forEach((element) => {
      element.target.checked = false;
    });
    handleChange({
      type: 'CLEAR_ALL'
    });
  };

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
          <span
            className='primary sm reg fl-rt clear__btn'
            onClick={handleClear}
          >
            Clear All
          </span>

          <h1 className='primary sm sb mg-full'>Price</h1>

          <span className='primary sm sb'>₹ 500</span>
          <span className='primary sm sb fl-rt'>₹ {priceLimit}</span>

          <input
            className='filter__slider mg-full'
            type='range'
            id='price'
            name='price'
            step='500'
            min='500'
            max='10000'
            value={priceLimit}
            onChange={(e) =>
              handleChange({
                type: 'SET_PRICE_LIMIT',
                payload: e.target.value,
                target: e
              })
            }
          />

          <div className='filter__category mg-full'>
            <h1 className='primary sm sb'>Category</h1>
            <label for='supplements'>
              <input
                className='filter__ip'
                type='checkbox'
                name='supplements'
                id='supplements'
                onChange={(e) =>
                  handleChange({
                    type: e.target.checked ? 'ADD_CATEGORY' : 'REMOVE_CATEGORY',
                    payload: 'supplements',
                    target: e
                  })
                }
              />{' '}
              Supplements
            </label>
            <label for='clothing'>
              <input
                className='filter__ip'
                type='checkbox'
                name='clothing'
                id='clothing'
                onChange={(e) =>
                  handleChange({
                    type: e.target.checked ? 'ADD_CATEGORY' : 'REMOVE_CATEGORY',
                    payload: 'clothing',
                    target: e
                  })
                }
              />{' '}
              Clothing
            </label>
            <label for='combo'>
              <input
                className='filter__ip'
                type='checkbox'
                name='combo'
                id='combo'
                onChange={(e) =>
                  handleChange({
                    type: e.target.checked ? 'ADD_CATEGORY' : 'REMOVE_CATEGORY',
                    payload: 'combo',
                    target: e
                  })
                }
              />{' '}
              Combos
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
                onChange={(e) =>
                  handleChange({
                    type: 'SET_RATING',
                    payload: 4,
                    target: e
                  })
                }
              />{' '}
              4 Star & above
            </label>
            <label for='3star--above'>
              <input
                className='filter__ip'
                type='radio'
                name='rating'
                id='3star--above'
                onChange={(e) =>
                  handleChange({
                    type: 'SET_RATING',
                    payload: 3,
                    target: e
                  })
                }
              />{' '}
              3 Star & above
            </label>
            <label for='2star--above'>
              <input
                className='filter__ip'
                type='radio'
                name='rating'
                id='2star--above'
                onChange={(e) =>
                  handleChange({
                    type: 'SET_RATING',
                    payload: 2,
                    target: e
                  })
                }
              />{' '}
              2 Star & above
            </label>
            <label for='1star--above'>
              <input
                className='filter__ip'
                type='radio'
                name='rating'
                id='1star--above'
                onChange={(e) =>
                  handleChange({
                    type: 'SET_RATING',
                    payload: 1,
                    target: e
                  })
                }
              />{' '}
              1 Star & above
            </label>
          </div>

          <div className='filter__category mg-full'>
            <h1 className='primary sm sb'>Unavailable</h1>
            <label for='outOfStock'>
              <input
                className='filter__ip'
                type='checkbox'
                id='outOfStock'
                onChange={(e) =>
                  handleChange({
                    type: 'TOGGLE_OUT_OF_STOCK',
                    target: e
                  })
                }
              />{' '}
              Include Out of Stock
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
                onChange={(e) =>
                  handleChange({
                    type: 'SET_SORTING_DIRECTION',
                    payload: 'HIGH_TO_LOW',
                    target: e
                  })
                }
              />{' '}
              High to Low
            </label>
            <label>
              <input
                className='filter__ip'
                type='radio'
                name='sorting'
                id='lowtohigh'
                onChange={(e) =>
                  handleChange({
                    type: 'SET_SORTING_DIRECTION',
                    payload: 'LOW_TO_HIGH',
                    target: e
                  })
                }
              />{' '}
              Low to High
            </label>
          </div>

          <div className='filter__category mg-full'>
            <h1 className='primary sm sb'>Fast - Delivery</h1>
            <label for='delivery'>
              <input
                className='filter__ip'
                type='checkbox'
                id='delivery'
                onChange={(e) =>
                  handleChange({
                    type: 'TOGGLE_ONLY_FAST_DELIVERY',
                    target: e
                  })
                }
              />{' '}
              Express Delivery
            </label>
          </div>
        </aside>

        {/* Products Listing */}
        <main className='hb--main sm-s'>
          <Deals items={productListing} name='Products' wishlist={true} />
        </main>
      </div>
      <Footer />
    </div>
  );
}
