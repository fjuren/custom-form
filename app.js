// signature purpose
// SOLID

const form = document.getElementsByTagName('form')[0];

const fullName = document.getElementById('fName');
const fullNameErrorMessage = document.querySelectorAll('span.error')[0];

// Assesses validation criteria for full name field
const fullNameError = () => {
    if (fullName.validity.valueMissing) {
        fullNameErrorMessage.textContent = 'Please enter your first and last name';
    } else {
        console.log('you\'re fine');
    }
};

// calls fullNameError when validation fails
const fullNameErrorHandling = () => {
    if (!fullName.validity.valid) {
        fullNameError();
    } else {
        console.log('no error');
    }
};

// Runs all field validations on form submit
form.addEventListener('submit', (event) => {
    fullNameErrorHandling();
    event.preventDefault();
});
