import React, { useState, useEffect } from 'react';
import './styles/App.css';
import axios from 'axios';
import Title from './components/Title'
import Weather from './components/Weather'

function App() {
  const [input, setInput] = useState('GUADALAJARA')
  const [api, setApi] = useState(`https://api.weatherapi.com/v1/current.json?key=28b4760a15104031844184955211407&q=${input}`)
  const [weather, setWeather] = useState({
    region: '',
    city: '',
    condition: '',
    conditionIcon: '',
    temperature: '',
  });
  useEffect(
    () => {

      searchWeatherOnLoad();
    },
    [api]
  )
  const searchWeatherOnLoad = () => {


    setApi(`https://api.weatherapi.com/v1/current.json?key=28b4760a15104031844184955211407&q=${input}`);
    axios.get(api)
      .then((dataObject) => {

        setWeather({
          region: dataObject.data.location.region,
          city: dataObject.data.location.name,
          condition: dataObject.data.current.condition.text,
          conditionIcon: dataObject.data.current.condition.icon,
          temperature: dataObject.data.current.temp_c,
        });


      }).catch((error) => { console.log(error) });


  }
  const searchWeather = (event) => {

    if ((event.key === 'Enter') || (event.className === 'form')) {

      setApi(`https://api.weatherapi.com/v1/current.json?key=28b4760a15104031844184955211407&q=${input}`);
      axios.get(api)
        .then((dataObject) => {

          setWeather({
            region: dataObject.data.location.region,
            city: dataObject.data.location.name,
            condition: dataObject.data.current.condition.text,
            conditionIcon: dataObject.data.current.condition.icon,
            temperature: dataObject.data.current.temp_c,
          });


        }).catch((error) => { console.log(error) });

    }


  }

  const searchLocation = (event) => {
    setInput(event.target.value);
  }



  return (
    <div className="App">
      <div className="search">

        <form onSubmit={searchWeather} onKeyDown={searchWeather} className='form'>
          <textarea onChange={searchLocation} cols="20" rows="1" spellCheck="false"></textarea>
          <div><button className='button'>Search</button></div>
        </form>

        {/* <input type="search" onChange={searchLocation} />
        <button className='button' onClick={searchWeather} onKeyDown={test}>Search</button>
       */}


      </div>

      <Weather region={weather.region}
        location={weather.city}
        condition={weather.condition}
        conditionIcon={weather.conditionIcon}
        temperature={weather.temperature} />
      <Title />
    </div>
  );

}

export default App;


/* <div className="search">
<input type="search" />
<button>Search</button>
</div>


<h1>{weather.region}</h1>
<h1>{weather.location}</h1>
<div className="condition-container">
<img src={weather.conditionIcon} alt="" />
<h1>{weather.temperature}°</h1>
<h1>{weather.condition}</h1>
</div> */
  //   <div className="App">
  //     <Title />
  //     <div>
  //       {weather && (

  //         <h1>hi</h1>
  //       )}
  //     </div>
  //   </div>
  // );