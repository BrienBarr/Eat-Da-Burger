// Function when the document is ready (i.e. all images and elements have loaded)
$(function() {
    // On click event listener when the button to devour a burger is clicked
    $(".devour").on("click", function(event) {
        event.preventDefault();

        // Get the id of the burger record to devour from the button's custom data-id attribute 
        var id = $(this).data("id");
        
        // Change the devoured state of the burger to true and store in newDevouredState
        var newDevouredState = {
            devoured: true
        };
        
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("Changed the devoured state to true")
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    
    // On submit event when the submit button of the add burger form is clicked
    $(".create-form").on("submit", function(event) {
        // preventDefault on a submit event.
        event.preventDefault();
        
        // Store the new burger name from the text input of the add burger form 
        // as the value for burger_name field and store as object in newBurger variable
        var newBurger = {
            burger_name: $("#burger").val().trim()
        };
        
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("Created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
  