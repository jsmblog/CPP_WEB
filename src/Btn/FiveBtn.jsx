import { useState } from "react"


const FiveBtn = ({letterX , sixteen , seventeen ,eigthteen , nineteen}) => {
  const [btnOne, setBtnOne] = useState(false)

  const handleClickBtnOne = () => {
    setBtnOne(!btnOne)
    console.log(btnOne)
  }
  const btnOneVisibility = (btnOne) ? "btnOneV slide-in-elliptic-top-fwd" : ""
  return (
    <>
     <div id="" className="BtnVarAndDT BtnVarAndDTFiveth">
      <button onClick={handleClickBtnOne}>
        ARRAYS
      </button>
    </div>
      <div className={`${btnOneVisibility} container container_position`}>
        <div>
          <img onClick={handleClickBtnOne} className="CloseBtn" width={35} src={letterX} alt="close-button" />
        </div>
      <div className="content">
        <div className="contFirstBtnVarAndDt">
            <p>
            Arrays in C++ are data structures that allow us to store a collection of elements of the same data type in a contiguous sequence in memory. Arrays are useful when we need to work with related data sets and want to access them efficiently.

In C++, arrays are defined by specifying the data type of the elements it will contain, followed by a name and the size of the array. The size of the array indicates the number of elements it can store and must be a constant integer value.
            <br />
            <br />
            Here is more information about arrays in C++:
            <br />
            <br />
            </p>
            <ol className="olImg">
              <li><span>Declaration and initial assignment: We can declare an array and assign it initial values at the time of declaration. For example:</span></li>
              <img src={sixteen} alt="example-one" />
              <li><span>Access and modification of elements: The elements of an array are accessed using the bracket operator [index]. The index specifies the position of the element in the array, starting at 0. For example:</span></li>
              <img src={seventeen} alt="example-two" />
              <li><span>Array size: The size of an array in C++ is fixed and must be specified at declaration time. The size must be a constant integer value and cannot be changed during program execution.

Iterating through an array: We can iterate through all the elements of an array using loops, such as the for loop. For example:</span></li>
              <img src={eigthteen} alt="example-three" />
              <li><span>Multidimensional arrays: In C++, it is also possible to have multidimensional arrays, which are arrays of arrays. For example, a two-dimensional array can be declared as follows:</span></li>
              <img src={nineteen} alt="example-one" />
            </ol>
            <p>
            It is important to note that arrays in C++ are fixed-size, which means that once an array with a given size is declared, it cannot be changed. Also, it is crucial to be careful with element indices to avoid accessing invalid array positions, which could cause unexpected behavior or program errors.

In short, arrays in C++ are data structures that allow us to store a sequence of elements of the same type in memory. They are useful for working with related data sets and items are accessed using indices. However, arrays have a fixed size and it is important to use valid indices to avoid errors.
            </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default FiveBtn