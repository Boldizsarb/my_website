console.log("Hello World!");

////////// name animation //////////
const letters = document.querySelectorAll('.fade-in');
let delay = 0;

letters.forEach((letter) => {
  letter.style.animationDelay = delay + 's';
  delay += 0.1; // Adjust this value to control the delay between each letter
});

const letterr = document.querySelectorAll('.fade');

letterr.forEach((letter) => {
  letter.style.animationDelay = delay + 's';
  delay += 0.1; // Adjust this value to control the delay between each letter
});

////////// scroll animation //////////
const bubble = document.getElementById('buble');
const firstDiv = document.getElementById('first');

    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    let observer = new IntersectionObserver(function (entries) {
      let entry = entries[0];
      if (entry.isIntersecting) {
        bubble.style.opacity = '0';
        //bubble.style.display = 'none';
      } else {
        //bubble.style.display = 'block';
        bubble.style.opacity = '1';
        
      }
    }, options);

    observer.observe(firstDiv);