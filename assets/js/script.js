



 $.ajax({
    
    url: "https:api.openweathermap.org/data/2.5/weather?q=SAN%20ANTONIO&appid=db2bc8e5baccdef1863d3f9f469cc4b2",
    dataType: 'application/json',
    complete: function(data){
        console.log(data.responseText)
        console.log(data.status);// S1000
        console.log(data.description);// Success
        
        
    },
    success: function(data){
        alert(data)
    }
})


$('#searchButton').click(function(e){
    e.preventDefault();
    // Code goes here

    console.log("yay")
 });




