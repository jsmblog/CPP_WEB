import { useState } from "react"

const SecondBtn = ({letterX , six , seven , eigth}) => {
  const [btnOne, setBtnOne] = useState(false)

  const handleClickBtnOne = () => {
    setBtnOne(!btnOne)
    console.log(btnOne)
  }
  const btnOneVisibility = (btnOne) ? "btnOneV puff-in-center" : ""
  return (
    <>
     <div id="" className="BtnVarAndDT blink-1 BtnVarAndDT_change-co">
      <button onClick={handleClickBtnOne}>
        LOGICAL OPERATORS
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
              <li><span>Operador NOT (!): Este operador invierte el valor de verdad de un operando. Si el operando es verdadero, el resultado es falso, y si el operando es falso, el resultado es verdadero. For example:</span></li>
              <img src={eigth} alt="example-three" />
            </ol>
            <p>Además de los operadores lógicos, también existen los operadores matemáticos básicos, que se utilizan para realizar cálculos numéricos:

Operador de suma (+): Se utiliza para sumar dos valores. Por ejemplo: int result = 3 + 5; // El resultado es 8
Operador de resta (-): Se utiliza para restar un valor de otro. Por ejemplo: int result = 8 - 3; // El resultado es 5
Operador de multiplicación (*): Se utiliza para multiplicar dos valores. Por ejemplo: int result = 2 * 4; // El resultado es 8
Operador de división (/): Se utiliza para dividir un valor entre otro. Por ejemplo: int result = 10 / 2; // El resultado es 5
Operador de módulo (%): Devuelve el resto de la división entre dos valores. Por ejemplo: int result = 10 % 3; // El resultado es 1
Estos operadores matemáticos se utilizan para realizar cálculos numéricos en programación.

En resumen, los operadores lógicos son herramientas utilizadas para combinar y evaluar condiciones booleanas, mientras que los operadores matemáticos se utilizan para realizar cálculos numéricos. Comprender y utilizar estos operadores es fundamental para tomar decisiones y realizar cálculos en la programación.

</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default SecondBtn