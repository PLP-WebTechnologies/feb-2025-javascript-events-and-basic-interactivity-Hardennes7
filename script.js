// Creating a button that shows an alert when clicked:

let button=document.getElementById("click")
button.onclick=function()
{
    alert("this button has been clicked")
}

// hovering effect
const btn= document.getElementById("move");
btn.addEventListener("mouseover", () => {
  btn.style.backgroundColor = "lightgreen";
});
btn.addEventListener("mouseout", () => {
  btn.style.backgroundColor = "lightblue";
});
//  when a key is pressed
document.addEventListener("keydown", (e) => {
  document.getElementById("keyDisplay").innerText = `You pressed: ${e.key}`;
});

// double click effect

document.getElementById("secretbtn").addEventListener("dblclick", () => {
  alert("Secret unlocked!");
});

const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let index = 0;

function nextImage() {
  index = (index + 1) % images.length;
  document.getElementById("gallery").src = images[index];
}

// form validation
document.getElementById("myForm").addEventListener("submit", function (event) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMsg");

  let errors = [];

  if (name === "") errors.push("Name is required.");
  if (!email.includes("@")) errors.push("Invalid email format.");
  if (password.length < 8) errors.push("Password must be at least 8 characters.");

  if (errors.length > 0) {
    event.preventDefault(); // Prevent form submission
    errorMsg.innerText = errors.join(" ");
  }
});


// real time feedback 
document.getElementById("password").addEventListener("input", function () {
  if (this.value.length < 8) {
    this.style.borderColor = "red";
  } else {
    this.style.borderColor = "green";
  }
});

