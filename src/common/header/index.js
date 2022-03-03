import './header.css';
import Category from './Category';
import Banner from './Banner';

export default function Header() {
  return (
    <header class='header'>
      <Category />
      <section class='features'>
        <div class='feature'>
          <span>
            <i class='fas fa-clipboard-list'></i>Direct delivery from UK to your
            home
          </span>
        </div>
        <div class='feature'>
          <span>
            <i class='fas fa-plane'></i>FREE DELIVERY ABOVE ₹1000
          </span>
        </div>
        <div class='feature'>
          <span>
            <i class='fas fa-download'></i>Download our app for exclusive offers
          </span>
        </div>
      </section>
      <Banner source='carousal-2.jpeg' />
      <div class='shortcuts mg-full'>
        <div class='shortcut btn--float'>
          <span>Protein</span>
        </div>
        <div class='shortcut btn--primary'>
          <span>Equipment</span>
        </div>
        <div class='shortcut btn--icons'>
          <span>Nutrition</span>
        </div>
        <div class='shortcut btn--primary'>
          <span>Vegan</span>
        </div>
        <div class='shortcut btn--icons'>
          <span>Athletics</span>
        </div>
        <div class='shortcut btn--float'>
          <span>Clothing</span>
        </div>
      </div>
    </header>
  );
}
