import './header.css';
import Category from './Category';
import Banner from './Banner';

export default function Header() {
  return (
    <header className='header'>
      <Category />
      <section className='features'>
        <div className='feature'>
          <span>
            <i className='fas fa-clipboard-list'></i>Direct delivery from UK to
            your home
          </span>
        </div>
        <div className='feature'>
          <span>
            <i className='fas fa-plane'></i>FREE DELIVERY ABOVE ₹1000
          </span>
        </div>
        <div className='feature'>
          <span>
            <i className='fas fa-download'></i>Download our app for exclusive
            offers
          </span>
        </div>
      </section>
      <Banner source='carousal-2.jpeg' />
      <div className='shortcuts mg-full'>
        <div className='shortcut btn--float'>
          <span>Protein</span>
        </div>
        <div className='shortcut btn--primary'>
          <span>Equipment</span>
        </div>
        <div className='shortcut btn--icons'>
          <span>Nutrition</span>
        </div>
        <div className='shortcut btn--primary'>
          <span>Vegan</span>
        </div>
        <div className='shortcut btn--icons'>
          <span>Athletics</span>
        </div>
        <div className='shortcut btn--float'>
          <span>Clothing</span>
        </div>
      </div>
    </header>
  );
}
