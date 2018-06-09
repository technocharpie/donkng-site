
// Get the header
var navbar = document.getElementById("nav-bar");
// Get the offset position of the navbar
var sticky = navbar.offsetTop; 
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function sticky_navbar() {

  if (window.pageYOffset > sticky) 
  {
    navbar.classList.add("sticky");
  } 
  else 
  {
    navbar.classList.remove("sticky");
  }
}

