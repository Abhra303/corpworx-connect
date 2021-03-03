import './App.css';
//When multiple routes will be there, then react router can be used for single page routing
// import { Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
