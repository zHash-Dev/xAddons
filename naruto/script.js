document.addEventListener('DOMContentLoaded', function() {
  // Carousel 
  const slider = document.querySelector('.carousel-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slides = document.querySelectorAll('.carousel-slide img');
    const dotsContainer = document.querySelector('.carousel-dots');

    let counter = 0;
    const size = slides[0].clientWidth;
    const carrosselSpeed = 2000;
    let autoSlideInterval;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function updateSlider() {
        slider.style.transition = "transform 0.5s ease-in-out";
        slider.style.transform = `translateX(${-size * counter}px)`;
        updateButtons();
        updateDots();
    }

    function updateButtons() {
        prevBtn.style.display = counter === 0 ? 'none' : 'block';
        nextBtn.style.display = counter === slides.length - 1 ? 'none' : 'block';
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === counter);
        });
    }

    function slideNext() {
        if (counter < slides.length - 1) {
            counter++;
            updateSlider();
        } else {
            counter = 0;
            slider.style.transition = "none";
            slider.style.transform = `translateX(0)`;
            setTimeout(() => {
                slider.style.transition = "transform 0.5s ease-in-out";
                updateSlider();
            }, 10);
        }
    }

    function slidePrev() {
        if (counter > 0) {
            counter--;
            updateSlider();
        }
    }

    function goToSlide(index) {
        counter = index;
        updateSlider();
        resetAutoSlide();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(slideNext, carrosselSpeed);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    function resetAutoSlide() {
        stopAutoSlide();
        startAutoSlide();
    }

    nextBtn.addEventListener('click', () => {
        slideNext();0
        resetAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        slidePrev();
        resetAutoSlide();
    });

    updateSlider();
    startAutoSlide();

    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);
  
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add hover effect to addon card
    const addonCardAuthor = document.querySelector('.author-info')
    const addonCardMeta = document.querySelector('.addon-meta')
    addonCardAuthor.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });
    addonCardMeta.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    addonCardAuthor.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    addonCardMeta.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});