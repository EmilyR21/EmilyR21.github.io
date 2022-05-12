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

// Add the sticky class to the topnav when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    topnav.classList.add("sticky")
  } else {
    topnav.classList.remove("sticky");
  }
}

$(function() {
  $('.wrapper').click(function() {
      $('.wrapper').each(function() {
         $(this).css('z-index', 0); 
      });
      	$(this).css('z-index', 10); 
      	$(this).toggleClass('open');    
  }) 
})

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
