
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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 3000 milisens = 3 seconds

    return () => clearTimeout(timer); // Clears the timer if the component is unmounted before it finishes
  }, []); // The second argument to useEffect is an empty array to ensure that it is only executed once when mounting the component.

  if (isLoading) {
    return (
      <div className="loader">
        <div className="lds-ripple "><div></div><div></div></div>
        {/* loading animation */}
        <h2 className='charging tracking-out-expand'>CHARGING...</h2>
      </div>
    );
  }
  
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
