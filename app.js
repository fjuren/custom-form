// signature purpose
// SOLID

const form = document.getElementsByTagName('form')[0];

const fullName = document.getElementById('fName');
const fullNameInput = document.querySelector('input#fName');
const fullNameErrorMessage = document.querySelectorAll('span.error')[0];

// Assesses validation criteria for full name field
const fullNameError = () => {
    if (fullName.validity.valueMissing) {
        fullNameErrorMessage.textContent = 'Please enter your first and last name. (E.g., John Smith)';
    } else if (fullName.validity.patternMismatch) {
        fullNameErrorMessage.textContent = 'Please enter your full name. (E.g., John Smith)';
        console.log('pattern mismatch');
    } else {
        console.log('do nothing');
    }
};

// Full name field prompt. Called when submit btn pressed
const fullNameErrorHandling = () => {
    if (!fullNameInput.validity.valid) {
        fullNameError();
    } else {
        fullNameErrorMessage.textContent = '';
    }
};

// Runs all field validations on form submit
form.addEventListener('submit', (event) => {
    fullNameErrorHandling();
    event.preventDefault();
});
