// Newsletter form success message
document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".newsletter form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = document.getElementById("newsletter-success");
      if (msg) {
        msg.style.display = "block";
      }
      form.reset();
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const nextButton = document.querySelector(".carousel-button.next");
  const prevButton = document.querySelector(".carousel-button.prev");

  let currentIndex = 0;

  // Set initial position
  updateSlidePosition();

  // Next button click handler
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidePosition();
  });

  // Previous button click handler
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlidePosition();
  });

  function updateSlidePosition() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
});
