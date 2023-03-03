import React, { useEffect } from "react";

function Timer(props) {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("잘 돌아가는 중..");
    }, 1000);
    
    return () =>{
      clearInterval(timer);
      console.log('타이머가 종료되었습니다.');
    }
  }, []);

  return (
    <div>
      <spen> 타이머를 시작합니다. </spen>
    </div>
  );
}
export default Timer;
