


var inputText = $("#searchBar");



$('#searchButton').click(function(e){
    e.preventDefault();
   
    $.ajax({
        
        type: "GET",
        url: "https:api.openweathermap.org/data/2.5/weather?q=SAN%20ANTONIO&appid=db2bc8e5baccdef1863d3f9f469cc4b2",
        dataType: 'jsonp',
        complete: function(data){
            weatherData=data.responseJSON;
            console.log(weatherData)
            console.log(inputText.val);
           
            
        
            
        },
       
           
        
    })
 
 });




