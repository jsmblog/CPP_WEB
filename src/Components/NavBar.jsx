
const NavBar = () => {
return (
<nav className="NavBarMenu">
    <div className="ContNavBar">
        <div>
            <a  href="#">{`J  S  M`}</a>
        </div>
            <div className="Btn">
                <button>
                    <img className="SizeImgBtn" src="/public/menuHamburguer.png" alt="Menu-Hamburguer" />
                </button>
                    <button>
                    <img className="SizeImgBtn" src="/public/moon.png" alt="Moon" />
                    </button>
            </div>
    </div>
</nav>
)
}

export default NavBar