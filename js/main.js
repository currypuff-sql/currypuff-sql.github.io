// 4.1 AOS init
AOS.init({
  duration: 800,
  once: true
});

// 4.2 Rellax parallax init (speed negative = slower scroll)
var rellax = new Rellax('.parallax-bg', {
  speed: -2,
  center: true
});
