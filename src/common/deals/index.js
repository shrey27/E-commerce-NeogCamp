import './deals.css';
import Deal from './Deal';

export default function Deals({ items }) {
  return (
    <section class='deals'>
      <h1 class='primary lg xs-s cen'>Top Deals</h1>
      <div class='deal--cards xs-s'>
        {items.map((elem, index) => {
          return <Deal key={index * 2} {...elem} />;
        })}
      </div>
    </section>
  );
}
