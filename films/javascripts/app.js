$( document ).ready(function() {

        $('#header').load(blocksFolderLocation+"/header.html");

        $.getJSON("https://swapi.co/api/films/?format=json", function(data){
            // "count": 7,
            // "next": null,
            // "previous": null,
            // "results": []

            // "title": "A New Hope",
            // "episode_id": 4,
            // "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy...."
            // "director": "George Lucas",
            // "producer": "Gary Kurtz, Rick McCallum",
            // "release_date": "1977-05-25",
            // "characters": [],
            // "planets": [],
            // "starships": [],
            // "vehicles": [],
            // species": [],
            // "created": "2014-12-10T14:23:31.880000Z",
            // "edited": "2015-04-11T09:46:52.774897Z",
            // "url": "https://swapi.co/api/films/1/"

            console.log(data.results);            CheckForMovingPage(data);

            $.each(data.results, function(index, value) {
                var gDiv = document.createElement( "div" );
                gDiv.className = "film col-md-4 col-md-offset-4";

                var divTitle = document.createElement( "div" );
                divTitle.innerHTML = value.title;
                divTitle.className = "film-title";
                gDiv.append(divTitle);

                var divOpening_crawl = document.createElement( "div" );
                divOpening_crawl.innerHTML = "Opening crawl : <i>" + value.opening_crawl+"</i>";
                divOpening_crawl.className = "film-opening_crawl";
                gDiv.append(divOpening_crawl);

                var divProducer = document.createElement( "div" );
                divProducer.innerHTML = "Producer : " + value.producer;
                divProducer.className = "film-producer";
                gDiv.append(divProducer);

                var divDirector = document.createElement( "div" );
                divDirector.innerHTML = "Director : " + value.director;
                divDirector.className = "film-director";
                gDiv.append(divDirector);

                if (value.characters.length > 0) {
                    var divCharacters = document.createElement( "div" );
                    divCharacters.innerHTML = "Characters : </br>";
                    divCharacters.className = "film-character-list";

                    $.each(value.characters, function(index, value) {
                        var divCharacter = document.createElement( "div" );

                        var rest = value.slice(0,-1);
                        var last = rest.substring(rest.lastIndexOf("/"), rest.length);
                        last = last.substr(1);

                        $.getJSON("https://swapi.co/api/people/"+last+"/?format=json", function(data) {

                            divCharacter.innerHTML = "<a href= ../people/" + last + ">" + data.name + "";
                        });
                        divCharacter.className = "film-character";

                        divCharacters.append(divCharacter);
                    });

                    gDiv.append(divCharacters);
                }


                if (value.starships.length > 0) {
                    var divStarships = document.createElement( "div" );
                    divStarships.innerHTML = "Starships : </br>";
                    divStarships.className = "film-starship-list";

                    $.each(value.starships, function(index, value) {
                        var divStarship = document.createElement( "div" );

                        var rest = value.slice(0,-1);
                        var last = rest.substring(rest.lastIndexOf("/"), rest.length);
                        last = last.substr(1);

                        $.getJSON("https://swapi.co/api/starships/"+last+"/?format=json", function(data) {

                            divStarship.innerHTML = "<a href= ../starships/" + last + ">" + data.name + "";
                        });
                        divStarship.className = "film-starship";

                        divStarships.append(divStarship);
                    });

                    gDiv.append(divStarships);
                }

                if (value.species.length > 0) {
                    var divSpecies = document.createElement( "div" );
                    divSpecies.innerHTML = "Species : </br>";
                    divSpecies.className = "film-specie-list";

                    $.each(value.species, function(index, value) {
                        var divSpecie = document.createElement( "div" );

                        var rest = value.slice(0,-1);
                        var last = rest.substring(rest.lastIndexOf("/"), rest.length);
                        last = last.substr(1);
                        console.log("https://swapi.co/api/species/"+last+"/?format=json")
                        $.getJSON("https://swapi.co/api/species/"+last+"/?format=json", function(data) {

                            divSpecie.innerHTML = "<a href= ../species/" + last + ">" + data.name + "";
                        });
                        divSpecie.className = "film-specie";

                        divSpecies.append(divSpecie);
                    });

                    gDiv.append(divSpecies);
                }

                $(".film-list").append(gDiv);
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