// let password = document.querySelector("#password").value;
// let confirmPassword = document.querySelector("#confirmPassword").value;

// if (password != confirmPassword) {
//     alert("Your passwords don't match.");
// }

// document.getElementById("#myForm").onsubmit(function(e) {
//     e.preventDefault();
//  });

console.log('hi');

let password = document.querySelector("#password").value;
let confirmPassword = document.querySelector("#confirmPassword").value;

if (password != confirmPassword) {
  alert("Your passwords don't match.");
}

document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();
});
