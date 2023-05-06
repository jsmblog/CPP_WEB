
import './App.css'
import NavBar from './Components/NavBar'
import Principal from './Components/Principal'
import cppLogo from './Img/cpp-logo.png'
import fontMarine from './Img/font-marine.png'
import menuHamburguer from './Img/menuHamburguer.png'
import moon from './Img/moon.png'

function App() {
 

  return (
    <>
      <NavBar moon={moon} menuHamburguer={menuHamburguer} />
      <Principal cppLogo={cppLogo} fontMarine={fontMarine} />
    </>
  )
}

export default App
