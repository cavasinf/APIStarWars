$( document ).ready(function() {

        $('#header').load('/SourceTree/swapi/blocks/header.html');

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

            console.log(data.results);

            $.each(data.results, function(index, value) {
                var gDiv = document.createElement( "div" );
                gDiv.className = "ship col-md-4 col-md-offset-4";

                var divHeight = document.createElement( "div" );
                divHeight.innerHTML = value.height;
                divHeight.className = "people-height";
                gDiv.append(divHeight);

                var divMass = document.createElement( "div" );
                divMass.innerHTML = value.mass;
                divMass.className = "people-mass";
                gDiv.append(divMass);

                var divHair_color = document.createElement( "div" );
                divHair_color.innerHTML = "Model : " + value.hair_color;
                divHair_color.className = "ship-hair_color";
                gDiv.append(divHair_color);

                var divSkin_color = document.createElement( "div" );
                divSkin_color.innerHTML = "Model : " + value.skin_color;
                divSkin_color.className = "ship-skin_color";
                gDiv.append(divSkin_color);

                var divEye_color = document.createElement( "div" );
                divEye_color.innerHTML = "Model : " + value.eye_color;
                divEye_color.className = "ship-eye_color";
                gDiv.append(divEye_color);

                var divEye_color = document.createElement( "div" );
                divEye_color.innerHTML = "Model : " + value.eye_color;
                divEye_color.className = "ship-eye_color";
                gDiv.append(divEye_color);

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