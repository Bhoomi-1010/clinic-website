function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function submitForm() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  if (name && phone) {
    document.getElementById("message").textContent = "Thank you! We'll contact you soon.";
  } else {
    document.getElementById("message").textContent = "Please fill in all required fields.";
  }
}
