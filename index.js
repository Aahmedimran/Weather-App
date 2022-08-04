const getWeather = (e) => {
  let cityname = document.getElementById("cityName").value;
  // Make a request for a user with a given ID
  axios
    .get(
      `https://api.weatherapi.com/v1/current.json?key=77737b188d9148eaab345314223007&q=${cityname}&aqi=no`
    )
    .then(function (response) {
      let Wheatherdata = response.data;
let time = Wheatherdata.location.localtime;

      document.querySelector("#content").className = "content";
      document.querySelector("#location").className = "location";
      document.querySelector(
        "#location"
      ).innerHTML = `${Wheatherdata.location.name} ${Wheatherdata.location.region} ${Wheatherdata.location.country}`;
      

      document.querySelector(
        "#last_updated"
      ).innerHTML = `${moment(time).format('Do MMMM YYYY, h:mm:ss a')}`;


      // document.querySelector(
      //   "#last_updated"
      // ).innerHTML = `${Wheatherdata.location.localtime[0]}${Wheatherdata.location.localtime[1]}${Wheatherdata.location.localtime[2]}${Wheatherdata.location.localtime[3]}${Wheatherdata.location.localtime[4]}${Wheatherdata.location.localtime[5]}${Wheatherdata.location.localtime[6]}${Wheatherdata.location.localtime[7]}${Wheatherdata.location.localtime[8]}${Wheatherdata.location.localtime[9]}`;
     
     
     
      document.querySelector(
        "#text"
      ).innerHTML = `${Wheatherdata.current.condition.text}`;
      
      
      
      document.querySelector(
        "#icon"
      ).innerHTML = `<img src="${Wheatherdata.current.condition.icon}" alt="">`;
      document.querySelector(
        "#temperature"
      ).innerHTML = `${Wheatherdata.current.temp_c} °C | ${Wheatherdata.current.temp_f} °F`;
      
      
      document.querySelector(
        "#humidity"
      ).innerHTML = `Humidity ${Wheatherdata.current.humidity}%`;
        console.log(Wheatherdata);
      // //show day in english

      const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

      const d = new Date();
      
      let day = weekday[d.getDay()];
     


         
      document.querySelector(
        "#is_day"
      ).innerHTML = ` ${day}`;
   })

    .catch(function (error) {
      // handle error
      alert("PLease enter correct city name / Check Connection ");
      // document.querySelector(
      //   "#error"
      // ).innerHTML = `<b>PLease enter correct city name</b>`;
    })
    .then(function () {
      // always executed
    });
};
