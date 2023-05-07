import { useState } from "react"


const FirstBtn = ({letterX , OneExp , twoExp , three , four ,five}) => {
    
  const [btnOne, setBtnOne] = useState(false)

  const handleClickBtnOne = () => {
    setBtnOne(!btnOne)
    console.log(btnOne)
  }
  const btnOneVisibility = (btnOne) ? "btnOneV scale-in-hor-center" : ""
  
  
  return (
    <>
    <div className="BtnVarAndDT">
      <button onClick={handleClickBtnOne}>
        VARIABLES AND DATA TYPES
      </button>
    </div>
      <div className={`${btnOneVisibility} container container_position`}>
        <div>
          <img onClick={handleClickBtnOne} className="CloseBtn" width={35} src={letterX} alt="close-button" />
        </div>
      <div className="content">
        <div className="contFirstBtnVarAndDt">
            <p>
            In C++, a variable is a memory space reserved for storing data. It allows you to give meaningful names to the data and manipulate it in the program. Each variable has a unique name and an associated data type.
            <br />
            <br />
            Some data types in C++ are:
            <br />
            <br />
            </p>
            <ol className="olImg">
              <li><span>Integers (int): Represent whole numbers without decimals. Example: 1, 10, -5.</span></li>
              <img src={OneExp} alt="example-one" />
              <li><span>Floating point (float, double): Represents decimal numbers. Example: 3.14, -0.5, 2.0.</span></li>
              <img src={twoExp} alt="example-two" />
              <li><span>Characters (char): Represent a single character. Example:{`'A', 'b', '7'.`}</span></li>
              <img src={three} alt="example-three" />
              <li><span>Character strings (string): Represent a sequence of characters. Example: {`"Hello", "World".`}</span></li>
              <img src={four} alt="example-four" />
              <li><span>Booleans (bool): Represent true or false values. Example: true, false.</span></li>
              <img src={five} alt="example-five" />
            </ol>
        </div>
      </div>
    </div>
    </>
  )
}

export default FirstBtn