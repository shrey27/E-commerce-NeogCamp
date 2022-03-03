import './footer.css';

export default function Footer() {
  return (
    <footer class='footer--ctr flex-ct-ct flex-vertical sm-s'>
      <span class='md bl mg-half'>Connect with me</span>
      <div>
        <a href='https://twitter.com/home'>
          <img
            class='box__image__sm'
            src='https://img.icons8.com/color/48/000000/twitter--v1.png'
            alt='logo'
          />
        </a>
        <a href='https://github.com/shrey27'>
          <img
            class='box__image__sm'
            src='https://img.icons8.com/glyph-neue/48/000000/github.png'
            alt='logo'
          />
        </a>
        <a href='https://www.linkedin.com/in/shrey27/'>
          <img
            class='box__image__sm'
            src='https://img.icons8.com/color/48/000000/linkedin.png'
            alt='logo'
          />
        </a>
      </div>
      <span class='primary sm reg mg-half'>
        © 2022 Legion Athletics Pvt Ltd. All rights reserved.
      </span>
    </footer>
  );
}
