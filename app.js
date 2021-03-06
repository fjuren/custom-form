// signature purpose
// SOLID

const form = document.getElementsByTagName('form')[0];

const fullNameInput = document.querySelector('input#fName');
const fullNameErrorMessage = document.querySelectorAll('span.error')[0];

const dobInput = document.querySelector('input#dob');
const dobErrorMessage = document.querySelectorAll('span.error')[1];

const addressInput = document.querySelector('input#address');
const addressErrorMessage = document.querySelectorAll('span.error')[2];

const unitNumberInput = document.querySelector('input#unitNumber');
const unitNumberErrorMessage = document.querySelectorAll('span.error')[3];

const cityInput = document.querySelector('input#city');
const cityErrorMessage = document.querySelectorAll('span.error')[4];

const provinceInput = document.querySelector('input#Province');
const provinceErrorMessage = document.querySelectorAll('span.error')[5];

const postalInput = document.querySelector('input#Postal');
const postalErrorMessage = document.querySelectorAll('span.error')[6];

const countryInput = document.querySelector('input#country');
const countryErrorMessage = document.querySelectorAll('span.error')[7];

const emailInput = document.querySelector('input#email');
const emailErrorMessage = document.querySelectorAll('span.error')[8];

const phoneInput = document.querySelector('input#phone');
const phoneErrorMessage = document.querySelectorAll('span.error')[9];

const usernameInput = document.querySelector('input#username');
const usernameErrorMessage = document.querySelectorAll('span.error')[10];

const password1Input = document.querySelector('input#password1');
const password1ErrorMessage = document.querySelectorAll('span.error')[11];

const password2Input = document.querySelector('input#password2');
const password2ErrorMessage = document.querySelectorAll('span.error')[12];


// -> String
// Assesses validation criteria for full name field
const fullNameError = () => {
    if (fullNameInput.validity.valueMissing) {
        fullNameErrorMessage.textContent = 'Please enter your first and last name';
    } else if (fullNameInput.validity.patternMismatch) {
        fullNameErrorMessage.textContent = 'Use caps for your name! (E.g., John Smith)';
    } else {
        // do nothing
    }
};

// -> String
// Full name field prompt. Called when submit btn pressed
const fullNameErrorHandling = () => {
    if (!fullNameInput.validity.valid) {
        fullNameError();
    } else {
        fullNameErrorMessage.textContent = '';
    }
};

// Assesses validation criteria for date of birth field
const dobError = () => {
    if (dobInput.validity.valueMissing) {
        dobErrorMessage.textContent = 'Please enter your date of birth';
    } else {
        // do nothing
    }
};

// Date of birth prompt. Called when submit btn pressed
const dobErrorHandling = () => {
    if (!dobInput.validity.valid) {
        dobError();
        } else {
            dobErrorMessage.textContent = '';
        }
};

// Assesses validation criteria for address field
const addressError = () => {
    if (addressInput.validity.valueMissing) {
        addressErrorMessage.textContent = 'Please enter your address';
    } else {
        // do nothing
    }
};

// address prompt. Called when submit btn pressed
const addressErrorHandling = () => {
    if (!addressInput.validity.valid) {
        addressError();
        } else {
            addressErrorMessage.textContent = '';
        }
};

// Assesses validation criteria for unit number field
const unitNumberError = () => {
    if (unitNumberInput.validity.valueMissing) {
        unitNumberErrorMessage.textContent = 'Please enter your unit number';
    } else if (unitNumberInput.validity.patternMismatch) {
        unitNumberErrorMessage.textContent = 'Unit should be numerical values only';
    } else {
        // do nothing
    }
};

// unit number prompt. Called when submit btn pressed
const unitNumberErrorHandling = () => {
    if (!unitNumberInput.validity.valid) {
        unitNumberError();
        } else {
            unitNumberErrorMessage.textContent = '';
        }
};

// Assesses validation criteria for city field
const cityError = () => {
    if (cityInput.validity.valueMissing) {
        cityErrorMessage.textContent = 'Please enter your city';
    } else if (cityInput.validity.patternMismatch) {
        cityErrorMessage.textContent = 'Capitalize the first letter (e.g., Halifax)';
    } else {
        // do nothing
    }
};

// City prompt. Called when submit btn pressed
const cityErrorHandling = () => {
    if (!cityInput.validity.valid) {
        cityError();
        } else {
            cityErrorMessage.textContent = '';
        }
};

// Assesses validation criteria for state/provnice field
const provinceError = () => {
    if (provinceInput.validity.valueMissing) {
        provinceErrorMessage.textContent = 'Please enter your province';
    } else if (provinceInput.validity.patternMismatch) {
        provinceErrorMessage.textContent = 'Use province abbreviation (e.g., BC) ';
    }
};

// province prompt. Called when submit btn pressed
const provinceErrorHandling = () => {
    if (!provinceInput.validity.valid) {
        provinceError();
        } else {
            provinceErrorMessage.textContent = '';
        }
};

// Assesses validation criteria for zip/postal code field
const postalError = () => {
    if (postalInput.validity.valueMissing) {
        postalErrorMessage.textContent = 'Please enter your postal code';
    } else if (postalInput.validity.patternMismatch) {
        postalErrorMessage.textContent = 'Incorrect format (e.g., H2G 8H1)';
    }
};

// zip/postal code prompt. Called when submit btn pressed
const postalErrorHandling = () => {
    if (!postalInput.validity.valid) {
        postalError();
        } else {
            postalErrorMessage.textContent = '';
        }
};

// format for postal code

postalInput.addEventListener('keypress', (event) => {
    const postalLength = postalInput.value.length;
    const tempPostal = postalInput.value;
    if (postalLength === 3) {
        postalInput.value = tempPostal + ' ';
    } else if (postalLength === 6) {
        postalInput.value = postalInput.value.toUpperCase();
    } else {
        // do nothing
    }
});

// Assesses validation criteria for country field
const countryError = () => {
    if (countryInput.validity.valueMissing) {
        countryErrorMessage.textContent = 'Please enter your country';
    } else if (countryInput.validity.patternMismatch) {
        countryErrorMessage.textContent = 'Use caps for your country! (e.g., Canada)';
    } else {
        // do nothing
    }
};

// country prompt. Called when submit btn pressed
const countryErrorHandling = () => {
    if (!countryInput.validity.valid) {
        countryError();
        } else {
            countryErrorMessage.textContent = '';
        }
};

// Assesses validation criteria for email field
const emailError = () => {
    if (emailInput.validity.valueMissing) {
        emailErrorMessage.textContent = 'Please enter your email';
    } else if (emailInput.validity.typeMismatch) {
        emailErrorMessage.textContent = 'Not a valid email address';
    }
};

// email prompt. Called when submit btn pressed
const emailErrorHandling = () => {
    if (!emailInput.validity.valid) {
        emailError();
        } else {
            emailErrorMessage.textContent = '';
        }
};

// Assesses validation criteria for phone field
const phoneError = () => {
    if (phoneInput.validity.valueMissing) {
        phoneErrorMessage.textContent = 'Please enter your phone number';
    } else {
        // do nothing
    }
};

// formatting for phone field
phoneInput.addEventListener('keypress', (event) => {
    const phoneInputLength = phoneInput.value.length;
    const tempPhone = phoneInput.value;
    if (phoneInputLength === 0) {
        phoneInput.value = tempPhone + '(';
    } else if (phoneInputLength === 4) {
        phoneInput.value = tempPhone + ') ';
    } else if (phoneInputLength === 6) {
        phoneInput.value = tempPhone + ' ';
    } else if (phoneInputLength === 9) {
        phoneInput.value = tempPhone + '-';
    } else {
        // do nothing
    }
});

// phone prompt. Called when submit btn pressed
const phoneErrorHandling = () => {
    if (!phoneInput.validity.valid) {
        phoneError();
        } else {
            phoneErrorMessage.textContent = '';
        }
};

// Assesses validation criteria for username field
const usernameError = () => {
    if (usernameInput.validity.valueMissing) {
        usernameErrorMessage.textContent = 'Please enter your username';
    } else {
        // do nothing
    }
};

// username prompt. Called when submit btn pressed
const usernameErrorHandling = () => {
    if (!usernameInput.validity.valid) {
        usernameError();
        } else {
            usernameErrorMessage.textContent = '';
        }
};

// Assesses validation criteria for password1 field
const password1Error = () => {
    if (password1Input.validity.valueMissing) {
        password1ErrorMessage.textContent = 'Please enter your password';
    } else {
        // do nothing
    }
};

// password1 prompt. Called when submit btn pressed
const password1ErrorHandling = () => {
    if (!password1Input.validity.valid) {
        password1Error();
        } else {
            password1ErrorMessage.textContent = '';
        }
};

// Assesses validation criteria for password2 field
const password2Error = () => {
    if (password2Input.validity.valueMissing) {
        password2ErrorMessage.textContent = 'Please re-enter your password';
    } else if (password1Input.value != password2Input.value) {
        console.log('ran');
        password2ErrorMessage.textContent = 'Passwords do not match';
    }
};

const password2ErrorHandling = () => {
    if (!password2Input.validity.valid) {
        password2Error();
     } else if (password1Input.value != password2Input.value) {
        password2ErrorMessage.textContent = 'Passwords do not match';
     } else {
        password2ErrorMessage.textContent = '';
        console.log('error not found');
    }
};

// Runs all field validations on form submit
form.addEventListener('submit', (event) => {
    fullNameErrorHandling();
    dobErrorHandling();
    addressErrorHandling();
    unitNumberErrorHandling();
    cityErrorHandling();
    provinceErrorHandling();
    postalErrorHandling();
    countryErrorHandling();
    emailErrorHandling();
    phoneErrorHandling();
    usernameErrorHandling();
    password1ErrorHandling();
    password2ErrorHandling();
    event.preventDefault();
});
