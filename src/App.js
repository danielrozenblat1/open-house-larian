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
import FifthScreen from './screens/FifthScreen';
import WhyMe from './components/fit/WhyMe';
import WorkshopCards from './components/moreServices/MoreServices';

import SixthScreen from './screens/SixthScreen';
import FormScreen from './components/form/FormScreen';

function App() {
  return <>
  <NavBarNew/>
  <FirstScreen/>

  <SixthScreen/>
  <ThirdScreen/>
  <WhyMe/>
  <SecondScreen/>
  <Who/>
  <ForthScreen/>

<FormScreen/>
  <ByMe/>
  </>
}

export default App;
