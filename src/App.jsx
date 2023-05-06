
import { useState } from 'react'
import './App.css'
import MenuIsOn from './Components/MenuIsOn'
import NavBar from './Components/NavBar'
import Principal from './Components/Principal'
import cppLogo from './Img/cpp-logo.png'
import fontMarine from './Img/font-marine.png'
import menuHamburguer from './Img/menuHamburguer.png'
import moon from './Img/moon.png'
import letterX from './Img/letra-x.png'
import Sections from './Components/Sections'
import creator from './Img/creator.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init({
  });
  //state of the menuNavbar
  const [menuIsOn, setMenuIsOn] = useState(false)

  //change menuIsOn, stateMenuIsOn
  const handleClickMenu = () => {
  setMenuIsOn(!menuIsOn)
  console.log(menuIsOn)
  }
  //BtnMenu Validation 
  const menuOn = (menuIsOn) ? "visibilityMenu slide-in-bottom" : ""

  //validation for to change icons
  const letterOn = (menuIsOn) ?  `${letterX}` : `${menuHamburguer}`

  return (
    <>
      <NavBar letterOn={letterOn} letterX={letterX} setMenuIsOn={setMenuIsOn} handleClickMenu={handleClickMenu} moon={moon} menuHamburguer={menuHamburguer} />
      <Principal cppLogo={cppLogo} fontMarine={fontMarine} />
      <MenuIsOn  menuOn={menuOn} />
      <Sections creator={creator} />
    </>
  )
}

export default App
