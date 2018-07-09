$( document ).ready(function() {

        $('#header').load(blocksFolderLocation+"/header.html");

        $.getJSON("https://swapi.co/api/planets/?format=json", function(data){
            // "count": 61,
            // "next": "https://swapi.co/api/planets/?page=2",
            // "previous": null,
            // "results": []

            // "name": "Alderaan",
            // "rotation_period": "24",
            // "orbital_period": "364",
            // "diameter": "12500",
            // "climate": "temperate",
            // "gravity": "1 standard",
            // "terrain": "grasslands, mountains",
            // "surface_water": "40",
            // "population": "2000000000",
            // "residents": [],
            // "films": [],
            // "created": "2014-12-10T11:35:48.479000Z",
            // "edited": "2014-12-20T20:58:18.420000Z",
            // "url": "https://swapi.co/api/planets/2/"

            console.log(data.results);

            $.each(data.results, function(index, value) {
                var gDiv = document.createElement( "div" );
                gDiv.className = "planet col-md-4 col-md-offset-4";

                var divName = document.createElement( "div" );
                divName.innerHTML = value.name;
                divName.className = "planet-name";
                gDiv.append(divName);

                var divPopulation = document.createElement( "div" );
                divPopulation.innerHTML = "Population : " + value.population;
                divPopulation.className = "planet-population";
                gDiv.append(divPopulation);

                var divDiameter = document.createElement( "div" );
                divDiameter.innerHTML = "Diameter : " +value.diameter;
                divDiameter.className = "planet-diameter";
                gDiv.append(divDiameter);

                var divTerrain= document.createElement( "div" );
                divTerrain.innerHTML = "Terrain : " +value.terrain;
                divTerrain.className = "planet-terrain";
                gDiv.append(divTerrain);

                var divClimate = document.createElement( "div" );
                divClimate.innerHTML = "Climate : " +value.climate;
                divClimate.className = "planet-climate";
                gDiv.append(divClimate);

                var divGravity = document.createElement( "div" );
                divGravity.innerHTML = "Gravity : " +value.gravity;
                divGravity.className = "planet-gravity";
                gDiv.append(divGravity);

                if (value.residents.length > 0) {
                    var divResidents = document.createElement( "div" );
                    divResidents.innerHTML = "Residents : </br>";
                    divResidents.className = "planet-resident-list";

                    $.each(value.residents, function(index, value) {
                        var divResident = document.createElement( "div" );

                        var rest = value.slice(0,-1);
                        var last = rest.substring(rest.lastIndexOf("/"), rest.length);
                        last = last.substr(1);

                        $.getJSON("https://swapi.co/api/people/"+last+"/?format=json", function(data) {

                            divResident.innerHTML = "<a href= ../people/" + last + ">" + data.name + "";
                        });
                        divResident.className = "planet-resident";

                        divResidents.append(divResident);
                    });

                    gDiv.append(divResidents);
                }

                if (value.films.length > 0) {
                    var divFilms = document.createElement( "div" );
                    divFilms.innerHTML = "Films : </br>";
                    divFilms.className = "planet-film-list";

                    $.each(value.films, function(index, value) {
                        var divFilm = document.createElement( "div" );

                        var rest = value.slice(0,-1);
                        var last = rest.substring(rest.lastIndexOf("/"), rest.length);
                        last = last.substr(1);

                        $.getJSON("https://swapi.co/api/films/"+last+"/?format=json", function(data) {

                            divFilm.innerHTML = "<a href= ../films/" + last + ">" + data.title + "";
                        });
                        divFilm.className = "planet-film";

                        divFilms.append(divFilm);
                    });

                    gDiv.append(divFilms);
                }

                $(".planet-list").append(gDiv);
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