let chooseBtn = document.getElementById("choose"),
  receiveBtn = document.getElementById("receive"),
  text = document.getElementsByTagName("h2")[0],
  modal = document.querySelectorAll(".modal")[0],
  exit = document.querySelectorAll(".close")[0],
  name = document.getElementsByName("name")[0],
  phone = document.getElementsByName("phone")[0],
  mail = document.getElementsByName("mail")[0],
  message = document.getElementsByName("message")[0];

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

name.addEventListener("input", function () {
  message.value = `My name is ${name.value} `;
});

phone.addEventListener("input", function () {
  message.value = `My phone number is ${phone.value} `;
});

mail.addEventListener("input", function () {
  message.value = `My gmail is ${mail.value} `;
});
