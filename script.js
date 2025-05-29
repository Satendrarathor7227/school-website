function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

function submitForm(event) {
  event.preventDefault();
  alert("Thanks for contacting us! We'll get back to you soon.");
}
