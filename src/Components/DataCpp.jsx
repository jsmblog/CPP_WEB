import FirstBtn from "../Btn/FirstBtn"
import FiveBtn from "../Btn/FiveBtn"
import FourthBtn from "../Btn/FouthBtn"
import SecondBtn from "../Btn/SecondBtn"
import SixthBtn from "../Btn/SixthBtn"
import ThirthBtn from "../Btn/ThirthBtn"
import Footer from "./Footer"

const DataCpp = ({letterX ,OneExp , twoExp ,three,four ,five , six , seven , eigth , nine ,ten ,eleven ,twelve ,thirteen , fourteen , fithteen ,sixteen , seventeen , eigthteen , nineteen , twenty , twentyOne ,twentyTwo , twentyT , twentyFour ,touch}) => {
return (
<>
    <div  className="SmsGo">
        <h3 >{`Let's start !`}</h3>
    </div>
    <div className="ContBtnNav">
        <div>
            <FirstBtn touch={touch} four={four} five={five} three={three} twoExp={twoExp} OneExp={OneExp} letterX={letterX} />
        </div>
        <div>
            <SecondBtn six={six} seven={seven} eigth={eigth} letterX={letterX}/>
        </div>
        <div>
            <ThirthBtn thirteen={thirteen} twelve={twelve} eleven={eleven} ten={ten} nine={nine} letterX={letterX} />
        </div>
        <div>
            <FourthBtn letterX={letterX} fourteen={fourteen} fithteen={fithteen}/>
        </div>
        <div>
            <FiveBtn sixteen={sixteen} seventeen={seventeen} eigthteen={eigthteen} nineteen={nineteen} letterX={letterX}/>
        </div>
        <div>
            <SixthBtn twentyTwo={twentyTwo} twenty={twenty} twentyOne={twentyOne} twentyT={twentyT} twentyFour={twentyFour} letterX={letterX}/>
        </div>
    </div>
    <footer>
        <Footer/>
    </footer>

</>
)
}

export default DataCpp