// Step 1: Remove the <main> element with id 'main'
const main = document.querySelector('main#main');
if (main) {
  main.remove();
}

// Step 2: Create an <h1> element and assign it to the newHeader variable
var newHeader = document.createElement('h1'); // Use 'var' to define 'newHeader' globally

// Step 3: Set the id of the <h1> element to 'victory'
newHeader.id = 'victory';

// Step 4: Set the innerHTML of the <h1> element to 'YOUR-NAME is the champion'
newHeader.innerHTML = 'Abdirahman is the champion'; // Replace 'YOUR-NAME' with your actual name

// Append the newHeader to the body or any other container if necessary
document.body.appendChild(newHeader);
