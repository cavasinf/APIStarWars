$( document ).ready(function() {

    let linksAPI = [];
    let count = 0;

    $.getJSON("https://swapi.co/api/?format=json", function(data){
        $.each(data, function(index, value) {
            count++;
        })
        $.each(data, function(index, value) {
            var rest = value.slice(0,-1);
            var last = rest.substring(rest.lastIndexOf("/"), rest.length);
            last = last.substr(1);
            linksAPI.push(value);
            var a = document.createElement( "a" );
            a.setAttribute("style","width :calc(90% / "+count+" - 10px)");
            var parameterIndex = window.location.href.indexOf("?")
            var linkWithoutParameter = window.location.href.slice(0,parameterIndex);
            a.setAttribute("href",linkWithoutParameter+"/../"+last)
            a.className = "nav-item"
            a.innerHTML = "<div>"+index+"</div>";
            $(".nav-top").append(a);
        });
    });

});