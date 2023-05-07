import { useState } from "react"

const SixthBtn = ({letterX , six , seven , eigth}) => {
  const [btnOne, setBtnOne] = useState(false)

  const handleClickBtnOne = () => {
    setBtnOne(!btnOne)
    console.log(btnOne)
  }
  const btnOneVisibility = (btnOne) ? "btnOneV swing-in-left-fwd" : ""
  return (
    <>
     <div id="" className="BtnVarAndDT BtnVarAndDTSixth">
      <button onClick={handleClickBtnOne}>
        DATA STRUCTURES
      </button>
    </div>
      <div className={`${btnOneVisibility} container container_position`}>
        <div>
          <img onClick={handleClickBtnOne} className="CloseBtn" width={35} src={letterX} alt="close-button" />
        </div>
      <div className="content">
        <div className="contFirstBtnVarAndDt">
            <p>
            Logical operators are tools used in programming and mathematics to combine, compare, and evaluate conditions. These operators allow you to perform logical operations on Boolean values true o false and help you make decisions in your code.
            <br />
            <br />
            There are three main logical operators:
            <br />
            <br />
            </p>
            <ol className="olImg">
              <li><span>AND operator (&&): This operator returns true if both operands are true, and false otherwise. For example:</span></li>
              <img src={six} alt="example-one" />
              <li><span>OR operator (||): This operator returns true if at least one of the operands is true, and false if both operands are false. For example:</span></li>
              <img src={seven} alt="example-two" />
              <li><span>NOT operator (!): This operator inverts the truth value of an operand. If the operand is true, the result is false, and if the operand is false, the result is true. For example:</span></li>
              <img src={eigth} alt="example-three" />
            </ol>
            <p>In addition to the logical operators, there are also the basic mathematical operators, which are used to perform numerical calculations:

Addition operator (+): It is used to add two values. For example: int result = 3 + 5; // The result is 8
Subtraction operator (-): It is used to subtract one value from another. For example: int result = 8 - 3; // The result is 5
Multiplication operator (*): It is used to multiply two values. For example: int result = 2 * 4; // The result is 8
Division operator (/): Used to divide one value by another. For example: int result = 10 / 2; // The result is 5
Modulo operator (%): Returns the remainder of the division between two values. For example: int result = 10% 3; // The result is 1
These mathematical operators are used to perform numerical calculations in programming.

In short, logical operators are tools used to combine and evaluate Boolean conditions, while mathematical operators are used to perform numerical calculations. Understanding and using these operators is essential for making decisions and performing calculations in programming.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default SixthBtn