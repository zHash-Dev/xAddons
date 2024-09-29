document.addEventListener('DOMContentLoaded', function() {
  // ScrollReveal initialization
  ScrollReveal().reveal('#addons', { delay: 400 });

  // Active nav item functionality
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      if (item.querySelector('a').getAttribute('href').slice(1) === current) {
        item.classList.add('active');
      }
      item.classList.remove("active");
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

// Home
ScrollReveal().reveal('#home', {
  origin: 'left',
  duration: 2000,
  distance: '10%',
  reset: true
})

// Donate
ScrollReveal().reveal('#donate', {
  scale: 1.2,
  origin: 'left',
  duration: 2000,
  distance: '10%',
  reset: true
})

// Donate Content
ScrollReveal().reveal('#donate-content', {
  scale: 1.2,
  origin: 'left',
  duration: 2000,
  distance: '10%',
  reset: true
})

// Donate Item
ScrollReveal().reveal('.donate-item', {
  scale: 1.2,
  origin: 'top',
  duration: 2000,
  distance: '20%',
  reset: true
})

//Add-on
ScrollReveal().reveal('.add-on', {
  delay: 10,
  origin: 'top',
  duration: 1500,
  distance: '10%',
})

// Social Button
ScrollReveal().reveal('#home .social-buttons', {
  scale: 1.2,
  origin: 'top',
  duration: 2000,
  distance: '50%',
  reset: true
})