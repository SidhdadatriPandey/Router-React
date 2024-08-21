import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Suggestion from './Components/Suggestion';
import SignUp from './Components/SignUp';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' Component={SignUp} />
      <Route path='/cart' Component={Login}/>
      <Route path='/suggestion' Component={Suggestion}/>
      </Routes>
    </div>
  );
}

export default App;
