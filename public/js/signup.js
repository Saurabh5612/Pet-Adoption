const { post } = require("../../controllers");

$(document).ready(function() {
    var signUpForm = $("form#signup");
    var emailInput = $("input#signup_email");
    var passwordInput = $("input#signup_password");
  
    signUpForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        username: usernameInput.val().trim(),
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      // validate there's a username/email/password entered on submit //
      if (!userData.username || !userData.email || !userData.password) {
        return;
      }
      // If validated, run signUpUser //
      signUpUser(userData.username, userData.email, userData.password);
      usernameInput.val("");
      emailInput.val("");
      passwordInput.val("");
    });
  
    // Does a post to /api/signup - if successful redirect to the members dash
    function signUpUser(username, email, password) {
      $.post("/api/users", {
        method: "post", 
        username: username,
        email: email,
        password: password
      }).then(function(data) {
        window.location.replace(data);
      }).catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });