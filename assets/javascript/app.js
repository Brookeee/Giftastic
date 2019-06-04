$(document).ready(function() {
    var topics = ["Movies", "Muisc", "TV", "Kid", "90s"];

// Giphy subject buttons. Create DRY code for buttons/Current code works but not DRY
function createBtns() {

    $("#buttons").empty();
    for (var i = 0; i < topics.length; i++) {
        var b = $("<button>");
        b.addClass("90s");
        b.attr("data-name", topics[i]);
        b.text(topics[i]);
        $("#buttons").append(b);
    };
};

    createBtns();

    // function displayGifs() {
    //     var topics = #(this).attr("data-era");
    //     var queryURL = ""
    // }
});