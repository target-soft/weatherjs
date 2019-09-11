

var MyWeather = function(options){
 
    this.vars = {
        apiKey  : 'please request from your interviewer'
    };
    
    this.construct = function(options){
        this.vars.location = options.location || '';
    };
    
    /**
     * getHtml - parses the content retrieved in getWeatherInformation
     * into some sort of html.
     * @returns {String} the html that is to be placed into the body
     */
    this.getHtml = function( ) {
        return 'No content yet';
    }
    
    // some docs would be nice 
    var prepareResponse = function(response) {
        // Do a lot of stuff, call methods, parse data ....
        // DRY
    };

    
    var getWeatherInformation = function() {
        var url = 'replace with url for the api request, replace the query with the location and the apiKey';

        // Please read any data using the openweathermap API:
        // api.openweathermap.org/data/2.5/ - Documentation: https://openweathermap.org/api
        // You will need an API key - please request it from your interviewer
        
        // make the request with a valid url
        
        // call the prepareResponse methode with the response as parameter
        
        // maybe some error handling if something is broken
        // feel free to use the already included jquery library (https://api.jquery.com)
        // to get the data
    };
 

    this.init = function() {
        getWeatherInformation();
    };
 
    this.construct(options);    
};
 
var newMyWeather = new MyWeather({ location : 'hier is the location Name e.g. Walldorf' });
newMyWeather.init();


// Do not change below this line
$(document).ready(function() {
    $('body').append(newMyWeather.getHtml())
});