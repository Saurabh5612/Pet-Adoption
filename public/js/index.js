$(document).ready(function() {

    console.log("it has begun");

    $("#choices").show();
    $("#realpetscards").hide();
    $("#fantasypetscards").hide();


    $("#realpetsbutton").on("click", function() {
        console.log("Real Pets Chosen");
        $("#choices").hide();
        $("#realpetscards").show();
        $("#fantasypetscards").hide();    
    });

    $("#fantasypetsbutton").on("click", function() {
        console.log("Fantasy Pets chosen");
        $("#choices").hide();
        $("#realpetscards").hide();
        $("#fantasypetscards").show();
    });


    $("#adoptable").on("click", function() {
        alert("this is where adoptable info should come up");
        });
    



}); //end document-ready-function