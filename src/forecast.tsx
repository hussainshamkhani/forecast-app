//Write the keys, the api call and implement asynchronous programming in typescript 

class Forecast {
    key: string;
    weatherURI: string;
    cityURI: string;

    constructor(){
        this.key = "TdAcNbu03fuyzeNKFue3pl89GcOWyrVi";
        this.weatherURI = "http://dataservice.accuweather.com/currentconditions/v1/{locationKey}";
        this.cityURI = "http://dataservice.accuweather.com/locations/v1/cities/search";
    }
}