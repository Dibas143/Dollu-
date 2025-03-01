let noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", function() {
  let x = Math.random() * (window.innerWidth - 100);
  let y = Math.random() * (window.innerHeight - 50);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

noBtn.addEventListener("click", function(event) {
  event.preventDefault();
  let x = Math.random() * (window.innerWidth - 100);
  let y = Math.random() * (window.innerHeight - 50);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

function loveAccepted() {
  // Show the romantic message
  document.getElementById("resultMessage").innerHTML = "😍 AWWI LOVE YOU TOO DALLU! ❤️";
  document.getElementById("resultMessage").style.display = "block";
  
  // Play the romantic song when "Ho" is clicked
  let song = document.getElementById("romanticSong");
  
  // Check if the audio is ready to play
  if (song.readyState >= 3) {
    song.play();
  } else {
    song.oncanplaythrough = function() {
      song.play();
    };
  }
}
