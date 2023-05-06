
const Sections = ({creator}) => {
return (
    <>
        <div className="SmsSections">
            <h2>What will we see?</h2>
        </div>
        <article>
            <div className="ContSectionsArt">
                <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500" className="ContDataThemes">
                    <h3>VARIABLES AND DATA TYPES</h3>
                    <h3>LOGICAL OPERATORS</h3>
                    <h3>CONTROL STRUCTURES</h3>
                    <h3>FUNCTIONS</h3>
                    <h3>ARRAYS</h3>
                    <h3>DATA STRUCTURES</h3>
                </div>
                    <div data-aos="fade-left"  data-aos-easing="linear"  data-aos-duration="1500" className="ContCreatorNews">
                        <div><h3>{`Let's know her story`}</h3></div>
                        <div className="ImgCreatorAndSms">
                            <div>
                                <div className="ContImgFounder"><img width={80} src={creator} alt="" /></div>
                            </div>
                            <div>
                                <p>
                                C++ is a programming language created <br /> by Bjarne Stroustrup in 1983, <br /> based on C and with object-oriented <br /> programming. It is used in software <br /> applications, operating systems, <br /> games, and embedded devices due to <br /> its performance and flexibility.
                                </p>
                            </div>
                        </div>
                    </div>
            </div>
        </article>
    </>
)
}

export default Sections