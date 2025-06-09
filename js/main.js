document.addEventListener('DOMContentLoaded', function() {
  // AOS init
  AOS.init({
    duration: 800,
    once: true
  });

  // Rellax init
  new Rellax('.rellax', {
    speed: -2,
    center: true
  });
});
