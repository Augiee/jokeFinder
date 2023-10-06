// Omar Eraky
// Unit 03 ASsignment
// IT302 Section 003 
// 10/6/2023
// oae26@njit.edu 

const displayError = error => {

    $("#view").empty();
    var span = $("<span></span>");
    span.attr("class", "error");
    span.text(error);
    $("#view").append(span);
    
    };

    
    function displayJoke(data){
        console.log(data);
        $("#view").empty();
        $("#view").append("<h2 id=\"jokeSetup\">" + data.setup +"</h2>");
        $("#view").append("<br>");
        $("#view").append("<h3 id=\"jokePunchline\">" + data.punchline +"</h3>");
        

    }


$(document).ready( ()=> {

   

    
   $("#load_button").click( () => {
    
    let input1 = $("#width").val();
   
    let input2 = $("#height").val();

    width = parseInt(input1);
    height = parseInt(input2);
  
    

    
    const url = `https://official-joke-api.appspot.com/random_joke`;
    
    fetch(url)
    .then(response => response.json())
    .then(json => displayJoke(json))
    .catch(error => displayError(error));


   


   })

})