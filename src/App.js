import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

/* eslint-disable */ 
// warning 메세지 다 지우는 기능

function App() {
  
  // 자료를 잠깐 보관할때에 사용하는 state
  // 1. import {useState}
  // 2.useState(보관할 자료)
  // 3. let[작명,작명]

  let [a,글제목변경] = useState(['역삼 대방어 맛집','리액트 독학','JSX'])
  // array 로 저장해놓고 index 번호로 사용가능

  // a -> state 에 보관했던 자료
  // b -> state 변경 도와주는 함수

  // state 왜 써야하는지 ? -> state 를 쓰던 html 은 자동으로 재 렌더링 됨
  // 변동 시 자동으로 html 에 반영되게 만들고 싶으면 state 사용

  // 참고 - Destructuring 문법
  let num = [1, 2];
  // let c = num[0];
  // let d = num[1]; 대신에 밑의 함수를 이용
  let [c,d] = [1,2];

  let [logo, setLogo] = useState('ReactBlog');
  // 블로그 제목은 자주 바뀌는 항목이 아님 -> 그래서 굳이 state를 사용 할 필요가 없음
  // -> 자주 변경될거같은 부분은 state 로 만드는게 좋음

  let post = '블로그 제목';
  // 만약 잘못 치거나 에러가 났다면 브라우저 내에서 알려주거나 터미널에서 에러표시 또는 개발자도구에서 에러 표시

  // 서버에서 가져온 블로그 제목
  // 원래라면 document.querySelector('h4').innerHTML = post;

  let [좋아요갯수 ,좋아요갯수변경]=useState(0);


  // 좋아요 갯수 세는 함수

  return (
    <div className="App">
      <div className="black-nav">
        {/* js안에서 http 를 쓸수있음 -> jsx문법 */}
        <h4>{logo}</h4>
        {/* style 넣을땐 style={{이름 :'값'}} */}
      </div>
        {/* 글목록 ui 만들기 */}

        <div className="list">
          {/* 좋아요 버튼 구현 */}
          <h4>{a[0]} <span onClick={ ()=>{좋아요갯수변경(좋아요갯수+1)}}>❤️‍🔥</span> {좋아요갯수} </h4>
          {/* 온클릭 핸들러 onClick={} 안에는 함수 이름을 넣어야 함 */}

          {/* 숙제 : 버튼을 눌렀을때에 첫번째 글의 제목이 "여자 코트 추천" 으로 바뀌도록 만들기 */}
          <button onClick={ ()=>{
            
            let copy = [...a];
            // copy 문법 a라는 배열을 카피
            // [...변수명]괄호를 벗기고 다시 씌우는 문법
            // 기존 state 가 array/object 면 shellow copy 를 이용 해야함
            copy[0] = '여자 코트 추천';
            글제목변경(copy);

            //array/object 특징
            let arr =[1,2,3];
            // -> 123 이라는 배열을 어딘가에 저장을 해놓은것임 ( arr 이라는 변수에 저장한게 아님 )

            }}>글수정</button>
            {/* 버튼을 눌렀을때에 변경함수인 "글제목변경"이 실행됨 */}

            <button onClick={ ()=>{
          
              let copy1=[...a];
              // spread 연산자를 사용해 배열 'a' 를 얕게 복사
              copy1 = copy1.sort();
              // 복사한 배열을 sort 메서드를 이용해 정렬
              글제목변경(copy1);
              // 정렬된 배열을 '글제목변경' 함수를 통해 react 의 state로 업데이트
            }}>
              글 정렬
            </button>
          <p>11월 16일 발행</p>
        </div>
        <div className="list">
          <h4>{a[1]}</h4>
          {/* state 에 저장했던 ' 논현 대방어 맛집 ' 이 나옴 */}
          <p>11월 16일 발행</p>
        </div>
        <div className="list">
          <h4>{a[2]}</h4>
          <p>11월 16일 발행</p>
          {/* 상세페이지 만들기 */}
        </div>
            {/* <div className='modal'>
              <h4>제목</h4>
              <p>날짜</p>
              <p>상세 내용</p>
            </div> 이걸 컴포넌트를 이용해 <Modal> 이라는 태그로 만들기*/}
          <Modal>
          </Modal>
    
           <Comment>

           </Comment>
          {/* 컴포넌트로 어떤걸 만들어야 하는지?
              1. 반복적인 html 축약할 때
              2. 큰 페이지 만들 때
              3. 자주 변경되는 것들

              컴포넌트의 단점
              1. state를 가져다 쓸 때에 문제가 발생할 수 있음
              ex) app 함수에 있던 변수는 Modal함수에서 가져다 쓸 수 없음
          */}

        {/* <h4>{ post }</h4>  */}
        {/* jsx 문법 2 변수 넣을땐 중괄호 -> 데이터바인딩 */}
    </div>
  );
}
function Modal(){
  // 컴포넌트를 만들때에는 function app 바깥에 함수를 만들어줌
  return (
    <div className='modal'>
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세 내용</p>
  </div>
  // 원하는 html을 return 안에 넣어주면 컴포넌트 생성 완료
  // <> </> 도 문법상 사용 가능(쓸데없는 div를 만들지않기 위해)
  )
}
function Comment(){
  return(
    <div className='comment'>
      <h4>닉네임</h4>
      <p>블로그 잘 봤습니다.다음부턴 유료결제네요</p>
    </div>
  )
}

export default App;
