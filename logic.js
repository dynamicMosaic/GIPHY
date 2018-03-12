
var topics = []

$("#submitBtn").on("click", function (e) {
    e.preventDefault()
})


function getGiphy (searchTerm){
    var queryUrl = 'http://api.giphy.com/v1/gifs/search?q=' + searchTerm + "&api_key=pz33gJPdqW5TCFHzPg8rmN7dUXUvNsFf" + '&limit=10'
    
    $.ajax({
        url: queryUrl,
        method: 'GET'
    }).then(function(response) {
        // console.log(response);
        
        $("#display").append("<button>" + searchTerm + "</button>")
        
        console.log(searchTerm)
        
        // console.log(response.name)
    });
    
}
getGiphy ()

var searchTerm = $("#submitBtn").val()


// Query URL
    var searchTerm = ""
    var gifRating = ""
    var xhr = $.get('' + searchTerm + "&api_key=" + authKey + '&limit=10');
    xhr.done(function(data) { console.log("success got data", data); });


// $().on("click", function(e)


// // )
//     var animalArr = [cat, dog, falcon, monkey]
//     var topics = []
//     for (i = 0; i < topics.length; i++) {
//         $(this).append(".container")
//     }
