$(document).ready(function() {
    var topics = ["The Nanny", "Clueless", "Rugrats"];

// Giphy subject buttons. **FIXED**
function createBtns() {

    $("#buttons").empty();
    for (var i = 0; i < topics.length; i++) {
        var b = $("<button>");
        b.addClass("topic");
        b.attr("data-name", topics[i]);
        b.text(topics[i]);
        $("#buttons").append(b);
    }
}
    createBtns();

    $("#add-era").on("click", function(){

        var newEra = $("#era-input").val().trim();
        topics.push(newEra);
        createBtns();
    // function to display gifs **not working, http not working**
    function showGifs() {
        
        var second = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + second + "&limit=5&api_key=exOswkiLF8WPK8waIHmRr9HEwBjHNnkm";

        // ajax call
        $.ajax ({
            url: queryURL,
            method: "GET"
        })
        .then (function (response){
            console.log(response.data);

            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                var newDiv = $('<div>');
                var goGif = $("<img class = 'gif' data-state = 'animate'>");
                goGif.attr('src', results[i].images.fixed_width_url);
                goGif.attr("data-animate", results[i].images.fixed_width.url);
                

                // rating p tag 
                var gifRating = $("<p>")

                gifRating.text("Rated: PG-13 " + results[i].gifRating);

                console.log(gifRating);

                newDiv.prepend(goGif, gifRating);
                $("#90s").prepend(newDiv);
                console.log(response);
            }

            // function changeImg(){
            //     var imageStill = $(this).attr("data-still");
            //     var animateImg = $(this).attr("data-animate");
            //     var imgState = $(this).attr("data-state");

            //     if (state == "still"){

            //     }
            // }
        
        });
    }

    // call to function to show gifts 
    showGifs();
});
});