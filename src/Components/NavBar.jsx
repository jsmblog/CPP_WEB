
const NavBar = ({menuHamburguer , moon}) => {
return (
<nav className="NavBarMenu">
    <div className="ContNavBar">
        <div>
            <a  href="#">{`J  S  M`}</a>
        </div>
            <div className="Btn">
                <button>
                    <img className="SizeImgBtn" src={menuHamburguer} alt="Menu-Hamburguer" />
                </button>
                    <button>
                    <img className="SizeImgBtn" src={moon} alt="Moon" />
                    </button>
            </div>
    </div>
</nav>
)
}

export default NavBar