$( document ).ready(function() {

        $('#header').load(blocksFolderLocation+"/header.html");

        $.getJSON("https://swapi.co/api/people/?format=json", function(data){
            // count	87
            // next	"https://swapi.co/api/people/?page=2&format=json"
            // previous	null
            // results

            // name	"Luke Skywalker"
            // height	"172"
            // mass	"77"
            // hair_color	"blond"
            // skin_color	"fair"
            // eye_color	"blue"
            // birth_year	"19BBY"
            // gender	"male"
            // homeworld	"https://swapi.co/api/planets/1/"
            // "films": [],
            // "species": [],
            // "vehicles": [],
            // "starships": []

                console.log(data.results);

            $.each(data.results, function(index, value) {
                console.log(index)
                var gDiv = document.createElement( "div" );
                gDiv.className = "people col-md-4 col-md-offset-4";

                var divName = document.createElement( "div" );
                divName.innerHTML = value.name;
                divName.className = "people-name";
                gDiv.append(divName);

                var divGender = document.createElement( "div" );
                divGender.innerHTML = "Gender : "+value.gender;
                divGender.className = "people-gender";
                gDiv.append(divGender);

                var divHeight = document.createElement( "div" );
                divHeight.innerHTML = "Height : "+value.height;
                divHeight.className = "people-height";
                gDiv.append(divHeight);

                var divMass = document.createElement( "div" );
                divMass.innerHTML = "Mass : "+value.mass;
                divMass.className = "people-mass";
                gDiv.append(divMass);

                var divHair_color = document.createElement( "div" );
                divHair_color.innerHTML = "Hair color : " + value.hair_color;
                divHair_color.className = "people-hair_color";
                gDiv.append(divHair_color);

                var divSkin_color = document.createElement( "div" );
                divSkin_color.innerHTML = "Skin color : " + value.skin_color;
                divSkin_color.className = "people-skin_color";
                gDiv.append(divSkin_color);

                var divEye_color = document.createElement( "div" );
                divEye_color.innerHTML = "Eye color : " + value.eye_color;
                divEye_color.className = "people-eye_color";
                gDiv.append(divEye_color);

                var divBirth_year = document.createElement( "div" );
                divBirth_year.innerHTML = "Birth year : " + value.birth_year;
                divBirth_year.className = "people-birth_year";
                gDiv.append(divBirth_year);

                var divHomeworld = document.createElement( "div" );
                var rest = value.homeworld.slice(0,-1);
                var last = rest.substring(rest.lastIndexOf("/"), rest.length);
                last = last.substr(1);
                $.getJSON("https://swapi.co/api/planets/"+last+"/?format=json", function(data) {
                    divHomeworld.innerHTML = "Homeworld : <a href= ../planets/" + last + ">" + data.name + "";
                });
                divHomeworld.className = "people-homeworld";
                gDiv.append(divHomeworld);

                if (value.films.length > 0) {
                    var divFilms = document.createElement( "div" );
                    divFilms.innerHTML = "Films : </br>";
                    divFilms.className = "people-film-list";

                    $.each(value.films, function(index, value) {
                        var divFilm = document.createElement( "div" );

                        var rest = value.slice(0,-1);
                        var last = rest.substring(rest.lastIndexOf("/"), rest.length);
                        last = last.substr(1);

                        $.getJSON("https://swapi.co/api/films/"+last+"/?format=json", function(data) {

                            divFilm.innerHTML = "<a href= ../films/" + last + ">" + data.title + "";
                        });
                        divFilm.className = "people-film";

                        divFilms.append(divFilm);
                    });

                    gDiv.append(divFilms);
                }

                if (value.species.length > 0) {
                    var divSpecies = document.createElement( "div" );
                    divSpecies.innerHTML = "Species : </br>";
                    divSpecies.className = "people-specie-list";

                    $.each(value.species, function(index, value) {
                        var divSpecie = document.createElement( "div" );

                        var rest = value.slice(0,-1);
                        var last = rest.substring(rest.lastIndexOf("/"), rest.length);
                        last = last.substr(1);
                        console.log("https://swapi.co/api/species/"+last+"/?format=json")
                        $.getJSON("https://swapi.co/api/species/"+last+"/?format=json", function(data) {

                            divSpecie.innerHTML = "<a href= ../species/" + last + ">" + data.name + "";
                        });
                        divSpecie.className = "people-film";

                        divSpecies.append(divSpecie);
                    });

                    gDiv.append(divSpecies);
                }

                if (value.vehicles.length > 0) {
                    var divVehicles = document.createElement( "div" );
                    divVehicles.innerHTML = "Vehicles : </br>";
                    divVehicles.className = "people-vehicle-list";

                    $.each(value.vehicles, function(index, value) {
                        var divVehicle = document.createElement( "div" );

                        var rest = value.slice(0,-1);
                        var last = rest.substring(rest.lastIndexOf("/"), rest.length);
                        last = last.substr(1);

                        $.getJSON("https://swapi.co/api/vehicles/"+last+"/?format=json", function(data) {

                            divVehicle.innerHTML = "<a href= ../vehicles/" + last + ">" + data.name + "";
                        });
                        divVehicle.className = "people-vehicle";

                        divVehicles.append(divVehicle);
                    });

                    gDiv.append(divVehicles);
                }

                if (value.starships.length > 0) {
                    var divStarships = document.createElement( "div" );
                    divStarships.innerHTML = "Starships : </br>";
                    divStarships.className = "people-starship-list";

                    $.each(value.starships, function(index, value) {
                        var divStarship = document.createElement( "div" );

                        var rest = value.slice(0,-1);
                        var last = rest.substring(rest.lastIndexOf("/"), rest.length);
                        last = last.substr(1);

                        $.getJSON("https://swapi.co/api/starships/"+last+"/?format=json", function(data) {

                            divStarship.innerHTML = "<a href= ../starships/" + last + ">" + data.name + "";
                        });
                        divStarship.className = "people-starship";

                        divStarships.append(divStarship);
                    });

                    gDiv.append(divStarships);
                }

                $(".people-list").append(gDiv);
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