document.addEventListener('DOMContentLoaded', function () {
  const ctaButton = document.querySelector('.cta .btn');

  ctaButton.addEventListener('click', function (e) {
    e.preventDefault();
    alert('Thank you for your interest in Omnifood! We’ll contact you soon.');
  });

  // Testimonial carousel
  const testimonials = document.querySelectorAll('.testimonial');
  let current = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.remove('active');
      if (i === index) testimonial.classList.add('active');
    });
  }

  function nextTestimonial() {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
  }

  setInterval(nextTestimonial, 4000);
});
