export const addressFormFields = [
  'name',
  'email',
  'mobile',
  'line_1',
  'line_2',
  'landmark',
  'city',
  'state',
  'pincode',
  'type'
];
export const validationList = {
  name: {
    pattern: /^[a-zA-Z ]+$/,
    errorMsg: 'Invalid Name. Use alphabets only'
  },
  email: {
    pattern:
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
    errorMsg: 'Invalid Email. Use correct email format'
  },
  mobile: {
    pattern: /^[0-9]{10}$/,
    errorMsg: 'Invalid Mobile no. Enter valid mobile number with 10 digits'
  },
  line_1: {
    pattern: /^[a-zA-Z0-9 ]+$/,
    errorMsg: 'Invalid Name. Use alphabets or numbers only'
  },
  line_2: {
    pattern: /^[a-zA-Z0-9 ]+$/,
    errorMsg: 'Invalid Name. Use alphabets or numbers only'
  },
  landmark: {
    pattern: /^[a-zA-Z0-9 ]+$/,
    errorMsg: 'Invalid Name. Use alphabets or numbers only'
  },
  city: {
    pattern: /^[a-zA-Z ]+$/,
    errorMsg: 'Invalid city. Choose an option from the list'
  },
  state: {
    pattern: /^[a-zA-Z ]+$/,
    errorMsg: 'Invalid state. Choose an option from the list'
  },
  type: {
    pattern: /^[a-zA-Z]+$/,
    errorMsg: 'Invalid type. Choose an option from the list'
  },
  pincode: {
    pattern: /^[1-9]{1}[0-9]{5}$/,
    errorMsg: 'Invalid Pincode. Enter valid pincode with 6 digits'
  }
};
