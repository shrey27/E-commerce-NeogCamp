import { Fragment } from 'react';
import './product.css';
import Navbar from '../common/navbar';
import Footer from '../common/footer';
import Category from '../common/header/Category';

export default function Product() {
  return (
    <Fragment>
      <Navbar />
      <Category />

      <main class='product'>
        <div class='card card__product'>
          <img
            src='https://m.media-amazon.com/images/I/413GuC4J4FL.jpg'
            alt='Banner'
            class='card__banner'
          />
          <section class='content xs-s'>
            <h1 class='primary lg bl xs-s cen'>Whey Protein Concentrate</h1>
            <h1 class='highlight md sb cen mg-half'>Vegetarian</h1>
            <p class='primary md sb mg-half'>
              Elite Platinum Standard 100% Whey Protein Powder 1 lbs, 454 g
              (Double Rich Chocolate), for Muscle Support and Recovery
            </p>

            <ul class='stack'>
              <li class='product__stack__item xs-s'>
                <span class='primary lg sb price__val'>
                  Discount Price:&nbsp;₹8,000
                </span>
              </li>
              <li class='product__stack__item xs-s'>
                <span class='primary lg sb price--sec'>
                  Price:&nbsp;₹18,000
                </span>
              </li>
              <li class='product__stack__item xs-s'>
                <span class='tag lg sb'>
                  <i class='fa-solid fa-tags'></i>Upto 30% Off
                </span>
                <span class='content__rating sb fl-rt'>
                  4.2<i class='fas fa-star'></i>
                </span>
              </li>
            </ul>

            <h1 class='primary lg sb cen xs-s'>About the Product</h1>
            <ul class='primary sm sb list--square sm-s'>
              <li>
                Platinum Standard 100% Whey Blend – 24g blended protein
                consisting of whey protein isolate, whey protein concentrate,
                and whey peptides/hydrolysates to support lean muscle mass.
              </li>
              <li>
                Primary protein source is Isolate, they don't call it the
                Platinum Standard of quality for nothing.
              </li>
              <li>
                Authenticity - SMS us your 6 digit unique code on the pack at
                57575 or visit our website Authenticateon.in to instantly test
                the authenticity of the product.
              </li>
              <li>
                Size/Flavours - Pick your size from 1, 2, 5 pounds and 10
                pound/4Kg options and 10 Delicious flavours available to choose
                from.
              </li>
              <li>
                Platinum Standard 100% Whey Blend – 24g blended protein
                consisting of whey protein isolate, whey protein concentrate,
                and whey peptides/hydrolysates to support lean muscle mass.
              </li>
              <li>
                Primary protein source is Isolate, they don't call it the
                Platinum Standard of quality for nothing.
              </li>
              <li>
                Authenticity - SMS us your 6 digit unique code on the pack at
                57575 or visit our website Authenticateon.in to instantly test
                the authenticity of the product.
              </li>
              <li>
                Size/Flavours - Pick your size from 1, 2, 5 pounds and 10
                pound/4Kg options and 10 Delicious flavours available to choose
                from.
              </li>
            </ul>

            <div class='button__ctr'>
              <button class='btn btn--auth--solid sb mg-half'>Add to Cart</button>
              <button class='btn sb mg-half'>Add to Wishlist</button>
            </div>
          </section>
        </div>
      </main>

      <Footer />

    </Fragment>
  );
}
