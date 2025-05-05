// Automatic Slideshow - change image every 4 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);    
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

const button = document.getElementById('incrementBtn');
const countSpan = document.getElementById('count');
let count = 0;

//L/D Modes

button.addEventListener('click', () => {
    count++;
    countSpan.textContent = count;
  });
  const toggleButton = document.getElementById('toggleButton');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  document.body.classList.remove('light-mode');
  toggleButton.textContent = 'Switch to Light Mode';
} else {
  document.body.classList.add('light-mode');
  document.body.classList.remove('dark-mode');
  toggleButton.textContent = 'Switch to Dark Mode';
}

toggleButton.addEventListener('click', () => {
  if (document.body.classList.contains('light-mode')) {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
    toggleButton.textContent = 'Switch to Light Mode';
  } else {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    localStorage.setItem('theme', 'light');
    toggleButton.textContent = 'Switch to Dark Mode';
  }
});

window.addEventListener('load', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    const content = document.querySelector('.content');
  
    // Fade out the loading screen
    loadingScreen.style.opacity = '0';
  
    // After fade out, hide loading screen and show content
    setTimeout(() => {
      loadingScreen.style.display = 'none';
      content.style.display = 'block';
    }, 1000); // matches CSS transition duration
  });

  // When the user clicks anywhere outside of the modal, close it
const modalIds = ['preModal1', 'preModal2', 'preModal3', 'preModal4', 'preModal5', 'preModal6', 'preModal7', 'preModal8', 'midModal1' ,'midModal2' ,'midModal3' ,'midModal4' ,'midModal5' ,'midModal6' ,'midModal7' ,'midModal8' ,'midModal9' ,'finModal1' ,'finModal2' ,'finModal3' ,'finModal4'];
const modals = modalIds.map(id => document.getElementById(id));

window.onclick = function(event) {
modals.forEach(modal => {
if (event.target === modal) {
  modal.style.display = 'none';
}
});
}
