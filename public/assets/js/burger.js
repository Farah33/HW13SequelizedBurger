(function() {
    $("#burgerList").on("click", function(event) {
        var id = $(this).data("id");
        var newdevoured = $(this).data("newdevoured");

        var newdevouredState = {
            devoured: newdevoured
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newdevouredState
        }).then(

            function() {
                console.log("changed sleep to", newdevoured);

                location.reload();
            }
        );
    });

    $("#burgerList").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#ca").val().trim(),
            sleepy: $("[name=devoured]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});