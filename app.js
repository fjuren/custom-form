// signature purpose
// SOLID

const form = document.getElementsByTagName('form')[0];

const fullNameInput = document.querySelector('input#fName');
const fullNameErrorMessage = document.querySelectorAll('span.error')[0];

const dobInput = document.querySelector('input#dob');
const dobErrorMessage = document.querySelectorAll('span.error')[1];

// -> String
// Assesses validation criteria for full name field
const fullNameError = () => {
    if (fullNameInput.validity.valueMissing) {
        fullNameErrorMessage.textContent = 'Please enter your first and last name';
    } else if (fullNameInput.validity.patternMismatch) {
        fullNameErrorMessage.textContent = 'Look at the example for proper format (E.g., John Smith)';
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
        dobErrorMessage.textContent = 'Please provide your date of birth';
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

// Runs all field validations on form submit
form.addEventListener('submit', (event) => {
    fullNameErrorHandling();
    dobErrorHandling();
    event.preventDefault();
});
