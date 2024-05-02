document.querySelector(".icon").addEventListener("click", function() {
  var slidingbar = document.querySelector(".slidingbar");
  var slidingbarLeft = window.getComputedStyle(slidingbar).getPropertyValue("left");
  if (slidingbarLeft === "-300px") {
      slidingbar.style.left = "0px";
  } else {
      slidingbar.style.left = "-300px";
  }
});


function HeightFinder() {
  var navbarHeight = document.querySelector('.navbar').offsetHeight;
  var musicbarHeight = document.querySelector('.musicbar').offsetHeight;
  
  document.documentElement.style.setProperty('--navbar-height', navbarHeight + 'px');
  document.documentElement.style.setProperty('--musicbar-height', musicbarHeight + 'px');
}

HeightFinder();