
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

function App() {
  const [menuIsOn, setMenuIsOn] = useState(false)

  const handleClickMenu = () => {
  setMenuIsOn(!menuIsOn)
  console.log(menuIsOn)
  }

  const menuOn = (menuIsOn) ? "visibilityMenu slide-in-bottom" : ""
  const letterOn = (menuIsOn) ?  `${letterX}` : `${menuHamburguer}`

  return (
    <>
      <NavBar letterOn={letterOn} letterX={letterX} setMenuIsOn={setMenuIsOn} handleClickMenu={handleClickMenu} moon={moon} menuHamburguer={menuHamburguer} />
      <Principal cppLogo={cppLogo} fontMarine={fontMarine} />
      <MenuIsOn  menuOn={menuOn} />
    </>
  )
}

export default App
