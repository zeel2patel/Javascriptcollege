//Patel Haniben Maheshkumar

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(function(item) {
  const question = item.querySelector('h3');
  const icon = document.createElement('span');
  icon.classList.add('icon');
  icon.innerHTML = '+';

  question.appendChild(icon);

  question.addEventListener('click', function() {
    // Toggle active class on clicked FAQ item
    item.classList.toggle('active');

    // Change plus/minus icon based on active class
    if (item.classList.contains('active')) {
      icon.innerHTML = '-';
    } else {
      icon.innerHTML = '+';
    }
  });
});
