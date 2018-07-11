
//**
//* CHANGE ME

let blocksFolderLocation = "/APIStarWars/blocks"; // base : /APIStarWars/blocks
let beginOfAPISwapi = "api/";
let pageVariableName = "page="

//*
//**


function GET(param) {
    var vars = {};
    window.location.href.replace( location.hash, '' ).replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function( m, key, value ) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );

    if ( param ) {
        return vars[param] ? vars[param] : null;
    }
    return vars;
}

function CheckForMovingPage(data) {


        var previousDiv = document.createElement( "div" );
        previousDiv.className = "previous-page col-md-6";
    if (data.previous) {
        var pageNumberPrevious = getPageNumber(data.previous);

        previousDiv.innerHTML = "<a href=?page=" + pageNumberPrevious + ">Previous</a>";
    }
        $(".page-navigation").append(previousDiv);

    if (data.next) {

        var nextDiv = document.createElement( "div" );
        nextDiv.className = "next-page col-md-6";

        var pageNumberNext = getPageNumber(data.next);

        nextDiv.innerHTML = "<a href=?page=" + pageNumberNext + ">Next</a>";
        $(".page-navigation").append(nextDiv);
    }
}

function getPageNumber(link){

    var n = link.indexOf(pageVariableName);
    return link.substring(n+pageVariableName.length,link.length);
}