function HeightFinder() {
  var navbarHeight = document.querySelector('.navbar').offsetHeight;
  var musicbarHeight = document.querySelector('.musicbar').offsetHeight;
  
  document.documentElement.style.setProperty('--navbar-height', navbarHeight + 'px');
  document.documentElement.style.setProperty('--musicbar-height', musicbarHeight + 'px');
}
HeightFinder();


function WidthFinder() {
  var tabWidth = document.querySelector('.options').offsetWidth;
  var negTabWidth = tabWidth * -1;

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
      slidingbar.style.left = `calc(var(--NTabWidth) - 30px)`;
    } else {
      slidingbar.style.left = "0px";
    }
  });
};
