
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  
  const mailtoLink = `mailto:l_merdaci@ensta.edu.dz?subject=Nouveau message de ${name}&body=${message}`;

  window.location.href = mailtoLink;

  
  contactForm.reset();
});