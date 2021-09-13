const node = document.getElementById("path");
node.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    location.href = node.value;
  }
});

function goFullScreenYoutube() {
    location.href='https://www.youtube.com/redirect?q=http://127.0.0.1:3000/';
}
