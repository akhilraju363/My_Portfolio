(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();

function cancelForm() {
  document.getElementById("contactForm").reset();
}

function validateForm(event) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nameRegex.test(name)) {
    alert("Name should contain only letters and spaces.");
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  return true;
}
