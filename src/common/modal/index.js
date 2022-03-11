import './modal.css';

export default function Modal({
  modalOpen,
  setModalOpen,
  returnFlag,
  returnOrderhandler
}) {
  return (
    <div class={`modal ${modalOpen && 'modal__open'} flex-ct-ct`} wide='40'>
      <div class='modal__background' onClick={() => setModalOpen(false)}></div>
      <div class='modal__content sharp md-s'>
        <h1 class='tertiary md sb cen'>Please Confirm</h1>
        <p class='md sb cen mg-half'>
          Are you sure you want to {returnFlag ? 'cancel' : 'return'} this order
          ?
        </p>
        <div className='flex-ct-ct'>
          <button
            className='btn btn--auth--solid sb'
            onClick={returnOrderhandler}
          >
            Proceed
          </button>
          <button
            className='btn btn--error sb'
            onClick={() => setModalOpen(false)}
          >
            Cancel
          </button>
        </div>
      </div>
      <span class='modal__close' onClick={() => setModalOpen(false)}>
        <i class='fas fa-times-circle'></i>
      </span>
    </div>
  );
}
