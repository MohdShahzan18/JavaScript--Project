(function () {
  emailjs.init("NiiiazGDhO1U7W14w");
})();

const btn = document.querySelector("button");

btn.addEventListener("click", function sendMail(e) {
  e.preventDefault();

  let fullName = document.getElementById("fullName").value.trim();
  let emailId = document.getElementById("email_id").value.trim();
  let message = document.getElementById("message").value.trim();

  const popup = document.getElementById("popup-message");
  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
  }, 2000);
  if (fullName === "" || emailId === "" || message === "") {
    popup.innerText = "Please fill all fields!!";
    popup.style.color = "black";
    popup.style.background = "orange";
    return;
  }

  let data = {
    from_name: fullName,
    email_id: emailId,
    message: message,
  };

  emailjs
    .send("service_dsykwtc", "template_fr9qc8x", data)
    .then(function (res) {
      popup.innerText = "Mail Sent Successfully";
      popup.style.color = "white";
      popup.style.background = "green";
    })
    .catch(function (error) {
      popup.innerText = "Failed to send mail: " + error;
      popup.style.color = "white";
      popup.style.background = "red";
    });
});
