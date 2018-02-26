import React from 'react'
import Header from './Header'
import getForecast from './WeatherData.js'

class WeekPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        forcast: []
      };
    }

    componentDidMount() {
      var self = this;
      getForecast(function(data) {
        self.setState({ forcast: data.list });

    });
    }
    render() {
      return (
        <div className='App'>
      {this.state.forecast.map((hour) =>
      <div>
        <div>{hour.dt_txt}</div>
          <img src={`https://openweathermap.org/img/w/${hour.weather[0].icon}.png`} alt="Weather Icon"/>
          <div>
           <span>{hour.main.temp_max}°</span>
            <span>{hour.main.temp_min}°</span>
          </div>
      </div>
      )}
     </div>
      );
    }

    export default WeekPage
