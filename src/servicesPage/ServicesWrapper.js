import ByMe from "../components/ByMe/ByMe"
import NavBarNew from "../components/NewNav/NavBarNewServices"
import PrivacyPolicy from "../components/privacy/Privacy"
import Who from "../components/who/Who"
import WhoServices from "../components/who/WhoServices"
import FirstScreenServices from "./screens/FirstScreenServices"
import Testimonials from "./screens/ForthScreenServices"
import Services from "./screens/ThirdScreenServices"

import styles from "./ServicesWrapper.module.css"
const ServicesWrapper=()=>{


    return <>
      <NavBarNew/>
<FirstScreenServices/>
<Services/>
<WhoServices/>
<Testimonials/>
<PrivacyPolicy
  ownerName="לריאן זוסינו לרמן"
  email="lariyan5@gmail.com"
  phone="+972 54-459-6735"
  domain="https://filling.co.il"
/>
  <ByMe/>
    
    </>
}

export default ServicesWrapper