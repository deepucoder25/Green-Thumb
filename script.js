// 1. Initialize Swiper (Home Slider)
const swiper = new Swiper('.home-slider', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  speed: 800,
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

// 2. Toggle Mobile Menu
const mobileToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

mobileToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// 3. Countdown Timer for Deal Section
function startCountdown(durationInHours) {
  const countdownElement = document.getElementById('countdown');
  const endTime = new Date().getTime() + durationInHours * 60 * 60 * 1000;

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = endTime - now;

    if (distance <= 0) {
      countdownElement.innerHTML = "01:24:59:58";
      clearInterval(interval);
      return;
    }

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    countdownElement.innerHTML =
      `${String(days).padStart(2, '0')}:` +
      `${String(hours).padStart(2, '0')}:` +
      `${String(minutes).padStart(2, '0')}:` +
      `${String(seconds).padStart(2, '0')}`;
  }

  updateCountdown(); // Initial call
  const interval = setInterval(updateCountdown, 1000);
}

// Start countdown for 24 hours
startCountdown(24);

// 4. (Optional) Add to cart logic
// You can add a feature to increase cart count when "Buy" is clicked
const cartCountElement = document.querySelector('.cart-count');
const buyButtons = document.querySelectorAll('.buy-btn');

let cartCount = 0;

buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    cartCountElement.textContent = cartCount;
  });
});

