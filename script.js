document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let password = document.querySelector("#password").value.trim();
  let confirmPassword = document.querySelector("#confirmPassword").value.trim();

  if (password !== confirmPassword) {
    alert("Your passwords don't match.");
  }
});
