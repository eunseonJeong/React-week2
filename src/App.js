import React, { useState, useEffect } from 'react'

function App() {

  const [count,setCount] = useState(0);
  const [name,setName] = useState('');

  const pulsBtnHandler = () =>{
    setCount(count + 1)
  }
//렌더링 될 떄마다 실행됨
  // useEffect(() =>{
  //   console.log('안녕');
  // },[count])

  // useEffect(() =>{
  //   console.log('이름');
  // },[name])

  useEffect(()=>{
    console.log('hihi');
  },[])

  const chgBtnHandelr = (e) =>{
    setName(e.target.value)
  }

  return (
    <div>
      버튼 : {count}
      <button onClick={pulsBtnHandler}>플러스</button> <br />
      <input type='text' value={name} onChange={chgBtnHandelr}/>
      <span> </span>
    </div>
  )
}

export default App