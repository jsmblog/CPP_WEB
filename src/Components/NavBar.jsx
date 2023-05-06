
const NavBar = ({ moon , handleClickMenu , letterOn }) => {
return (
<nav className="NavBarMenu">
    <div className="ContNavBar">
        <div>
            <a  href="#">{`J  S  M`}</a>
        </div>
            <div className="Btn">
                <button onClick={handleClickMenu}>
                    <img className="SizeImgBtn" src={letterOn} alt="Menu-Hamburguer" />
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