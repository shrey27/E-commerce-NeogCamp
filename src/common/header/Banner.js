import './header.css';

export default function Banner({ source }) {
  return (
    <div class='carousal--container mg-full'>
      <img src={source} class='carousal' alt='Banner' />
    </div>
  );
}
