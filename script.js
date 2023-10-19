// script.js

// JavaScript to change text when the button is clicked
document.getElementById('changeTextButton').addEventListener('click', function () {
    document.getElementById('section2').querySelector('p').innerHTML = 'Text changed by JavaScript!';
});

// JavaScript to handle mouse events
const imageElement = document.getElementById('imageElement');
imageElement.addEventListener('mouseover', function () {
    imageElement.src = 'https://via.placeholder.com/200'; // Change image on mouseover
});
imageElement.addEventListener('mouseout', function () {
    imageElement.src = 'https://via.placeholder.com/150'; // Restore image on mouseout
});

// JavaScript to display a welcome message
window.alert('Welcome to my sample web page!');

// JavaScript to prompt user input
const userInput = prompt('Please enter your name:');
if (userInput) {
    alert('Hello, ' + userInput + '! Thanks for visiting our page.');
}
