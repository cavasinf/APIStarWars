$( document ).ready(function() {

        $('#header').load(blocksFolderLocation+"/header.html");

        $.getJSON("https://swapi.co/api/species/?format=json", function(data){
            // count: 37​
            // next: https://swapi.co/api/species/?page=2&format=json
            // previous: null
            // results: Array(10)

            // "name": "Hutt",
            // "classification": "gastropod",
            // "designation": "sentient",
            // "average_height": "300",
            // "skin_colors": "green, brown, tan",
            // "hair_colors": "n/a",
            // "eye_colors": "yellow, red",
            // "average_lifespan": "1000",
            // "homeworld": "https://swapi.co/api/planets/24/",
            // "language": "Huttese",
            // "people": [],
            // "films": [],
            // "created": "2014-12-10T17:12:50.410000Z",
            // "edited": "2014-12-20T21:36:42.146000Z",
            // "url": "https://swapi.co/api/species/5/"

            console.log(data.results);            CheckForMovingPage(data);

            $.each(data.results, function(index, value) {
                var gDiv = document.createElement( "div" );
                gDiv.className = "specie col-md-4 col-md-offset-4";

                var divName = document.createElement( "div" );
                divName.innerHTML = value.name;
                divName.className = "specie-name";
                gDiv.append(divName);

                var divClassification = document.createElement( "div" );
                divClassification.innerHTML = "Classification : " + value.classification;
                divClassification.className = "specie-classification";
                gDiv.append(divClassification);

                var divDesignation = document.createElement( "div" );
                divDesignation.innerHTML = "Designation : " + value.designation;
                divDesignation.className = "specie-designation";
                gDiv.append(divDesignation);

                var divLanguage = document.createElement( "div" );
                divLanguage.innerHTML = "Language : " + value.language;
                divLanguage.className = "specie-language";
                gDiv.append(divLanguage);

                var divAverage_height = document.createElement( "div" );
                divAverage_height.innerHTML = "Average height : " + value.average_height;
                divAverage_height.className = "specie-average_height";
                gDiv.append(divAverage_height);

                var divSkin_colors = document.createElement( "div" );
                divSkin_colors.innerHTML = "Skin colors : " + value.skin_colors;
                divSkin_colors.className = "specie-skin_colors";
                gDiv.append(divSkin_colors);

                var divHair_colors = document.createElement( "div" );
                divHair_colors.innerHTML = "Hair colors : " + value.hair_colors;
                divHair_colors.className = "specie-hair_colors";
                gDiv.append(divHair_colors);

                var divAverage_lifespan = document.createElement( "div" );
                divAverage_lifespan.innerHTML = "Average lifespan : " + value.average_lifespan;
                divAverage_lifespan.className = "specie-average_lifespan";
                gDiv.append(divAverage_lifespan);

                if (value.homeworld != "") {
                    var divHomeworld = document.createElement("div");
                    var rest = value.homeworld.slice(0, -1);
                    var last = rest.substring(rest.lastIndexOf("/"), rest.length);
                    last = last.substr(1);
                    $.getJSON("https://swapi.co/api/planets/" + last + "/?format=json", function (data) {
                        divHomeworld.innerHTML = "Homeworld : <a href= ../planets/" + last + ">" + data.name + "";
                    });
                    divHomeworld.className = "people-homeworld";
                    gDiv.append(divHomeworld);
                }

                $(".specie-list").append(gDiv);
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