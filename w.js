
let search = document.getElementById("btn");

search.addEventListener("click", (e) => {
    console.log(e.target)
    let btn = document.getElementById("search")
    console.log(btn.value)
    document.getElementById("template").style.display="block"

    weather(btn.value)
})
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            



// let date = new Date();

function msToTime(s) {

    // Pad to 2 or 3 digits, default is 2
    function pad(n, z) {
      z = z || 2;
      return ('00' + n).slice(-z);
    }
  
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;
  
    return pad(hrs) + ':' + pad(mins) + ':' + pad(secs) + '.' + pad(ms, 3);
  }

function tempConvert(value) {
    return (value - 273.1).toFixed(1)
}
function changeicon(a) {
    switch (a) {
        case "Clear":
            return `<i class="fa-solid fa-cloud-sun"></i>`
            break;
        case "Clouds":
            return `<i class="fa-solid fa-cloud"></i>`
            break;
        case "Haze":
            return `<i class="fa-solid fa-smog"></i>`
            break;

        case "Rain":
            return `<i class="fa-solid fa-cloud-rain"></i>`
            break;

        default:
            return `<i></i>`
            break;
    }
}
function weather(input) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=6c5f307e50884bab4510b7a3ccb9808a`
    window.fetch(url)
        .then((response) => {
            response.json()
                .then((result) => {
                    let data = result.main

                    let output = ""
                    output += ` <div class ="card" id="card1" >
                    <div><button id="closeBtn" onclick="close4 c">X</button></div>
                    
        <div class="card-body">
        
        <i class="fa-solid fa-location-dot"></i>
        <span class="card-text">${result.name}</span> 
        
        <span class="card-text">${""}</span> 

          <h2 class="card-title">${tempConvert(data.temp)} °C ${changeicon(result.weather[0].main)} </h2>

          <p class="card-text">${result.weather[0].description}</p>
          <i class="fa-solid fa-wind"></i>
          <span class="">${result.wind.speed}</span> <br>
          <i class="fa-solid fa-droplet"></i>
          <span class="">${data.humidity}</span><br>
          <i class="fa-regular fa-sun"></i>
          <span class="">${msToTime(result.sys.sunrise)}</span><br>
          <i class="fa-solid fa-moon"></i>
          <span class="">${result.sys.sunset}</span>
          
         
        })


          
        
        </div>
      </div>`
      

                    document.getElementById("template").innerHTML = output
                    // for close div
                    document.getElementById("closeBtn").addEventListener("click", (e) => {
                        let btn = document.getElementById("template").style.display="none"
                    })
                    
                    
                })
        })
}