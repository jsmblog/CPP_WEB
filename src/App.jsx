
import { useEffect, useState } from 'react'
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
import DataCpp from './Components/DataCpp'
import sun from './Img/sun.png'
import cppTwo from './Img/cppTwo.png'

function App() {
  AOS.init({
  });
  //state of the menuNavbar
  const [menuIsOn, setMenuIsOn] = useState(false)
  // state for darkMode
  const [darkMode, setDarkMode] = useState(false)
  //change menuIsOn, stateMenuIsOn
  const handleClickMenu = () => {
  setMenuIsOn(!menuIsOn)
  console.log(menuIsOn)
  }
  //change darkMode 
  const changeDarkMode = () => {
    setDarkMode(!darkMode)
    console.log(darkMode)
  }
  //BtnMenu Validation 
  const menuOn = (menuIsOn) ? "visibilityMenu slide-in-bottom" : ""
  const darkModeIsOn = (darkMode) ? "themesDarkMode" : ""
   //validation for to change icons
  const letterOn = (menuIsOn) ?  `${letterX}` : `${menuHamburguer}`
  const sunImg = (darkMode) ? `${sun}` : `${moon}`
  const changeImgCpp = (darkMode) ? `${cppTwo}` : `${cppLogo}`
  //

  //darkModeInLocalStore 
  useEffect(() => {
    const savedTheme = localStorage.getItem('themesDarkMode'); // Get theme saved in local storage
    if (savedTheme) {
      setDarkMode(savedTheme);
    }
  }, []);
  return (
    <div className={`${darkModeIsOn} App`}>
      <NavBar sunImg={sunImg} changeDarkMode={changeDarkMode} sun={sun} letterOn={letterOn} letterX={letterX} setMenuIsOn={setMenuIsOn} handleClickMenu={handleClickMenu} moon={moon} menuHamburguer={menuHamburguer} />
      <Principal changeImgCpp={changeImgCpp} cppLogo={cppLogo} fontMarine={fontMarine} />
      <MenuIsOn  menuOn={menuOn} />
      <Sections creator={creator} />
      <DataCpp letterX={letterX} />
    </div>
  )
}

export default App
