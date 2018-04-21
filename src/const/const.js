const errorsRegisterInitialState = {
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

const defaultUserProfile = {
    basic: {
        first: 'Victor',
        last: 'Tran',
        birthday: new Date('1994-11-13T00:00:00').toDateString(),
    },
    contact: {
        phone: {
            area: '123',
            number: '1113333',
        },
        social: ['instagram', 'facebook', 'tumblr']
    },
    account: {
        email: 'victor@test.com',
        password: '********'
    },
    personal: {
        address: '123 some street',
        address2: 'maybe #1',
        city: 'St. Petersburg',
        state: 'Florida',
        zip: '12345'
    }

}

export { errorsRegisterInitialState, states, defaultUserProfile };