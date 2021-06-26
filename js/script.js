let chooseBtn = document.getElementById("choose"),
  receiveBtn = document.getElementById("receive"),
  text = document.getElementsByTagName("h2")[0];

text.addEventListener("mouseenter", function () {
  text.textContent = "All in All";
});
