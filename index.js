document.querySelector(".icon").addEventListener("click", function() {
    var slidingbar = document.querySelector(".slidingbar");
    if (slidingbar.style.left === "-300px") {
      slidingbar.style.left = "0px"; // Slide in
    } else {
      slidingbar.style.left = "-300px"; // Slide out
    }
  });
  