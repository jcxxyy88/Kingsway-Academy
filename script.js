// Simple UI behavior: form submission (simulated), nav toggle, year
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('year').textContent = new Date().getFullYear();

  const navToggle = document.querySelector('.nav-toggle');
  navToggle && navToggle.addEventListener('click', function(){
    const nav = document.querySelector('.nav');
    if(nav.style.display === 'flex') nav.style.display = ''; 
    else nav.style.display = 'flex';
  });
});

function submitForm(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('formMessage');

  if(!name || !email){
    formMessage.textContent = 'Please provide your name and email.';
    formMessage.style.color = '#b45309';
    return false;
  }

  // Simulate a successful submission (replace with real endpoint as needed)
  formMessage.style.color = '#065f46';
  formMessage.textContent = 'Thanks! Your request has been sent. We will contact you shortly.';

  // Clear the form after a short delay
  setTimeout(() => {
    document.getElementById('contactForm').reset();
  }, 1200);

  return false;
}

function scrollToTop(){
  window.scrollTo({top:0,behavior:'smooth'});
}