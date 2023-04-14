$(window).on('load', function() {
    currentLocation();
    checkLocalStorage();

})
// API Key for all weather data 
var APIKey = "a81e4b0d75821cdde2c1ad5ea1dc05ad";
var q = "";
var now = moment();
//Date and time formate for header
var currentDate = now.format('DD/MM/YYYY');

//Setting the click function at ID search button
$("#search-button").on("click", function (event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();

    q = $("#city-input").val();
    if (q === '') {
        return alert('Please Enter Valid City Name ! ');
    }
    getWeather(q);

    saveToLocalStorage(q);
});

// Function to create Button for searched city 
function createRecentSearchBtn(q) {
    var newLi = $("<li>")
    var newBtn = $('<button>');
    //Adding Extra ID for Button to stop Creating Duplicate Button on Click
    newBtn.attr('id', 'extraBtn');
    newBtn.addClass("btn btn-secondary w-100");
    newBtn.text(q);
    newLi.append(newBtn)
    $("#historyList").prepend(newLi);
    //setting click function to prevent duplicate button
    $("#extraBtn").on("click", function () {
        var newQ = $(this).text();
        getWeather(newQ);
    });
}