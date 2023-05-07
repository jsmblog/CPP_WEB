
const Principal = ({ fontMarine , changeImgCpp}) => {
return (
    <>
    <section >
            <div className="ContPrincipal">
                <div className="MessageLearning">
                    <h1>{`¡ A P R E N D A M O S !`}</h1>
                </div>
                    <div className="positionLogoCpp">
                        <div> 
                            <img width={150} src={changeImgCpp} alt="Cpp-logo" />
                        </div>
                    </div>
                <div className="positionLogoCpp positionLogoCpp_co">
                    <h2 className="text-pop-up-bottom">↓</h2>
                </div>
                <div className="ContLogoMarine">
                    <img src={fontMarine} alt="font-marine" />
                </div>
            </div>
                
    </section>
    </>
)
}

export default Principal