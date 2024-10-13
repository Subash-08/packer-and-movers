


const testimonials = document.querySelectorAll('.testimonial');
const radioButtons = document.querySelectorAll('.testimonial-controls input[type="radio"]');
let currentIndex = 0;
let autoChange;

const updateTestimonial = (index) => {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.toggle('active', i === index);
  });
  radioButtons[index].checked = true;
};

const nextTestimonial = () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateTestimonial(currentIndex);
};

const prevTestimonial = () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial(currentIndex);
};

// Set interval for auto-switching testimonials
const startAutoChange = () => {
  autoChange = setInterval(nextTestimonial, 5000);
};

// Stop auto-switching testimonials
const stopAutoChange = () => {
  clearInterval(autoChange);
};

document.querySelector('.next').addEventListener('click', () => {
  nextTestimonial();
  stopAutoChange(); // Pause auto-switch on manual click
  startAutoChange(); // Restart auto-switch after
});

document.querySelector('.prev').addEventListener('click', () => {
  prevTestimonial();
  stopAutoChange(); // Pause auto-switch on manual click
  startAutoChange(); // Restart auto-switch after
});

// Handle radio button click
radioButtons.forEach((radio, index) => {
  radio.addEventListener('click', () => {
    currentIndex = index;
    updateTestimonial(currentIndex);
    stopAutoChange();
    startAutoChange();
  });
});

// Start auto transition when the page loads
startAutoChange();

