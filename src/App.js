// import DataFetchingExample from "./DataFetchingExample";
// import Effect from "./Effect";
// import useCustomHook from "./useCustomHook";
// import React, { useEffect, useState } from "react";

function App() {
  const number = [1,2,3,4,5]

  const doubleNum = number.map((number) =>{
    return number * 2
  }) 
  console.log(doubleNum);
  
}

//   // const {count, increment, decrement} = useCustomHook(0);
//   const [count,setCount]=useState(0)

//   useEffect(()=>{
//     const interval = setInterval(()=>{
//       setCount(count + 1)
    
//     },100)
//     return () => clearInterval(interval)
//   },[])

//   return (
//     <div>
//       {/* <h1>CustomHook Example</h1>
//       <p>Count : {count}</p>

//       <button onClick={increment}>Add</button>
//       <button onClick={decrement}>Subs</button>
      
//       <div>
//       <Effect />
//       <DataFetchingExample />
//       </div> */}
//       <h1>Count is : {count}</h1>
//       <button onClick={(prevCount)=> prevCount + 1}>Add</button>

//     </div>
//   );
// }

export default App;
