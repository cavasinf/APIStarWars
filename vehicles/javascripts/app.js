$( document ).ready(function() {

        $('#header').load(blocksFolderLocation+"/header.html");

        $.getJSON("https://swapi.co/api/vehicles/?format=json", function(data){
            // count: 37​
            // next: https://swapi.co/api/vehicles/?page=2&format=json
            // previous: null
            // results: Array(10)

            // "name": "Sand Crawler",
            // "model": "Digger Crawler",
            // "manufacturer": "Corellia Mining Corporation",
            // "cost_in_credits": "150000",
            // "length": "36.8",
            // "max_atmosphering_speed": "30",
            // "crew": "46",
            // "passengers": "30",
            // "cargo_capacity": "50000",
            // "consumables": "2 months",
            // "vehicle_class": "wheeled",
            // "pilots": [],
            // "films": [],
            // "created": "2014-12-10T15:36:25.724000Z",
            // "edited": "2014-12-22T18:21:15.523587Z",
            // "url": "https://swapi.co/api/vehicles/4/"

            console.log(data.results);            CheckForMovingPage(data);

            $.each(data.results, function(index, value) {
                var gDiv = document.createElement( "div" );
                gDiv.className = "vehicle col-md-4 col-md-offset-4";

                var divName = document.createElement( "div" );
                divName.innerHTML = value.name;
                divName.className = "vehicle-name";
                gDiv.append(divName);

                var divModel = document.createElement( "div" );
                divModel.innerHTML = "Model : " + value.model;
                divModel.className = "vehicle-model";
                gDiv.append(divModel);

                var divPrice = document.createElement( "div" );
                divPrice.innerHTML = "Price : " + (value.cost_in_credits).toLocaleString('en-en') + " $";
                divPrice.className = "vehicle-price";
                gDiv.append(divPrice);

                var divPassenger = document.createElement( "div" );
                divPassenger.innerHTML = "Passenger max : " + value.passengers;
                divPassenger.className = "vehicle-passenger";
                gDiv.append(divPassenger);

                var divLenght = document.createElement( "div" );
                divLenght.innerHTML = "Lenght : " + value.length;
                divLenght.className = "vehicle-lenght";
                gDiv.append(divLenght);

                var divManufacturer = document.createElement( "div" );
                divManufacturer.innerHTML = "Manufacturer : " + value.manufacturer;
                divManufacturer.className = "vehicle-manufacturer";
                gDiv.append(divManufacturer);

                var divClass = document.createElement( "div" );
                divClass.innerHTML = "Class : " + value.vehicle_class;
                divClass.className = "vehicle-vehicle_class";
                gDiv.append(divClass);

                var divCrew = document.createElement( "div" );
                divCrew.innerHTML = "Crew : " + value.crew;
                divCrew.className = "vehicle-crew";
                gDiv.append(divCrew);

                var divCargo = document.createElement( "div" );
                divCargo.innerHTML = "Carego capacity : " + value.cargo_capacity;
                divCargo.className = "vehicle-cargo";
                gDiv.append(divCargo);

                if (value.pilots.length > 0) {
                    var divPilots = document.createElement( "div" );
                    divPilots.innerHTML = "Pilots : </br>";
                    divPilots.className = "vehicle-pilot-list";

                    $.each(value.pilots, function(index, value) {
                        var divPilot = document.createElement( "div" );

                        var rest = value.slice(0,-1);
                        var last = rest.substring(rest.lastIndexOf("/"), rest.length);
                        last = last.substr(1);

                        $.getJSON("https://swapi.co/api/people/"+last+"/?format=json", function(data) {

                                divPilot.innerHTML = "<a href= ../people/" + last + ">" + data.name + "";
                        });
                        divPilot.className = "vehicle-pilot";

                        divPilots.append(divPilot);
                    });

                    gDiv.append(divPilots);
                }

                if (value.films.length > 0) {
                    var divFilms = document.createElement( "div" );
                    divFilms.innerHTML = "Films : </br>";
                    divFilms.className = "vehicle-film-list";

                    $.each(value.films, function(index, value) {
                        var divFilm = document.createElement( "div" );

                        var rest = value.slice(0,-1);
                        var last = rest.substring(rest.lastIndexOf("/"), rest.length);
                        last = last.substr(1);

                        $.getJSON("https://swapi.co/api/films/"+last+"/?format=json", function(data) {

                            divFilm.innerHTML = "<a href= ../films/" + last + ">" + data.title + "";
                        });
                        divFilm.className = "vehicle-film";

                        divFilms.append(divFilm);
                    });

                    gDiv.append(divFilms);
                }

                $(".vehicle-list").append(gDiv);
            });
        });


    $('#footer').load(blocksFolderLocation+"/footer.html");

    $('.loader').addClass("fadeOut")

    setTimeout(
        function()
        {
            $('.loader').css("display", "none");
        }, 3000);

});

// window load
$(document).load(function(){
    alert('Le chargement de la page web est terminé');
});