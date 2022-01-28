// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// Select element
const moodAnswer = document.getElementById("mood-answer");
const one = document.getElementById("one");
const two = document.getElementById("two");
const receiver = document.getElementById("receiver");
const encouragement = document.getElementById("encouragement");
const arrayEl = [];

moodAnswer.addEventListener("click", function (event) {
  event = event || window.event;
  const target = event.target;
  const text = target.textContent;
  arrayEl.push(text);
  console.log(arrayEl);
  for (let i = 0; i < arrayEl.length; i++) {
    if (arrayEl.length > 1) {
      arrayEl.shift();
    }
    receiver.innerHTML = `<h2>${arrayEl[i]}</h2>`;
  }
  modal.style.display = "none";

  setTimeout(() => {
    if (arrayEl[0] === "🥱") {
      encouragement.innerHTML = `<h2>Go get Some coffee ☕</h2>`;
    }
    if (arrayEl[0] === "😎") {
      encouragement.innerHTML = `<h2>You are awesome! Kudos to you 🥳</h2>`;
    }
  }, 500);
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
