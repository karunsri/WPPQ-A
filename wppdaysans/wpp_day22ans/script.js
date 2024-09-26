// Write a JavaScript program to create a dropdown menu that shows and hides its options when clicked.

const dropdownButton = document.querySelector('.dropdown-button');
const dropdownOptions = document.querySelector('.dropdown-options');
  dropdownButton.addEventListener('click', () => {
  dropdownOptions.style.display = dropdownOptions.style.display === 'none' ? 'block' : 'none';
});
