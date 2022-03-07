import './address.css';
import { useAddrCtx, useAddrApiCtx } from '../context/addressContext';

export default function AddressForm(props) {
  const {
    id,
    name,
    email,
    mobile,
    type,
    line_1,
    line_2,
    landmark,
    city,
    state,
    pincode,
    update
  } = props;
  const { openForm } = useAddrCtx();
  const { addNewAddress, updateAddress } = useAddrApiCtx();

  const submitHandler = () => {
    openForm();
    addNewAddress({ name: 'nick-3 jones' });
  };

  const updateHandler = () => {
    openForm();
    updateAddress(id, { name: 'nick-4-jones' });
  };

  return (
    <div className='card address shdw'>
      <h1 className='btn--auth--solid md sb cen xs-s'>
        {update ? 'EDIT THE' : 'ENTER NEW'} DETAILS
      </h1>
      <form action='#' className='sm-s'>
        <div className='fields'>
          <label for='name--field' className='label'>
            Name:
          </label>
          <input
            className='input sm-s'
            type='text'
            name='name'
            id='name--field'
            autocomplete='off'
            value={name}
          />
        </div>
        <div className='fields'>
          <label for='email--field' className='label'>
            Email:
          </label>
          <input
            className='input sm-s'
            type='email'
            name='email'
            id='email--field'
            autocomplete='email'
            value={email}
          />
        </div>
        <div className='fields'>
          <label for='phone--field' className='label'>
            Phone:
          </label>
          <input
            className='input sm-s'
            type='number'
            name='phone'
            id='phone--field'
            autocomplete='mobile'
            value={mobile}
          />
        </div>
        <div className='fields'>
          <label for='add_one' className='label'>
            House No.
          </label>
          <input
            className='input sm-s'
            type='text'
            name='add_one'
            id='add_one'
            autocomplete='off'
            value={line_1}
          />
        </div>
        <div className='fields'>
          <label for='add_two' className='label'>
            Area
          </label>
          <input
            className='input sm-s'
            type='text'
            name='add_two'
            id='add_two'
            autocomplete='off'
            value={line_2}
          />
        </div>
        <div className='fields'>
          <label for='landmark' className='label'>
            Landmark
          </label>
          <input
            className='input sm-s'
            type='text'
            name='landmark'
            id='landmark'
            autocomplete='off'
            value={landmark}
          />
        </div>
        <div className='fields'>
          <label for='state' className='label'>
            State
          </label>
          <select
            id='state'
            name='state'
            className='input select sm-s'
            value={state}
          >
            <option value='' className='primary--light' selected>
              -- Select a State --
            </option>
            <option value='Rajasthan'>Rajasthan</option>
            <option value='Uttrakhand'>Uttrakhand</option>
            <option value='Karnataka'>Karnataka</option>
            <option value='Kerala'>Kerala</option>
          </select>
        </div>
        <div className='fields'>
          <label for='city' className='label'>
            City
          </label>
          <select
            id='city'
            name='city'
            className='input select sm-s'
            value={city}
          >
            <option value='' className='primary--light' selected>
              -- Select a City --
            </option>
            <option value='Jaipur'>Jaipur</option>
            <option value='Ajmer'>Ajmer</option>
            <option value='Bikaner'>Bikaner</option>
            <option value='Jodhpur'>Jodhpur</option>
          </select>
        </div>
        <div className='fields'>
          <label for='pincode' className='label'>
            Pincode
          </label>
          <input
            className='input sm-s'
            type='number'
            name='pincode'
            id='pincode'
            autocomplete='mobile'
            value={pincode}
          />
        </div>
        <div className='fields'>
          <label for='type' className='label'>
            Address Type
          </label>
          <select
            id='type'
            name='type'
            className='input select sm-s'
            value={type}
          >
            <option value='' className='primary--light' selected={!type}>
              -- Select a Type --
            </option>
            <option value='Home' selected={'Home' === type}>
              Home
            </option>
            <option value='Office' selected={'Office' === type}>
              Office
            </option>
            <option value='Relative' selected={'Relative' === type}>
              Relative
            </option>
          </select>
        </div>
        <div className='flex-ct-sb'>
          {update ? (
            <button className='btn btn--auth--solid sb' onClick={updateHandler}>
              UPDATE ADDRESS
            </button>
          ) : (
            <button className='btn btn--auth--solid sb' onClick={submitHandler}>
              ADD ADDRESS
            </button>
          )}
          <button className='btn btn--auth sb' onClick={openForm.bind(this)}>
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
}
