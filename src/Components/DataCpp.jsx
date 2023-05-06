import FirstBtn from "../Btn/FirstBtn"
import FiveBtn from "../Btn/FiveBtn"
import FouthBtn from "../Btn/FouthBtn"
import SecondBtn from "../Btn/SecondBtn"
import SixthBtn from "../Btn/SixthBtn"
import ThirthBtn from "../Btn/ThirthBtn"
import Footer from "./Footer"

const DataCpp = () => {
return (
<>
    <div  className="SmsGo">
        <h3 >{`Let's start !`}</h3>
    </div>
    <div className="ContBtnNav">
        <div>
            <FirstBtn/>
        </div>
        <div>
            <SecondBtn/>
        </div>
        <div>
            <ThirthBtn/>
        </div>
        <div>
            <FouthBtn/>
        </div>
        <div>
            <FiveBtn/>
        </div>
        <div>
            <SixthBtn/>
        </div>
    </div>
    <footer>
        <Footer/>
    </footer>
</>
)
}

export default DataCpp