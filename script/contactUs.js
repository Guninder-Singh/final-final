const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(form);
  
  // Simulating a successful submission
  setTimeout(function() {
    form.reset();
    successMessage.style.display = 'block';
    successMessage.innerText = 'Message sent successfully.';
    errorMessage.style.display = 'none';
  }, 2000);
});
