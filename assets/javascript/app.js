$(document).ready(function() {
  var artists = ["Nipsey Hussle", "Beyonce", "John Legend", "Eminem", "Jay-Z"];

  // Giphy subject buttons. **FIXED**
  function createBtns(artist, classtoAdd, areaToAddTo) {
    $(areaToAddTo).empty();

    for (var i = 0; i < artists.length; i++) {
      var b = $("<button>");
      b.addClass(classtoAdd);
      b.attr("data-type", artists[i]);
      b.text(artists[i]);
      $(areaToAddTo).append(b);
    }
  }
  // createBtns();
  // to add new button via input field
  $(document).on("click", "#buttons", function() {
    $("#art-input").empty();
    var newType = $(this).data("artist");
    // var userEntry = $("#art-input").val();

    var queryURL =
      "http://api.giphy.com/v1/gifs/search?q=" +
      newType +
      "&api_key=tTETWxWCFtCap8A1x6SGveywbQDU1xkJ&limit=10";

    // ajax call
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      var results = response.data;
      console.log(response);

      for (var i = 0; i < results.length; i++) {
        var newDiv = $('<div class="new-artist">');

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var animate = results[i].images.fixed_height.url;
        var still = results[i].images.fixed_height_still.url;

        var artistImg = $("<img>");
        artistImg.attr("src", still);
        artistImg.attr("data-still", still);
        artistImg.attr("data-animate", animate);
        artistImg.attr("data-state", "still");
        artistImg.addClass("artist-images");

        newDiv.append(p);
        newDiv.append(artistImg);

        $("#artist").append(newDiv);
      }
    });
  });
  $(document).on("click", ".artist-image", function() {
    var state = $(this).attr("data-state");

    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });

  $("#add-art").on("click", function(event) {
    event.preventDefault();
    var newArtist = $("input")
      .eq(0)
      .val();

    if (newArtist.length > 2) {
      artists.push(newArtist);
    }

    createBtns(artists, "artist-button", "#buttons");
  });

  createBtns(artists, "artist-button", "#buttons");
});
