import './address.css';
import { useAddrCtx, useAddrFormCtx } from '../context/addressContext';

export default function AddressForm({ update }) {
  const { openForm } = useAddrCtx();
  const { showError, form, onFocusOut, handleFormChange, formSubmitHandler } =
    useAddrFormCtx();

  return (
    <div className='card address shdw'>
      <h1 className='btn--auth--solid md sb cen xs-s'>
        {update ? 'EDIT THE' : 'ENTER NEW'} DETAILS
      </h1>

      {showError && !form.isFormValid && (
        <div className='tag cen md mg-half'>
          Please fill all the fields correctly
        </div>
      )}

      <form className='sm-s'>
        <div className='address__fields'>
          <label htmlFor='name--field' className='label'>
            Name:
          </label>
          <input
            className='input input--man sm-s'
            type='text'
            name='name'
            id='name--field'
            value={form?.name?.value}
            onChange={(e) => handleFormChange(e)}
            onBlur={(e) => onFocusOut(e)}
          />
        </div>
        {form.name.touched && form.name.hasError && (
          <h1 className='input__error'>{form.name.error}</h1>
        )}
        <div className='address__fields'>
          <label htmlFor='email--field' className='label'>
            Email:
          </label>
          <input
            className='input sm-s'
            type='email'
            name='email'
            id='email--field'
            value={form?.email?.value}
            onChange={(e) => handleFormChange(e)}
            onBlur={(e) => onFocusOut(e)}
          />
          {form.email.touched && form.email.hasError && (
            <h1 className='input__error'>{form.email.error}</h1>
          )}
        </div>
        <div className='address__fields'>
          <label htmlFor='mobile--field' className='label'>
            Phone:
          </label>
          <input
            className='input sm-s'
            type='number'
            name='mobile'
            id='mobile--field'
            value={form?.mobile?.value}
            onChange={(e) => handleFormChange(e)}
            onBlur={(e) => onFocusOut(e)}
          />
          {form.mobile.touched && form.mobile.hasError && (
            <h1 className='input__error'>{form.mobile.error}</h1>
          )}
        </div>
        <div className='address__fields'>
          <label htmlFor='line_1' className='label'>
            House No.
          </label>
          <input
            className='input sm-s'
            type='text'
            name='line_1'
            id='line_1'
            value={form?.line_1?.value}
            onChange={(e) => handleFormChange(e)}
            onBlur={(e) => onFocusOut(e)}
          />
          {form.line_1.touched && form.line_1.hasError && (
            <h1 className='input__error'>{form.line_1.error}</h1>
          )}
        </div>
        <div className='address__fields'>
          <label htmlFor='line_2' className='label'>
            Area
          </label>
          <input
            className='input sm-s'
            type='text'
            name='line_2'
            id='line_2'
            value={form?.line_2?.value}
            onChange={(e) => handleFormChange(e)}
            onBlur={(e) => onFocusOut(e)}
          />
          {form.line_2.touched && form.line_2.hasError && (
            <h1 className='input__error'>{form.line_2.error}</h1>
          )}
        </div>
        <div className='address__fields'>
          <label htmlFor='landmark' className='label'>
            Landmark
          </label>
          <input
            className='input sm-s'
            type='text'
            name='landmark'
            id='landmark'
            value={form?.landmark?.value}
            onChange={(e) => handleFormChange(e)}
            onBlur={(e) => onFocusOut(e)}
          />
          {form.landmark.touched && form.landmark.hasError && (
            <h1 className='input__error'>{form.landmark.error}</h1>
          )}
        </div>
        <div className='address__fields'>
          <label htmlFor='state' className='label'>
            State
          </label>
          <select
            id='state'
            name='state'
            className='input select sm-s'
            value={form?.state?.value || '-- Select a State --'}
            onChange={(e) => handleFormChange(e)}
          >
            <option value='-- Select a State --' className='primary--light'>
              -- Select a State --
            </option>
            <option value='Rajasthan'>Rajasthan</option>
            <option value='Uttrakhand'>Uttrakhand</option>
            <option value='Karnataka'>Karnataka</option>
            <option value='Kerala'>Kerala</option>
          </select>
          {form.state.touched && form.state.hasError && (
            <h1 className='input__error'>{form.state.error}</h1>
          )}
        </div>
        <div className='address__fields'>
          <label htmlFor='city' className='label'>
            City
          </label>
          <select
            id='city'
            name='city'
            className='input select sm-s'
            value={form?.city?.value || '-- Select a City --'}
            onChange={handleFormChange}
          >
            <option value='-- Select a City --' className='primary--light'>
              -- Select a City --
            </option>
            <option value='Jaipur'>Jaipur</option>
            <option value='Ajmer'>Ajmer</option>
            <option value='Bikaner'>Bikaner</option>
            <option value='Jodhpur'>Jodhpur</option>
          </select>
          {form.city.touched && form.city.hasError && (
            <h1 className='input__error'>{form.city.error}</h1>
          )}
        </div>
        <div className='address__fields'>
          <label htmlFor='pincode' className='label'>
            Pincode
          </label>
          <input
            className='input sm-s'
            type='number'
            name='pincode'
            id='pincode'
            value={form?.pincode?.value}
            onChange={handleFormChange}
            onBlur={(e) => onFocusOut(e)}
          />
          {form.pincode.touched && form.pincode.hasError && (
            <h1 className='input__error'>{form.pincode.error}</h1>
          )}
        </div>
        <div className='address__fields'>
          <label htmlFor='type' className='label'>
            Address Type
          </label>
          <select
            id='type'
            name='type'
            className='input select sm-s'
            value={form?.type?.value || '-- Select a Type --'}
            onChange={handleFormChange}
          >
            <option value='' className='primary--light'>
              -- Select a Type --
            </option>
            <option value='HOME'>Home</option>
            <option value='OFFICE'>Office</option>
            <option value='OTHERS'>Relative</option>
          </select>
          {form.type.touched && form.type.hasError && (
            <h1 className='input__error'>{form.type.error}</h1>
          )}
        </div>
        <div className='flex-ct-sb'>
          <button
            className='btn btn--auth--solid sb'
            onClick={(e) => formSubmitHandler(e, 'isFormValid')}
          >
            {update ? 'UPDATE' : 'ADD'} ADDRESS
          </button>
          <button className='btn btn--auth sb' onClick={openForm.bind(this)}>
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
}
