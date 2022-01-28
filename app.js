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
const modalContent = document.getElementById("modal-content");
const one = document.getElementById("one");
const two = document.getElementById("two");
const receiver = document.getElementById("receiver");
const arrayEl = [];
modalContent.addEventListener("click", function (event) {
  event = event || window.event;
  const target = event.target;
  arrayEl.push(target);
  console.log(arrayEl);
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
