// // let latitude=document.querySelector(".latitude").value;
// // let longitude=document.querySelector(".longitude").value;

// // const url=`https://weatherapi-com.p.rapidapi.com/current.json?q=${latitude}%2C${longitude}`;
// // const options = {
// //   method: 'GET',
// //   headers: {
// //     'x-rapidapi-key': 'f04d245fcfmsh952fa29db5423c0p13744fjsnd61fed62b548',
// //     'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
// //   }
// // };
// let button=document.querySelector('button');
// button.addEventListener('click',getdata);
// async function getdata(){

//     let latitude=document.querySelector(".latitude").value;
// let longitude=document.querySelector(".longitude").value;

// const url=`https://weatherapi-com.p.rapidapi.com/current.json?q=${latitude}%2C${longitude}`;
// const options = {
//   method: 'GET',
//   headers: {
//     'x-rapidapi-key': 'f04d245fcfmsh952fa29db5423c0p13744fjsnd61fed62b548',
//     'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
//   }
// };


//     try{
//     let response=await fetch(url,options);
//     let data=await response.json();
//     console.log(data);
//     console.log(data.ok);
//     }
//     catch(error){
//         console.log(`Error fetching the weather: ${error}`);
//     }
//     };

// let area=data.location.name;

// let state=data.location.region;
// let country=data.location.country;

// let weather=data.current.condition.text;
// let windspeed= `${data.current.wind_kph} kmph`;

// let result=`AREA :${area}
//             STATE:${state}
//             COUNTRY:${country}
//             WEATHER:${weather}
//             WINDSPEED:${windspeed}`;

// document.querySelector(".result").innerText=result;

//chatgpt

let button = document.querySelector('button');
button.addEventListener('click', getWeatherData);

async function getWeatherData() {
    let latitude = document.querySelector("#latitude").value;
    let longitude = document.querySelector("#longitude").value;

    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${latitude}%2C${longitude}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'f04d245fcfmsh952fa29db5423c0p13744fjsnd61fed62b548',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        let response = await fetch(url, options);
        let data = await response.json();
        console.log(data);

        let area = data.location.name;
        let state = data.location.region;
        let country = data.location.country;
        let weather = data.current.condition.text;
        let windspeed = `${data.current.wind_kph} kmph`;

        let result = `<p> <b>AREA:<b> ${area}</p> <br> <p> <b> STATE:</b> ${state} </p> <br> <p> <b> COUNTRY:</b>  ${country}</p> <br> <p> <b>WEATHER:</b>${weather}</p> <br> <p> <b>WINDSPEED: </b>${windspeed}</p>`;



        document.querySelector('#result').innerHTML = '<h4 style="margin-top: 60px;">Fetching the data....</h4>';
        document.querySelector('#result').style.visibility='visible';
        
        setTimeout(()=>{document.querySelector('#result').innerHTML=result},2000);
        
        
        
    } catch (error) {
        console.log(`Error fetching the weather: ${error}`);
    }
}
