// Display on responsive mode 

const toggleButton = document.getElementsByClassName('toggleButton')[0]
const navbarLinks = document.getElementsByClassName('navLinks')[0]
const navBar = document.getElementsByClassName('navBar')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  navBar.classList.toggle('active');

})

// Make it more intelligent

//  => detect when a page is scrolling

let previousScrollPosition = 0;

const isScrollingDown = () => {
  let currentScrolledPosition = window.scrollY || window.pageYOffset;
  let scrollingDown;

  if (currentScrolledPosition > previousScrollPosition) {
    scrollingDown = true;
  } else {
    scrollingDown = false;
  }
  
  previousScrollPosition = currentScrolledPosition;
  return scrollingDown;

}

// toggle class and add CSS styling

const handleNavScroll = () => {
  if (isScrollingDown()) {
    navBar.classList.add('scroll-down');
    navBar.classList.remove('scroll-up')
  } else {
    navBar.classList.add('scroll-up');
    navBar.classList.remove('scroll-down')
  }
}

//Performance shit

var throttleTimer;

const throttle = (callback, time) => {
  if (throttleTimer) return;

  throttleTimer = true;
  setTimeout(() => {
    callback();
    throttleTimer = false;
  }, time);
};

const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

window.addEventListener("scroll", () => {
  if (mediaQuery && !mediaQuery.matches) {
    throttle(handleNavScroll, 250);
  }
});
