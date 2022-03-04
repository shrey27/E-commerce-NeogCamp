export default function Drawer({ open, setOpen }) {
  return (
    <div>
      <div class={`drawer flex-ct-ct ${open && 'drawer__open'}`}>
        <div
          class={`drawer__background ${open && 'drawer__open'}`}
          onClick={() => setOpen(false)}
        ></div>
        <div class='drawer__content' direction='left'>
          <h1 class='btn--float home xs-s'>
            <i class='fas fa-home'></i>
          </h1>
          <hr />
          <section class='submenu__items flex-st-ct flex-vertical'>
            <span class='submenu__item md sb'>Protein</span>
            <span class='submenu__item md sb'>Gym Gear</span>
            <span class='submenu__item md sb'>Athletics</span>
            <span class='submenu__item md sb'>Nutrition</span>
            <span class='submenu__item md sb'>Vegan</span>
            <span class='submenu__item md sb'>Clothing</span>
            <span class='submenu__item md sb'>Limited-Edition</span>
          </section>
          <hr />
        </div>
        <span class='drawer__close' onClick={() => setOpen(false)}>
          <i class='fas fa-times-circle'></i>
        </span>
      </div>
    </div>
  );
}
