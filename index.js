function HeightFinder() {
  var navbarHeight = document.querySelector('.navbar').offsetHeight;
  var musicbarHeight = document.querySelector('.musicbar').offsetHeight;
  
  document.documentElement.style.setProperty('--navbar-height', navbarHeight + 'px');
  document.documentElement.style.setProperty('--musicbar-height', musicbarHeight + 'px');
}
HeightFinder();


function WidthFinder() {
  var slidingbarWidth = document.querySelector('.slidingbar').offsetWidth;
  var negSlidingbarWidth = slidingbarWidth * -1;

  document.documentElement.style.setProperty('--SBWidth', slidingbarWidth + 'px');
  document.documentElement.style.setProperty('--NSBWidth', negSlidingbarWidth + 'px');
}
WidthFinder();


document.querySelector(".icon").addEventListener("click", function() {
  var slidingbar = document.querySelector(".slidingbar");
  var slidingbarLeft = window.getComputedStyle(slidingbar).getPropertyValue("left");
  
  if (slidingbarLeft === "0px") {
    slidingbar.style.left = `var(--NSBWidth)`;
  } else {
    slidingbar.style.left = "0px";
  }
});
