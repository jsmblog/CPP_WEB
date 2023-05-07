import { useState } from "react"

const ThirthBtn = ({letterX , nine , ten , eleven , twelve , thirteen}) => {
  const [btnOne, setBtnOne] = useState(false)

  const handleClickBtnOne = () => {
    setBtnOne(!btnOne)
    console.log(btnOne)
  }
  const btnOneVisibility = (btnOne) ? "btnOneV bounce-in-bottom" : ""
  return (
    <>
    <div className="BtnVarAndDT BtnVarAndDThirth">
      <button onClick={handleClickBtnOne}>
        CONTROL STRUCTURES
      </button>
    </div>
      <div className={`${btnOneVisibility} container container_position`}>
        <div>
          <img onClick={handleClickBtnOne} className="CloseBtn" width={35} src={letterX} alt="close-button" />
        </div>
      <div className="content">
        <div className="contFirstBtnVarAndDt">
            <p>
            Control structures are fundamental constructions in programming that allow you to control the flow of execution of a program. These structures allow decisions to be made and instructions to be repeated based on certain conditions, providing flexibility and the ability to take different paths depending on certain situations.
            <br />
            <br />
            There are three main control structures:
            <br />
            <br />
            </p>
            <ol className="olImg">
              <li><span>Conditional control structure (if-else): This structure allows decisions to be made based on a condition. If the condition is met, a block of code is executed; otherwise, another block of code is executed. For example:</span></li>
              <img src={nine} alt="example-one" />
              <li><span>Iterative control structure (for loop): This structure allows you to repeat a block of code a certain number of times. It is mainly used when the exact number of repetitions required is known. For example:</span></li>
              <img src={ten} alt="example-two" />
              <li><span>Iterative control structure (while loop): This structure allows you to repeat a block of code while a condition is true. It is used when the exact number of repetitions required is not known in advance. For example:</span></li>
              <img src={eleven} alt="example-three" />
              <li><span>Switch control structure: It allows evaluating multiple cases and executing the code block corresponding to the case that matches the value of a variable. For example:</span></li>
              <img src={twelve} alt="example-four" />
              <li><span>do-while control structure: Similar to the while loop, but guarantees that the block of code will be executed at least once before checking the condition. For example:</span></li>
              <img src={thirteen} alt="example-five" />
            </ol>
        </div>
      </div>
    </div>
  </>
  )
}

export default ThirthBtn