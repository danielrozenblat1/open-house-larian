import ByMe from "../components/ByMe/ByMe"
import WhyMe from "../components/fit/WhyMe"
import FormScreen from "../components/form/FormScreen"
import NavBarNew from "../components/NewNav/NavBarNew"
import Who from "../components/who/Who"
import FirstScreen from "../screens/FirstScreen"
import ForthScreen from "../screens/ForthScreen"
import SecondScreen from "../screens/SecondScreen"
import SixthScreen from "../screens/SixthScreen"
import ThirdScreen from "../screens/ThirdScreen"
import styles from "./SadnaotWrapper.module.css"
const SadnaotWrapper=()=>{


    return <>
    <div style={{overflowX:"hidden"}}>
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
  </div>
    </>
}

export default SadnaotWrapper