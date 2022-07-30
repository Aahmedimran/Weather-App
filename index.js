function getWeather() {

    let cityname = document.getElementById("cityName").value;

    // Make a request for a user with a given ID
    axios.get(`https://api.weatherapi.com/v1/current.json?key=77737b188d9148eaab345314223007&q=${cityname}&aqi=no`)
        .then(function (response) {

            let Wheatherdata = response.data;


            document.querySelector("#location").innerHTML = `${Wheatherdata.location.name},${Wheatherdata.location.region},${Wheatherdata.location.country}`;

            document.querySelector("#last_updated").innerHTML = `${Wheatherdata.current.last_updated}`;
            document.querySelector("#text").innerHTML = `${Wheatherdata.current.condition.text}`;
            document.querySelector("#icon").innerHTML = `<img src="${Wheatherdata.current.condition.icon}" alt="">`;
            document.querySelector("#temperature").innerHTML = `${Wheatherdata.current.temp_c}C | ${Wheatherdata.current.temp_f}F`;
            
            // console.log(Wheatherdata.current.temp_c);
            // console.log(Wheatherdata.current.condition.icon);
            console.log(Wheatherdata);
            // console.log(Wheatherdata.current.last_updated);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
       

    }