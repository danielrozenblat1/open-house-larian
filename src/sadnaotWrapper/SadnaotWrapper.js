import ByMe from "../components/ByMe/ByMe"
import WhyMe from "../components/fit/WhyMe"
import FormScreen from "../components/form/FormScreen"
import NavBarNew from "../components/NewNav/NavBarNew"
import PrivacyPolicy from "../components/privacy/Privacy"
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
<PrivacyPolicy
  ownerName="לריאן זוסינו לרמן"
  email="lariyan5@gmail.com"
  phone="+972 54-459-6735"
  domain="https://filling.co.il"
/>
  <ByMe/>
  </div>
    </>
}

export default SadnaotWrapper