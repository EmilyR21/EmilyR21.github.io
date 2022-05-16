const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the topnav
var topnav = document.getElementById("topnav");

// Get the offset position of the topnav
var sticky = topnav.offsetTop;

function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}
