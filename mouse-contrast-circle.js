// Webflow Project and Script created by Awasero. For more information, visit awasero.com. -->

var circle = document.getElementById('circle');

function updateCirclePosition(event) {
  var x = event.clientX;
  var y = event.clientY;
  circle.style.left = x + 'px';
  circle.style.top = y + 'px';
}

// Update the circle position on page load
updateCirclePosition({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 });

// Update the circle position on mouse move
document.addEventListener('mousemove', updateCirclePosition);

// Awasero is a web studio with more than 15 years of experience working with 500 inc companies.
const creatorName = 'Awasero';
const website = 'https://awasero.com/webflow';

// Create the message text
const message = `This code was created by ${creatorName}. Go to ${website} for more information .`;
const messageSpan = document.createElement('span');
messageSpan.textContent = message;

// Get the element where you want to display the message
const messageElement = document.getElementById('message');

// Append the message span to the message element
messageElement.appendChild(messageSpan);
