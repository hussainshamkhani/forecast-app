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

    async updateCity(city: string){
        const cityDets = await this.getCity(city);
    }
    async getCity(city: string) {
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI + query);
        const data = await response.json();
        
        return data[0];
    }
    async getWeather(id:string) {
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
        return data[0];
    }
}