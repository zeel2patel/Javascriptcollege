//Patel Haniben Maheshkumar

// Array of customer testimonials
const testimonials = [
  {
    name: "John Doe",
    image: "images/1.jpg",
    text: "The website is easy to navigate, and the search function makes it simple to find specific recipes based on keywords or ingredients. The recipe pages themselves are well-organized, with clear instructions and ingredient lists. The photos of the finished dishes are also helpful in giving an idea of what the end result should look like."
  },
  {
    name: "Alexaeder Lacob",
    image: "images/2.jpg",
    text: "I appreciate that users can leave reviews and ratings on the recipes they have tried, as this gives me an idea of how successful the recipe was for other people. The commenting system is also helpful in allowing users to ask questions or give tips and suggestions for modifications."
  },
  {
    name: "Celvin morce",
    image: "images/3.jpg",
    text: "This website provides tips and suggestions for modifying recipes based on dietary restrictions or personal preferences. This is helpful for customers who may need to make adjustments to a recipe to fit their specific needs and the filtering options for recipes is very convineint and helpful"
  },
  {
    name: "Jane Smith",
    image: "images/4.jpg",
    text: "The website offers a wide range of categories to choose from, making it easy to find recipes based on a particular cuisine, ingredient, or occasion. This is helpful for customers who are looking for specific types of recipes, and it makes browsing the site more enjoyable."
  },
  // Add more testimonials as needed
];

// Get testimonial slide and dots container
const testimonialSlide = document.querySelector('.testimonial-slide');
const dotContainer = document.querySelector('.testimonial-dots');

// Loop through testimonials array and create HTML elements for each testimonial
for (let i = 0; i < testimonials.length; i++) {
  const testimonial = testimonials[i];
  const html = `
    <div class="testimonial">
      <img src="${testimonial.image}" alt="${testimonial.name}">
      <p>"${testimonial.text}"</p>
      <cite>- ${testimonial.name}</cite>
    </div>
  `;
  testimonialSlide.innerHTML += html;
  dotContainer.innerHTML += `<span></span>`; // Create a dot for each testimonial
}

// Set up variables for slide index and dots
let slideIndex = 0;
const dots = dotContainer.querySelectorAll('span');

// Function to show the slide at the given index
function showSlide(index) {
  // Reset all slides to inactive, then set the active slide
  const slides = testimonialSlide.querySelectorAll('.testimonial');
  slides.forEach(function(slide) {
    slide.classList.remove('active');
  });
  slides[index].classList.add('active');

  // Set the corresponding dot to active
  dots.forEach(function(dot) {
    dot.classList.remove('active');
  });
  dots[index].classList.add('active');
}

// Call showSlide function with initial slide index
showSlide(slideIndex);

// Add event listeners to dots
dots.forEach(function(dot, index) {
  dot.addEventListener('click', function() {
    slideIndex = index; // Set the current slide index to the clicked dot index
    showSlide(slideIndex); // Show the corresponding slide
  });
});

// Function to loop through slides automatically at a given interval
function autoSlide() {
  if (slideIndex == testimonials.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  showSlide(slideIndex);
}

// Call autoSlide function every 5 seconds
setInterval(autoSlide, 5000);