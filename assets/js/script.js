

var searchedCity = document.getElementById('searchBar')
var inputText = $("#searchBar");

var fdayHumidity = [];
var fdayHigh = [];
var fdaylow = [];
var fdayConditions = [];




$('#searchButton').click(function (e) {
    e.preventDefault();

    var requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + searchedCity.value + '&units=imperial&appid=db2bc8e5baccdef1863d3f9f469cc4b2'
    var thisLat
    var thisLon;


    fetch(requestURL)
        .then(function (response) {
            if (response.ok) {
                return response.json()
            } else {
                alert('City ' + response.statusText)
            }
        })

        .then(function (data) {

           localStorage.setItem(searchedCity.value,searchedCity.value);
            
            $('#prevSearches').children().remove();

            let keys=Object.keys(localStorage);
            for(i=0;i<keys.length;i++){
            $('#prevSearches').append('<li>'+localStorage.getItem(keys[i]))
            }
            console.log(data)
            thisLat = data.coord.lat
            thisLon = data.coord.lon;
            console.log(data.coord.lat)
            console.log(data.coord.lon)


        })

        .then(function () {

            var requestURL2 = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + thisLat + '&lon=' + thisLon + '&units=imperial&appid=de4de53bbf62e4dc174f043136778a6f'

            fetch(requestURL2)
                .then(function (response) {

                    return response.json()

                })

                .then(function (data) {
                    console.log(data)

                    for (i = 0; i < 5; i++) {


                        let today = moment().add(i, 'days');
                        let condition = data.daily[i].weather[0].main;
                        let max = data.daily[i].temp.max;
                        let min = data.daily[i].temp.min;



                        let thisTemp = getTempLiteral(max, min, condition, today);
                        $('#weekdays').append(thisTemp);





                    }





                });

        });




});

function getTempLiteral(high, low, condition, today) {

    let thisTemp =
        `
    
    <div  class="card" style=" width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${searchedCity.value}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${today}</h6>
        <p>High : ${high} |  Low : ${low}</p>
        <p>Condition : ${condition}</p>
      
      </div>
    </div>


    `;

    return thisTemp;

}




