import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  
  const idRef = useRef("");
  const pwRef = useRef("");

  const [id,setId] = useState('');

  // 렌더링이 될 때
  useEffect(() => {
    idRef.current.focus();
  }, []);

  useEffect(()=>{
    if(id.length >= 10) {
      pwRef.current.focus();
    }
  },[id])

  return (
    <>
      <div>
        아이디 : <input 
        value={id} onChange={e=>{
          setId(e.target.value)
        }}
        type="text" ref={idRef} />
      </div>

      <div>
        비밀번호 : <input type="password" ref={pwRef}  />
      </div>
    </>
  );
}

export default App;