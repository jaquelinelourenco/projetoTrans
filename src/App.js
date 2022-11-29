import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Routes from './router/Router';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Routes/>
    </Router>
  );
}

export default App;
