import WeatherApp from './WeatherApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <WeatherApp />
      <footer>
        This project was coded by <a href='https://github.com/bodoszidi' target="_blank">
          Szidonia Bodo
        </a> and you can find this on <a href='https://weatherappszb.netlify.app/' target='_blank'>Netlify</a> and also open sourced on <a href='https://github.com/bodoszidi/reactweatherproject' target='_blank'>GitHub</a>
      </footer>
    </div>
  );
}

export default App;
