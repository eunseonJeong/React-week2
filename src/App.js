import React, { useState } from 'react'

function App() {
  const [count,setCount] = useState(0);
  return ( 
    <> 
    <h1>{count}</h1>
    <button
        onClick={() => {
          setCount((previousState) => previousState + 1);
        }}
      >
      +
    </button>
    <button onClick={()=>{
      setCount(p => p-1)
    }}>
      -
    </button>
    </>
   
  )
}

export default App