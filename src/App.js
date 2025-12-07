import WeatherApp from './WeatherApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <WeatherApp />
      <footer className="text-center py-3 lh-sm">
      This project was coded by{" "}
      <a href="https://github.com/bodoszidi" target="_blank" rel="noopener noreferrer">
        Szidonia Bodo
      </a>{" "}
      and you can find this on{" "}
      <a href="https://weatherappszb.netlify.app/" target="_blank" rel="noopener noreferrer">
        Netlify
      </a>{" "}
      and also open sourced on{" "}
      <a href="https://github.com/bodoszidi/reactweatherproject" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      .
    </footer>
    </div>
  );
}

export default App;
