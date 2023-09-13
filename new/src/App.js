import React, { useState } from 'react';
import './App.css'

export default function App(){
  const [btn, setBtn] = useState(true)
  const handleBtn=()=>{
    setBtn(!btn)
  }
  return(
    <div className='box d-flex'>
      <h3 className='p-2'>Book</h3>
      <div class="blank">{!btn && <p>책</p>} </div>
      <button onClick={handleBtn}>{btn ? '뜻 보기' : '뜻 숨기기'}</button>
    </div>
    // !btn은 btn이 false일 때 참이 되므로, btn이 false (즉, "뜻 숨기기" 버튼이 클릭된 상태) 일 때 <p>책</p>을 화면에 출력합니다.
  )
}


// useState 말고 변수로 토글 만드는 거
// export default function kcy(){
//   let name ="채연";
  
//   function changeName(){
//     name = name === "채연" ? "연채" : "채연";
//     console.log(name);
//     document.getElementById("myname").innerText=name
//     // innerText는 텍스트 내용을 가져온다.
//     // 직접적으로 새로운 내용을 입혀줄 수 있다 ex) .innerText='하이'

//   }

//   return(
//     <div>
//       <h1>State</h1>
//       <h2 id="myname">{name}</h2>
//       <button onClick={changeName}>과연?</button>
//     </div>
//   )
// }



// useState로 버튼 count 하는 예제 연습
// function App(){
//  const [btn, setBtn] = useState(0);
//  const increase = () =>{
//   setBtn(btn-10)
//  }
//  return(
//   <div>
//     <button onClick={increase}>버튼</button>
//     <p>나오는 값:{btn}</p>
//   </div>
//  )

// }

// export default App