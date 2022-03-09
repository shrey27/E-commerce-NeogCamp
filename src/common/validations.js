export const formFields = {
  addressFormFields: [
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
  ],
  cardFormFields: ['name', 'bank', 'number', 'cardtype', 'month', 'year'],
  upiFormField: ['upiId']
};

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const years = new Array(50)
  .fill(2022)
  .map((elem, index) => elem + index);

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
    pattern: /^[1-9]{1}[0-9]{9}$/,
    errorMsg: 'Invalid Mobile no. Enter valid 10 digits mobile number'
  },
  line_1: {
    pattern: /^[a-zA-Z0-9 ]+$/,
    errorMsg: 'Invalid address. Use alphabets or numbers only'
  },
  line_2: {
    pattern: /^[a-zA-Z0-9 ]+$/,
    errorMsg: 'Invalid address. Use alphabets or numbers only'
  },
  landmark: {
    pattern: /^[a-zA-Z0-9 ]+$/,
    errorMsg: 'Invalid address. Use alphabets or numbers only'
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
    errorMsg: 'Invalid Pincode. Enter valid 6 digits pincode'
  },
  bank: {
    pattern: /^[a-zA-Z ]+$/,
    errorMsg: 'Invalid Bank Name. Use alphabets only'
  },
  number: {
    pattern: /^[1-9]{1}[0-9]{11}$/,
    errorMsg: 'Invalid Card Number. Enter valid 12 digits long card number '
  },
  cardtype: {
    pattern: /^[a-zA-Z]+$/,
    errorMsg: 'Invalid Card Type. Choose an option from the list'
  },
  month: {
    pattern: /^[a-zA-Z ]+$/,
    errorMsg: 'Invalid Month. Choose an option from the list'
  },
  year: {
    pattern: /^[0-9]{4}$/,
    errorMsg: 'Invalid Year. Choose an option from the list'
  },
  upiId: {
    pattern: /^[a-z]+@[a-z]+$/,
    errorMsg: 'Invalid type. Enter a valid UPI ID'
  }
};
