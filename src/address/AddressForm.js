import './address.css';

export default function AddressForm(props) {
  const {
    name = 'sp',
    email = 'abc@s.com',
    mobile = 90,
    type = 'Home',
    line_1 = 23,
    line_2 = 'asdasd',
    landmark = 'sdsad',
    city = 'Ajmer',
    state = 'Rajasthan',
    pincode = 232323,
    update = true
  } = props;
  return (
    <div class='card address shdw'>
      <h1 class='btn--success md sb cen xs-s'>
        {update ? 'EDIT THE' : 'ENTER NEW'} DETAILS
      </h1>
      <form action='#' class='sm-s'>
        <div class='fields'>
          <label for='name--field' class='label'>
            Name:
          </label>
          <input
            class='input sm-s'
            type='text'
            name='name'
            id='name--field'
            autocomplete='off'
            value={name}
          />
        </div>
        <div class='fields'>
          <label for='email--field' class='label'>
            Email:
          </label>
          <input
            class='input sm-s'
            type='email'
            name='email'
            id='email--field'
            autocomplete='email'
            value={email}
          />
        </div>
        <div class='fields'>
          <label for='phone--field' class='label'>
            Phone:
          </label>
          <input
            class='input sm-s'
            type='number'
            name='phone'
            id='phone--field'
            autocomplete='mobile'
            value={mobile}
          />
        </div>
        <div class='fields'>
          <label for='add_one' class='label'>
            House No.
          </label>
          <input
            class='input sm-s'
            type='text'
            name='add_one'
            id='add_one'
            autocomplete='off'
            value={line_1}
          />
        </div>
        <div class='fields'>
          <label for='add_two' class='label'>
            Area
          </label>
          <input
            class='input sm-s'
            type='text'
            name='add_two'
            id='add_two'
            autocomplete='off'
            value={line_2}
          />
        </div>
        <div class='fields'>
          <label for='landmark' class='label'>
            Landmark
          </label>
          <input
            class='input sm-s'
            type='text'
            name='landmark'
            id='landmark'
            autocomplete='off'
            value={landmark}
          />
        </div>
        <div class='fields'>
          <label for='state' class='label'>
            State
          </label>
          <select
            id='state'
            name='state'
            class='input select sm-s'
            value={state}
          >
            <option value='' class='primary--light' selected>
              -- Select a State --
            </option>
            <option value='Rajasthan'>Rajasthan</option>
            <option value='Uttrakhand'>Uttrakhand</option>
            <option value='Karnataka'>Karnataka</option>
            <option value='Kerala'>Kerala</option>
          </select>
        </div>
        <div class='fields'>
          <label for='city' class='label'>
            City
          </label>
          <select id='city' name='city' class='input select sm-s' value={city}>
            <option value='' class='primary--light' selected>
              -- Select a City --
            </option>
            <option value='Jaipur'>Jaipur</option>
            <option value='Ajmer'>Ajmer</option>
            <option value='Bikaner'>Bikaner</option>
            <option value='Jodhpur'>Jodhpur</option>
          </select>
        </div>
        <div class='fields'>
          <label for='pincode' class='label'>
            Pincode
          </label>
          <input
            class='input sm-s'
            type='number'
            name='pincode'
            id='pincode'
            autocomplete='mobile'
            value={pincode}
          />
        </div>
        <div class='fields'>
          <label for='type' class='label'>
            Address Type
          </label>
          <select id='type' name='type' class='input select sm-s' value={type}>
            <option value='' class='primary--light' selected>
              -- Select a Type --
            </option>
            <option value='Home'>Home</option>
            <option value='Office'>Office</option>
            <option value='Relative'>Relative</option>
          </select>
        </div>
        <button type='submit' class='btn btn--wide btn--float sb'>
          {update ? 'UPDATE' : 'ADD'} ADDRESS
        </button>
      </form>
    </div>
  );
}
