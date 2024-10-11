const showmenu = document.getElementById("menu")
const showul = document.querySelector("nav ul")

showmenu.addEventListener("click" ,() => {
    showul.classList.toggle("showmenu")
   })

showul.addEventListener("click",() => {
    showul.classList.toggle("showmenu")
})



const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;

// Function to hide all testimonials
function hideAllTestimonials() {
  testimonials.forEach(testimonial => {
    testimonial.classList.remove('active');
  });
}

// Function to show the current testimonial
function showCurrentTestimonial() {
  testimonials[currentIndex].classList.add('active');
}

// Event listener for the Next button
nextButton.addEventListener('click', () => {
  hideAllTestimonials();
  currentIndex = (currentIndex + 1) % testimonials.length; // Increment index and loop back if necessary
  showCurrentTestimonial();
});

// Event listener for the Previous button
prevButton.addEventListener('click', () => {
  hideAllTestimonials();
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length; // Decrement index and loop back
  showCurrentTestimonial();
});

// Initialize the first testimonial to be visible
showCurrentTestimonial();
