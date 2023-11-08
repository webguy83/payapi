const form = document.getElementById('contactForm') as HTMLFormElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const messageInput = document.getElementById('message') as HTMLTextAreaElement;

form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Validate Name, Email, and Message fields
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  const isValidName = validateField(nameInput, nameValue);
  const isValidEmail = validateField(emailInput, emailValue, isValidEmailFormat(emailValue));
  const isValidMessage = validateField(messageInput, messageValue);

  if (isValidName && isValidEmail && isValidMessage) {
    // Form is valid, show thank you message and clear form
    const thankYouMessage = `Thank you ${nameValue} for your submission.`;
    alert(thankYouMessage);
    clearForm();
  }
});

function validateField(input: HTMLInputElement | HTMLTextAreaElement, value: string, isValid: boolean = true): boolean {
  const errorElement = input.nextElementSibling as HTMLElement;

  if (!value && isValid) {
    errorElement.textContent = "This field can't be empty";
    return false;
  }

  if (!isValid) {
    errorElement.textContent = 'Please use a valid format';
    return false;
  }

  errorElement.textContent = ''; // Clear error message if valid
  return true;
}

function isValidEmailFormat(email: string): boolean {
  // Basic email format validation using regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function clearForm() {
  form.reset();
  clearErrorMessages(); // Clear all error messages
}

function clearErrorMessages() {
  const errorElements = document.querySelectorAll('.input-error-txt');
  errorElements.forEach((errorElement) => {
    errorElement.textContent = '';
  });
}

// Add input event listeners to clear specific error messages when user starts typing
nameInput.addEventListener('input', () => clearErrorMessagesForField(nameInput));
emailInput.addEventListener('input', () => clearErrorMessagesForField(emailInput));
messageInput.addEventListener('input', () => clearErrorMessagesForField(messageInput));

function clearErrorMessagesForField(input: HTMLInputElement | HTMLTextAreaElement) {
  const errorElement = input.nextElementSibling as HTMLElement;
  errorElement.textContent = '';
}
