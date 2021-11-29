// get form inputs when submitted
$(document).on("submit", "form", function(event) {
    event.preventDefault();
    var $form = $(this);
    // var petId = $(this).data("pet-id") ;
    // var clientNameStr = "#client-name" + petId;

    // grab the form elements and save them in key:value pairs within an object
    var newAdoptReq = {
        clientName: $form.find("[name=client-name]").val().trim(),
        clientEmail: $form.find("[name=client-email]").val().trim(),
        clientPhone: $form.find("[name=client-phone]").val().trim(),
        clientMessage: $form.find("[name=client-message]").val().trim(),
        petId: $form.data("pet-id")
    };
    console.log("newAdoptReq = ");
    console.log(newAdoptReq);

    // send an AJAX POST-request with jQuery
    $.post("/api/adopt-form", newAdoptReq)
    // on success, run this callback
    .then(function(data) {
    // log the data we found
    console.log(data);
    // tell the user their message was sent with an alert window
    alert("Thank you! Your adoption request has been received. We'll get back to you within 3 business days. If you have any questions, please email us directly at adoptions@exampledomain.com.");
    });

});