// Mobile nav toggle
const burger = document.querySelector('.burger');
const navlinks = document.querySelector('.navlinks');
if (burger){
  burger.addEventListener('click', ()=>{
    if (getComputedStyle(navlinks).display === 'flex') {
      navlinks.style.display = 'none';
    } else {
      navlinks.style.display = 'flex';
      navlinks.style.flexDirection = 'column';
      navlinks.style.gap = '10px';
    }
  });
}

// Demo buy button action
document.addEventListener('click', (e)=>{
  if (e.target.matches('[data-buy]')) {
    const name = e.target.getAttribute('data-name') || 'Product';
    alert(`Added "${name}" to cart ✅ (demo)`);
  }
});

// Contact form demo (no server)
const contactForm = document.getElementById('contactForm');
if (contactForm){
  contactForm.addEventListener('submit', (ev)=>{
    ev.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    if (!name || !email) {
      alert('Please fill name and email.');
      return;
    }
    alert('Thanks ' + name + '! Your message has been received. (demo)');
    contactForm.reset();
  });
}
