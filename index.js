function HeightFinder() {
  var navbarHeight = document.querySelector('.navbar').offsetHeight;
  var musicbarHeight = document.querySelector('.musicbar').offsetHeight;
  var rect = document.querySelector('.song p').getBoundingClientRect();
  var textHeight = rect.height;
  
  document.documentElement.style.setProperty('--navbar-height', navbarHeight + 'px');
  document.documentElement.style.setProperty('--musicbar-height', musicbarHeight + 'px');
  document.documentElement.style.setProperty('--text-height', textHeight + 'px');

  console.log(textHeight)
}
HeightFinder();


function WidthFinder() {
  var rect = document.querySelector('.slidingbar').getBoundingClientRect();
  var tabWidth = rect.width;
  var negTabWidth = -tabWidth;

  document.documentElement.style.setProperty('--TabWidth', tabWidth + 'px');
  document.documentElement.style.setProperty('--NTabWidth', negTabWidth + 'px');

  console.log(tabWidth);
}


window.onload = function() {

  WidthFinder();

  document.querySelector(".icon").addEventListener("click", function() {
    var slidingbar = document.querySelector(".slidingbar");
    var slidingbarLeft = window.getComputedStyle(slidingbar).getPropertyValue("left");
    
    if (slidingbarLeft === "0px") {
      slidingbar.style.left = `var(--NTabWidth)`;
    } else {
      slidingbar.style.left = "0px";
    }
  });
};