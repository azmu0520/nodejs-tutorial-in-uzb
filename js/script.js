let chooseBtn = document.getElementById("choose"),
  receiveBtn = document.getElementById("receive"),
  text = document.getElementsByTagName("h2")[0],
  modal = document.querySelectorAll(".modal")[0];
exit = document.querySelectorAll(".close")[0];

function hover() {
  text.textContent = "All in All";
}
text.addEventListener("mouseenter", function () {
  text.textContent = "All in All";
});

text.addEventListener("mouseleave", function () {
  text.textContent = "All inclusive";
});

receiveBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

exit.addEventListener("click", function () {
  modal.style.display = "none";
});
