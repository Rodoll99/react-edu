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
          <button onClick={ ()=>{
            글제목변경(['여자코트 추천','ㅇㅇ','ㄴㄴ'])}}>글수정</button>
            {/* 버튼을 눌렀을때에 변경함수인 "글제목변경"이 실행됨 */}
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
        </div>
       
        {/* <h4>{ post }</h4>  */}
        {/* jsx 문법 2 변수 넣을땐 중괄호 -> 데이터바인딩 */}
    </div>
  );
}

export default App;
