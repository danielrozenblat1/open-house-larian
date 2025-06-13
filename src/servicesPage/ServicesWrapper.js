import ByMe from "../components/ByMe/ByMe"
import NavBarNew from "../components/NewNav/NavBarNewServices"
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
  <ByMe/>
    
    </>
}

export default ServicesWrapper