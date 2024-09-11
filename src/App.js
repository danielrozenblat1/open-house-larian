import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/FirstScreen';
import ThirdScreen from './screens/ThirdScreen';
import SecondScreen from './screens/SecondScreen';
import NavBarNew from './components/NewNav/NavBarNew';
import Who from './components/who/Who';

function App() {
  return <>
  <NavBarNew/>
  <FirstScreen/>
  <ThirdScreen/>
  <SecondScreen/>
  <Who/>
  </>
}

export default App;
