import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/FirstScreen';
import ThirdScreen from './screens/ThirdScreen';
import SecondScreen from './screens/SecondScreen';
import NavBarNew from './components/NewNav/NavBarNew';
import Who from './components/who/Who';
import ForthScreen from './screens/ForthScreen';
import WhoFits from './components/fit/WhoFits';
import ByMe from './components/ByMe/ByMe';

function App() {
  return <>
  <NavBarNew/>
  <FirstScreen/>
  <ThirdScreen/>
  <SecondScreen/>
  <Who/>
  <ForthScreen/>
  <WhoFits/>
  <ByMe/>
  </>
}

export default App;
