const errorsInitialState = {
    first: {
        field: '*First Name',
        isNotValid: true,
        message: ''
    },
    last: {
        field: '*Last name',
        isNotValid: true,
        message: ''
    },
    address: {
        field: '*Address',
        isNotValid: true,
        message: ''
    },
    city: {
        field: '*City',
        isNotValid: true,
        message: ''
    },
    state: {
        field: '*State',
        isNotValid: true,
        message: ''
    },
    zip: {
        field: '*Zip Code',
        isNotValid: true,
        message: ''
    },
    area: {
        field: '*Area Code',
        isNotValid: true,
        message: ''
    },
    number: {
        field: '*Phone Number',
        isNotValid: true,
        message: ''
    },
    email: {
        field: '*Email',
        isNotValid: true,
        message: ''
    },
    password: {
        field: '*Password',
        isNotValid: true,
        message: ''
    },
    verify: {
        field: '*This field',
        isNotValid: true,
        message: ''
    },
    agree: {
        field: '*Agreement',
        isNotValid: true,
        message: ''
    },
}

const states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
];

export {errorsInitialState, states};