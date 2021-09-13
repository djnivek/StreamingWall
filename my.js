const node = document.getElementById("path");
node.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    location.href = node.value;
  }
});

function goFullScreenYoutube() {
    location.href='https://www.youtube.com/redirect?q=https://djnivek.github.io/StreamingWall/index.html';
}
