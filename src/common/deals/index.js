import './deals.css';
import Deal from './Deal';

export default function Deals({ items, name, wishlist, close, noButton }) {
  return (
    <section className='deals'>
      <h1 className='primary lg xs-s cen'>{name}</h1>
      <div className='deal--cards xs-s'>
        {items.map((elem, index) => {
          return (
            <Deal key={index * 2} {...elem} wishlist={wishlist} close={close} noButton={noButton}/>
          );
        })}
      </div>
    </section>
  );
}
