const getWeather = (e) => {
  let cityname = document.getElementById("cityName").value;
  // Make a request for a user with a given ID
  axios
    .get(
      `https://api.weatherapi.com/v1/current.json?key=77737b188d9148eaab345314223007&q=${cityname}&aqi=no`
    )
    .then(function (response) {
      let Wheatherdata = response.data;

      document.querySelector("#content").className = "content";
      document.querySelector(
        "#location"
      ).innerHTML = `${Wheatherdata.location.name} ${Wheatherdata.location.region} ${Wheatherdata.location.country}`;
      
      
      document.querySelector(
        "#last_updated"
      ).innerHTML = `${Wheatherdata.location.localtime[0]}${Wheatherdata.location.localtime[1]}${Wheatherdata.location.localtime[2]}${Wheatherdata.location.localtime[3]}${Wheatherdata.location.localtime[4]}${Wheatherdata.location.localtime[5]}${Wheatherdata.location.localtime[6]}${Wheatherdata.location.localtime[7]}${Wheatherdata.location.localtime[8]}${Wheatherdata.location.localtime[9]}`;
     
     
     
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

      const d = new Date(Wheatherdata.location.localtime);
      let day = weekday[d.getDay()];

console.log(day)
      document.querySelector(
        "#is_day"
      ).innerHTML = ` ${day}${Wheatherdata.location.localtime[10]}${Wheatherdata.location.localtime[11]}${Wheatherdata.location.localtime[12]}${Wheatherdata.location.localtime[13]}${Wheatherdata.location.localtime[14]}${Wheatherdata.location.localtime[15]}`;
      


    //   if (day === weekday[0]) {
    //     
    //     document.querySelector(
    //       "#is_day"
    //     ).innerHTML = ` Sanday${Wheatherdata.location.localtime[10]}${Wheatherdata.location.localtime[11]}${Wheatherdata.location.localtime[12]}${Wheatherdata.location.localtime[13]}${Wheatherdata.location.localtime[14]}${Wheatherdata.location.localtime[15]}`;
        
    //   } 
    //   else if (day === weekday[1]) {
    //     document.querySelector(
    //       "#is_day"
    //       ).innerHTML = `Monday${Wheatherdata.location.localtime[10]}${Wheatherdata.location.localtime[11]}${Wheatherdata.location.localtime[12]}${Wheatherdata.location.localtime[13]}${Wheatherdata.location.localtime[14]}${Wheatherdata.location.localtime[15]}`;
    //     }
    //      else if (day === weekday[2]) {
    //     document.querySelector(
    //       "#is_day"
    //     ).innerHTML = `Tuesday${Wheatherdata.location.localtime[10]}${Wheatherdata.location.localtime[11]}${Wheatherdata.location.localtime[12]}${Wheatherdata.location.localtime[13]}${Wheatherdata.location.localtime[14]}${Wheatherdata.location.localtime[15]}`;
    //   }
    //    else if (day === weekday[3]) {
    //     document.querySelector(
    //       "#is_day"
    //     ).innerHTML = `wednsday${Wheatherdata.location.localtime[10]}${Wheatherdata.location.localtime[11]}${Wheatherdata.location.localtime[12]}${Wheatherdata.location.localtime[13]}${Wheatherdata.location.localtime[14]}${Wheatherdata.location.localtime[15]}`;
    //   }
    //    else if (day === weekday[4]) {
    //     document.querySelector(
    //       "#is_day"
    //     ).innerHTML = `Thersday${Wheatherdata.location.localtime[10]}${Wheatherdata.location.localtime[11]}${Wheatherdata.location.localtime[12]}${Wheatherdata.location.localtime[13]}${Wheatherdata.location.localtime[14]}${Wheatherdata.location.localtime[15]}`;
    //   } 
    //   else if (day === weekday[5]) {
    //     document.querySelector(
    //       "#is_day"
    //     ).innerHTML = `Friday${Wheatherdata.location.localtime[10]}${Wheatherdata.location.localtime[11]}${Wheatherdata.location.localtime[12]}${Wheatherdata.location.localtime[13]}${Wheatherdata.location.localtime[14]}${Wheatherdata.location.localtime[15]}`;
    //   } 
    //   else if (day === weekday[6]) {
    //     document.querySelector(
    //       "#is_day"
    //     ).innerHTML = `Saturday${Wheatherdata.location.localtime[10]}${Wheatherdata.location.localtime[11]}${Wheatherdata.location.localtime[12]}${Wheatherdata.location.localtime[13]}${Wheatherdata.location.localtime[14]}${Wheatherdata.location.localtime[15]}`;
    //   }

   })

    .catch(function (error) {
      // handle error
      console.log(error);
      alert("PLease enter correct city name");
      // document.querySelector(
      //   "#error"
      // ).innerHTML = `<b>PLease enter correct city name</b>`;
    })
    .then(function () {
      // always executed
    });
};
