import { useState } from "react"

const SixthBtn = ({letterX , twenty ,twentyOne ,twentyTwo , twentyT , twentyFour}) => {
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
            Data structures are organized ways of storing and manipulating data in a computer program. These structures allow us to store and access data efficiently, facilitating the performance of various operations and optimizing the use of resources.
            <br />
            <br />
            There are different types of data structures, each with its specific characteristics and applications. Some of the most common data structures are:
            <br />
            <br />
            </p>
            <ol className="olImg">
              <li><span>Arrays: Arrays are a contiguous collection of elements of the same type. They allow items to be accessed using an index, which makes data retrieval easier, but they are fixed in size and not very flexible in terms of their ability to grow dynamically. For example:</span></li>
              <img src={twenty} alt="example-one" />
              <li><span>Linked Lists: Linked lists are a sequence of nodes, where each node contains a value and a reference to the next node. This allows for dynamic memory allocation and flexible list growth. For example:</span></li>
              <img src={twentyOne} alt="example-two" />
              <li><span>Stacks: Stacks are a LIFO (Last-In, First-Out) data structure, where the last element inserted is the first to be removed. The basic operations on a stack are push (insert an element) and pop (remove an element). For example:</span></li>
              <img src={twentyTwo} alt="example-three" />
              <li><span>Queues: Queues are a FIFO (First-In, First-Out) data structure, where the first element inserted is the first to be removed. The basic operations on a queue are enqueue (insert an element) and dequeue (remove an element). For example:</span></li>
              <img src={twentyT} alt="example-three" />
              <li><span>Trees: Trees are hierarchical structures made up of nodes, where each node can have one or more child nodes. Trees are used to represent hierarchical relationships, such as directory trees, or data structures such as binary search trees. For example:</span></li>
              <img src={twentyFour
              
              
              
              } alt="example-three" />
            </ol>
            <p>

            </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default SixthBtn