fetch('src/data.json')
  .then(response => response.json())
  .then(data => {
    const song1Name = data.song1.name;
    const song1Img = data.song1.img;
    const song1NameElement = document.getElementById('song1Name');
    const song1ImgElement = document.getElementById('song1Img');
    song1NameElement.textContent = song1Name;
    song1ImgElement.setAttribute('src', song1Img);
    song1ImgElement.setAttribute('alt', song1Name);

    const song2Name = data.song2.name;
    const song2Img = data.song2.img;
    const song2NameElement = document.getElementById('song2Name');
    const song2ImgElement = document.getElementById('song2Img');
    song2NameElement.textContent = song2Name;
    song2ImgElement.setAttribute('src', song2Img);
    song2ImgElement.setAttribute('alt', song2Name);
})


function HeightFinder() {
  window.addEventListener('load', () => {
    var navbarHeight = document.querySelector('.navbar').offsetHeight;
    var musicbarHeight = document.querySelector('.musicbar').offsetHeight;
    var textHeight = document.querySelector('.song p').offsetHeight;
    var pointHeight = document.querySelector('.progressingbar').offsetHeight - (document.querySelector('.point').offsetHeight / 2);
  
    document.documentElement.style.setProperty('--navbar-height', navbarHeight + 'px');
    document.documentElement.style.setProperty('--musicbar-height', musicbarHeight + 'px');
    document.documentElement.style.setProperty('--text-height', textHeight + 'px');
    document.documentElement.style.setProperty('--point-height', pointHeight + 'px');
  });
}
HeightFinder();



function WidthFinder() {
  var rect = document.querySelector('.slidingbar').getBoundingClientRect();
  var tabWidth = rect.width;
  var negTabWidth = -tabWidth;

  document.documentElement.style.setProperty('--TabWidth', tabWidth + 'px');
  document.documentElement.style.setProperty('--NTabWidth', negTabWidth + 'px');
}


function PositionFinder() {
  var rect = document.querySelector('.volume').getBoundingClientRect();
  var rect2 = document.querySelector('.volumeparent').getBoundingClientRect();

  var volumePosition = rect.left;
  var volumeWidth = rect.width;
  var volumeParentWidth = rect2.width;
  var volumeParentPosition = volumePosition - ((volumeParentWidth - volumeWidth) / 2);
  
  document.documentElement.style.setProperty('--volume-left', volumePosition + 'px');
  document.documentElement.style.setProperty('--volume-width', volumeWidth + 'px');
  document.documentElement.style.setProperty('--volumeParent-positon', volumeParentPosition + 'px')
}
PositionFinder();


function ButtonToggle() { 
  document.getElementById('playbutton').addEventListener('click', function() {
    var iconElement = document.getElementById('playbutton');
    if (iconElement.classList.contains('fa-play')) {
      iconElement.classList.remove('fa-play');
      iconElement.classList.add('fa-pause');

      var a = 1;
      console.log(a);
    } else {
      iconElement.classList.remove('fa-pause');
      iconElement.classList.add('fa-play');
      
      var a = 0;
      console.log(a);
    }
  });
}
ButtonToggle();


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

  var a = 0;
  console.log(a);
};

