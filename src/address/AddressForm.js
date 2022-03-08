import './address.css';
import { useAddrCtx, useAddrApiCtx } from '../context/addressContext';
import { useState, useReducer } from 'react';

const formsReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FORM':
      const { name, value, hasError, error, touched, isFormValid } =
        action.data;
      return {
        ...state,
        [name]: { ...state[name], value, hasError, error, touched },
        isFormValid
      };
    default:
      return state;
  }
};

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

  const [form, dispatch] = useReducer(formsReducer, {
    name: {
      value: name || '',
      touched: false,
      hasError: true,
      error: ''
    },
    email: {
      value: email || '',
      touched: false,
      hasError: true,
      error: ''
    },
    mobile: {
      value: mobile || null,
      touched: false,
      hasError: true,
      error: ''
    },
    line_1: {
      value: line_1 || '',
      touched: false,
      hasError: true,
      error: ''
    },
    line_2: {
      value: line_2 || '',
      touched: false,
      hasError: true,
      error: ''
    },
    landmark: {
      value: landmark || '',
      touched: false,
      hasError: true,
      error: ''
    },
    city: {
      value: city || '',
      touched: false,
      hasError: true,
      error: ''
    },
    state: {
      value: state || '',
      touched: false,
      hasError: true,
      error: ''
    },
    pincode: {
      value: pincode || null,
      touched: false,
      hasError: true,
      error: ''
    },
    type: {
      value: type || '',
      touched: false,
      hasError: true,
      error: ''
    },
    isFormValid: false
  });
  const [showError, setShowError] = useState(false);

  const { openForm } = useAddrCtx();
  const { addNewAddress, updateAddress } = useAddrApiCtx();

  const validateInput = (name, value) => {
    let hasError = false,
      error = '';
    if (!value || value.trim() === '')
      return { hasError: true, error: 'Field cannot be empty' };
    switch (name) {
      case 'name':
        if (!/^[a-zA-Z ]+$/.test(value)) {
          hasError = true;
          error = 'Invalid Name. Avoid Special characters';
        }
        break;
      case 'email':
        if (
          !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
            value
          )
        ) {
          hasError = true;
          error = 'Invalid Email. Use valid email format';
        }
        break;
      case 'mobile':
        if (!/^[0-9]{10}$/.test(value)) {
          hasError = true;
          error =
            'Invalid Mobile number. Mobile number should be 10 digits long';
        }
        break;
      case 'line_1':
        if (!/^[a-zA-Z0-9]+$/.test(value)) {
          hasError = true;
          error =
            'Invalid Address. Address can contain alphabets or numbers only';
        }
        break;
      case 'line_2':
        if (!/^[a-zA-Z0-9]+$/.test(value)) {
          hasError = true;
          error =
            'Invalid Address. Address can contain alphabets or numbers only';
        }
        break;
      case 'landmark':
        if (!/^[a-zA-Z0-9]+$/.test(value)) {
          hasError = true;
          error =
            'Invalid Address. Address can contain alphabets or numbers only';
        }
        break;
      case 'pincode':
        if (!/^[1-9]{6}$/.test(value)) {
          hasError = true;
          error = 'Invalid Pincode. Pincode must be 6 digits long ';
        }
        break;
      default:
        break;
    }
    return { hasError, error };
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    const { hasError, error } = validateInput(name, value);
    let isFormValid = true;

    for (const key in form) {
      const item = form[key];
      // Check if the current field has error
      if (key === name && hasError) {
        isFormValid = false;
        break;
      } else if (key !== name && item.hasError) {
        // Check if any other field has error
        isFormValid = false;
        break;
      }
    }

    dispatch({
      type: 'UPDATE_FORM',
      data: {
        name,
        value,
        hasError,
        error,
        touched: false,
        isFormValid
      }
    });
  };

  const onFocusOut = (e) => {
    const { name, value } = e.target;
    const { hasError, error } = validateInput(name, value);

    let isFormValid = true;

    for (const key in form) {
      const item = form[key];
      if (key === name && hasError) {
        isFormValid = false;
        break;
      } else if (key !== name && item.hasError) {
        isFormValid = false;
        break;
      }
    }

    dispatch({
      type: 'UPDATE_FORM',
      data: { name, value, hasError, error, touched: true, isFormValid }
    });
  };

  const submitHandler = (isUpdate) => {
    const arrayofKeys = Object.keys(form);
    const formObject = arrayofKeys.reduce((prev, curr) => {
      return curr === 'isFormValid'
        ? { ...prev }
        : { ...prev, [curr]: form[curr].value };
    }, {});
    console.log(formObject);
    isUpdate ? updateAddress(id, formObject) : addNewAddress(formObject);
    openForm();
  };

  const formSubmitHandler = (e, isUpdate) => {
    e.preventDefault(); //prevents the form from submitting
    let isFormValid = true;
    for (const name in form) {
      if (name === 'isFormValid') continue;
      const item = form[name];
      const { value } = item;
      const { hasError, error } = validateInput(name, value);
      if (hasError) {
        isFormValid = false;
      }
      if (name) {
        dispatch({
          type: 'UPDATE_FORM',
          data: {
            name,
            value,
            hasError,
            error,
            touched: true,
            isFormValid
          }
        });
      }
    }
    if (!isFormValid) {
      for (const key in form) {
        const item = form[key];
        console.table({ [key]: item });
      }
      setShowError(true);
    } else {
      submitHandler(isUpdate);
    }

    // Hide the error message after 5 seconds
    setTimeout(() => {
      setShowError(false);
    }, 3000);
  };

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
        <div className='fields'>
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
          <span className='input__error'>{form.name.error}</span>
        )}
        <div className='fields'>
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
            <span className='input__error'>{form.email.error}</span>
          )}
        </div>
        <div className='fields'>
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
            <span className='input__error'>{form.mobile.error}</span>
          )}
        </div>
        <div className='fields'>
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
            <span className='input__error'>{form.line_1.error}</span>
          )}
        </div>
        <div className='fields'>
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
            <span className='input__error'>{form.line_2.error}</span>
          )}
        </div>
        <div className='fields'>
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
            <span className='input__error'>{form.landmark.error}</span>
          )}
        </div>
        <div className='fields'>
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
            <span className='input__error'>{form.state.error}</span>
          )}
        </div>
        <div className='fields'>
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
            <span className='input__error'>{form.city.error}</span>
          )}
        </div>
        <div className='fields'>
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
            <span className='input__error'>{form.pincode.error}</span>
          )}
        </div>
        <div className='fields'>
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
          {form.type.touched && form.type.hasError && (
            <span className='input__error'>{form.type.error}</span>
          )}
        </div>
        <div className='flex-ct-sb'>
          {update ? (
            <button
              className='btn btn--auth--solid sb'
              onClick={(e) => formSubmitHandler(e, true)}
            >
              UPDATE ADDRESS
            </button>
          ) : (
            <button
              className='btn btn--auth--solid sb'
              onClick={formSubmitHandler}
            >
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
