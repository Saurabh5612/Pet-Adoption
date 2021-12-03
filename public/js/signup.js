async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#signup-username").value.trim();
  const email = document.querySelector("#signup-email").value.trim();
  const password = document.querySelector("#signup-password").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users/signup", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { "Content-Type": "application/json" }
    });

    // check the response status
    if (response.ok) {
      console.log("success");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector(".signup-form").addEventListener("submit", signupFormHandler);





// $(document).ready(function() {

//     var signUpForm = $("form#signup");
//     var usernameInput = $("input#signup-username");
//     var emailInput = $("input#signup-email");
//     var passwordInput = $("input#signup-password");
  
//     signUpForm.on("submit", function(event) {
//       event.preventDefault();
//       var userData = {
//         username: usernameInput.val().trim(),
//         email: emailInput.val().trim(),
//         password: passwordInput.val().trim()
//       };
  
//       // validate there's a username/email/password entered on submit //
//       if (!userData.username || !userData.email || !userData.password) {
//         return;
//       }
//       // If validated, run signUpUser //
//       signUpUser(userData.username, userData.email, userData.password);
//       usernameInput.val("");
//       emailInput.val("");
//       passwordInput.val("");
//     });
  
//     // Does a post to /api/signup - if successful redirect to the members dash
//     function signUpUser(username, email, password) {
//       $.post("/api/users", {
//         username: username,
//         email: email,
//         password: password
//       }).then(function(data) {
//         window.location.replace(data);
//       }).catch(handleLoginErr);
//     }
  
//     function handleLoginErr(err) {
//       $("#alert .msg").text(err.responseJSON);
//       $("#alert").fadeIn(500);
//     }
// });

  