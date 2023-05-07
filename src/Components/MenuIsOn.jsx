
const MenuIsOn = ({menuOn}) => {
return (
    <nav className={`${menuOn} NavMenuIsOn NavMenuIsOn_position`}>
        <ul>
            <li><a href="#">VARIABLES AND <br /> DATA TYPES</a></li>
            <li><a href="#">LOGICAL OPERATORS</a></li>
            <li><a href="#">CONTROL STRUCTURES</a></li>
            <li><a href="#">FUNCTIONS</a></li>
            <li><a href="#">ARRAYS</a></li>
            <li><a href="#">DATA STRUCTURES</a></li>
        </ul>
    </nav>
)
}

export default MenuIsOn