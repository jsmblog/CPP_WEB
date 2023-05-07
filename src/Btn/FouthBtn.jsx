import { useState } from "react"

const FouthBtn = ({letterX , fourteen , fithteen , eleven , twelve , thirteen}) => {
  const [btnOne, setBtnOne] = useState(false)

  const handleClickBtnOne = () => {
    setBtnOne(!btnOne)
    console.log(btnOne)
  }
  const btnOneVisibility = (btnOne) ? "btnOneV slide-in-blurred-right" : ""
  return (
    <>
    <div className="BtnVarAndDT BtnVarAndDtFourth">
      <button onClick={handleClickBtnOne}>
        FUNCTIONS
      </button>
    </div>
      <div className={`${btnOneVisibility} container container_position`}>
        <div>
          <img onClick={handleClickBtnOne} className="CloseBtn" width={35} src={letterX} alt="close-button" />
        </div>
      <div className="content">
        <div className="contFirstBtnVarAndDt">
            <p>
            Functions in programming are blocks of code that perform a specific task and can be reused in different parts of a program. These functions allow you to break a program into smaller tasks and make it easier to organize and understand your code.

In C++, a function is defined with a name, a parameter list (optional), and a return type (optional). Parameters are variables that are used to pass information to the function, and the return type is the type of data that the function returns after performing its task.
            <br />
            <br />
           {` Here's`} a simple example of a C++ function that adds two numbers:
            <br />
            <br />
            </p>
            <ol className="olImg">
              <li><span>In this example, the function add receives two integer type parameters (a and b) and returns the sum of both. In the main function, the call to the add function is made passing the values ​​3 and 5 as arguments. The result is stored in the result variable and is displayed on the screen.</span></li>
              <img src={fourteen} alt="example-one" />
              <li><span>Functions can also have parameters without a return type, which means that they perform a task without returning a value. For example:</span></li>
              <img src={fithteen} alt="example-two" />
              <li><span>In this case, the greet function has no parameters and no return type. It simply displays the message "Hello world!" per screen when called from the main function.

In short, functions in C++ are reusable blocks of code that perform specific tasks. They can receive parameters to receive information and return a value as a result. Dividing a program into functions helps to organize and make the code easier to understand.</span></li>
            </ol>
        </div>
      </div>
    </div>
  </>
  )
}

export default FouthBtn