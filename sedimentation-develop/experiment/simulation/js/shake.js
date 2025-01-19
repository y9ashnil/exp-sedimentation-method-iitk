function shakeVessel() {
  var vessel = document.querySelector(".pipette");
  var duration = 1000; // Duration of the shake animation in milliseconds
  let start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;

    // Calculate the horizontal position of the vessel based on the progress
    var x = Math.sin(progress / 20) * 5;

    vessel.style.transform = "rotate(" + x + "deg)";

    if (progress < duration) {
      // Continue the animation until the duration is reached
      window.requestAnimationFrame(step);
    } else {
      // Animation completed, reset the vessel position
      vessel.style.transform = "rotate(0)";
    }
  }

  window.requestAnimationFrame(step);
}

// Shake the vessel on button click
var shakeButton = document.createElement("button");
shakeButton.textContent = "Shake";
shakeButton.addEventListener("click", shakeVessel);
document.body.appendChild(shakeButton);

// place the cap on the pippete on button click
var shakeButton = document.createElement("button");
shakeButton.textContent = "cap";
// shakeButton.addEventListener("click", moveCap);
document.body.appendChild(shakeButton);

function moveCap(){
  var cap = document.querySelector(".cap");
  let capY = 0;
  let start = null;
}
