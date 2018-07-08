$( document ).ready(function() {

        $('#header').load('/SourceTree/swapi/blocks/header.html');

        $.getJSON("https://swapi.co/api/starships/?format=json", function(data){
            // count: 37​
            // next: https://swapi.co/api/starships/?page=2&format=json
            // previous: null
            // results: Array(10)

            // MGLT: "40"
            // cargo_capacity: "250000000"
            // consumables: "6 years"
            // cost_in_credits: "1143350000"
            // created: "2014-12-15T12:31:42.547000Z"
            // crew: "279144"
            // edited: "2017-04-19T10:56:06.685592Z"
            // films: Array [ "https://swapi.co/api/films/2/", "https://swapi.co/api/films/3/" ]
            // hyperdrive_rating: "2.0"
            // length: "19000"
            // manufacturer: "Kuat Drive Yards, Fondor Shipyards"
            // max_atmosphering_speed: "n/a"
            // model: "Executor-class star dreadnought"
            // name: "Executor"
            // passengers: "38000"
            // pilots: Array []
            // starship_class: "Star dreadnought"
            // url: "https://swapi.co/api/starships/15/"

            console.log(data.results);

            $.each(data.results, function(index, value) {
                var gDiv = document.createElement( "div" );
                gDiv.className = "ship col-md-4 col-md-offset-4";

                var divName = document.createElement( "div" );
                divName.innerHTML = value.name;
                divName.className = "ship-name";
                gDiv.append(divName);

                var divModel = document.createElement( "div" );
                divModel.innerHTML = "Model : " + value.model;
                divModel.className = "ship-model";
                gDiv.append(divModel);

                var divPrice = document.createElement( "div" );
                divPrice.innerHTML = "Price : " + (value.cost_in_credits).toLocaleString('en-en') + " $";
                divPrice.className = "ship-price";
                gDiv.append(divPrice);

                var divPassenger = document.createElement( "div" );
                divPassenger.innerHTML = "Passenger max : " + value.passengers;
                divPassenger.className = "ship-passenger";
                gDiv.append(divPassenger);

                var divLenght = document.createElement( "div" );
                divLenght.innerHTML = "Lenght : " + value.length;
                divLenght.className = "ship-lenght";
                gDiv.append(divLenght);

                var divManufacturer = document.createElement( "div" );
                divManufacturer.innerHTML = "Manufacturer : " + value.manufacturer;
                divManufacturer.className = "ship-manufacturer";
                gDiv.append(divManufacturer);

                var divClass = document.createElement( "div" );
                divClass.innerHTML = "Class : " + value.starship_class;
                divClass.className = "ship-class";
                gDiv.append(divClass);

                var divCargo = document.createElement( "div" );
                divCargo.innerHTML = "Carego capacity : " + value.cargo_capacity;
                divCargo.className = "ship-cargo";
                gDiv.append(divCargo);

                if (value.pilots.length > 0) {
                    var divPilots = document.createElement( "div" );
                    divPilots.innerHTML = "Pilots : </br>";
                    divPilots.className = "ship-pilot-list";

                    $.each(value.pilots, function(index, value) {
                        var divPilot = document.createElement( "div" );

                        var rest = value.slice(0,-1);
                        var last = rest.substring(rest.lastIndexOf("/"), rest.length);
                        last = last.substr(1);

                        $.getJSON("https://swapi.co/api/people/"+last+"/?format=json", function(data) {

                                divPilot.innerHTML = "<a href= ../people/" + last + ">" + data.name + "";
                        });
                        divPilot.className = "ship-pilot";

                        divPilots.append(divPilot);
                    });

                    gDiv.append(divPilots);
                }

                if (value.films.length > 0) {
                    var divFilms = document.createElement( "div" );
                    divFilms.innerHTML = "Films : </br>";
                    divFilms.className = "ship-film-list";

                    $.each(value.films, function(index, value) {
                        var divFilm = document.createElement( "div" );

                        var rest = value.slice(0,-1);
                        var last = rest.substring(rest.lastIndexOf("/"), rest.length);
                        last = last.substr(1);

                        $.getJSON("https://swapi.co/api/films/"+last+"/?format=json", function(data) {

                            divFilm.innerHTML = "<a href= ../films/" + last + ">" + data.title + "";
                        });
                        divFilm.className = "ship-film";

                        divFilms.append(divFilm);
                    });

                    gDiv.append(divFilms);
                }

                $(".starship-list").append(gDiv);
            });
        });


    $('#footer').load('/SourceTree/swapi/blocks/footer.html');

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