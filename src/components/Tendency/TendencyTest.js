import React, {useState} from "react";
import { Button } from "../../elements";

import { Link } from "react-router-dom";

const mbti = {"I":0, "E":0, "N":0, "S":0, "T":0, "F":0, "P":0, "J":0 };

const TendencyTest = (props) => {
  const [TestNum, nextTestNum] = useState(0);
  const mbti_s = Object.keys(mbti).filter(key => mbti[key] >= 2).join('')
  // console.log(mbti_s);
  let designation = "";
  if (mbti_s === "ISTJ" || "ESTJ" || "ISFJ") {
    designation = "디테일 장인";
  }
  else if (mbti_s === "ENTJ" || "ESTP") {
    designation = "대담한 혁신가";
  }
  else if (mbti_s === "INFP" || "INFJ") {
    designation = "꿈꾸는 예술가";
  }
  else if (mbti_s === "INTP" || "ISTP" || "INTJ") {
    designation = "창의적인 발명가";
  }
  else if (mbti_s === "ENTP" || "ENFP" || "ESFP") {
    designation = "명랑한 모험가";
  }
  else if (mbti_s === "ISFP" || "ENFJ" || "ESFJ") {
    designation = "부드러운 중재자";
  }
    
  return (
    <div className="grid items-center w-full max-h-screen grid-cols-7 grid-rows-6 bg-white">
      {TestNum === 0 && 
      <div className="col-start-4 row-start-2 text-center">디자이너 성향테스트
        <div className="col-start-4 row-start-3 text-center"><br/>
          <div>나의 디자인 성향은?</div>
          <div>1분 만에 테스트 하기!</div>
        </div>
      </div>
      }
      {TestNum === 1 && 
        <div className="grid items-center justify-center col-start-2 col-end-7 row-start-3">
          <div className="font-bold text-right text-gray-300 pr-7">1 / 12</div>
          <svg width="552" height="50" viewBox="0 0 552 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 21C16 18.2386 18.2386 16 21 16H531C533.761 16 536 18.2386 536 21V21C536 23.7614 533.761 26 531 26H21C18.2386 26 16 23.7614 16 21V21Z" fill="#EDF1F7"/>
            <rect x="16" y="16" width="43" height="10" rx="5" fill="#9262F7"/>
          </svg><br/><br/><br/>
          <div className="text-2xl font-bold text-left"><div className="text-2xl font-bold text-purple-500">Q1</div><br/>
            🏢 회사 첫 출근날, 내 자리를 세팅한 뒤 나는</div><br/><br/><br/><br/><br/>
            <Button size="1" color="1" onClick={()=>{mbti.E += 1; nextTestNum(TestNum + 1);}}>
              주변 사람들에게 먼저 말을 걸어본다 ^ㅁ^</Button><br/>
            <Button size="1" color="1" onClick={()=>{mbti.I += 1; nextTestNum(TestNum + 1);}}>
              다른 사람들이 먼저 말을 걸 때까지 기다린다 /_\</Button>
        </div>
        }
      {TestNum === 2 && 
        <div className="grid items-center justify-center col-start-2 col-end-7 row-start-3">
          <div className="font-bold text-right text-gray-300 pr-7">2 / 12</div>
          {/* <div className="ml-10"> */}
          <svg width="552" height="50" viewBox="0 0 552 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 21C16 18.2386 18.2386 16 21 16H531C533.761 16 536 18.2386 536 21V21C536 23.7614 533.761 26 531 26H21C18.2386 26 16 23.7614 16 21V21Z" fill="#EDF1F7"/>
            <rect x="16" y="16" width="86" height="10" rx="5" fill="#9262F7"/>
          </svg><br/><br/><br/>
          {/* </div> */}
          <div className="text-xl font-bold text-left"><div className="text-2xl font-bold text-purple-500">Q2</div><br/>
            💡 재밌을 것 같은 아이디어가 번뜩 떠올랐을 때 나는</div><br/><br/><br/><br/><br/>
            <Button size="1" color="1" onClick={()=>{mbti.E += 1; nextTestNum(TestNum + 1);}}>
              누구랑 같이 해보면 좋을까? <br/>단톡방에서 같이할 팀원을 찾아본다.</Button><br/>
            <Button size="1" color="1" onClick={()=>{mbti.I += 1; nextTestNum(TestNum + 1);}}>
              혼자가 편하지! <br/>나만의 계획에 따라 진행한다.</Button>
        </div>
        }  
      {TestNum === 3 && 
        <div className="grid items-center justify-center col-start-2 col-end-7 row-start-3">
          <div className="font-bold text-right text-gray-300 pr-7">3 / 12</div>
          <svg width="552" height="50" viewBox="0 0 552 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 21C16 18.2386 18.2386 16 21 16H531C533.761 16 536 18.2386 536 21V21C536 23.7614 533.761 26 531 26H21C18.2386 26 16 23.7614 16 21V21Z" fill="#EDF1F7"/>
            <rect x="16" y="16" width="129" height="10" rx="5" fill="#9262F7"/>
          </svg><br/><br/><br/>
          <div className="text-xl font-bold text-left"><div className="text-2xl font-bold text-purple-500">Q3</div><br/>
            🤔 아무리 디자인 작업을 해도 어딘가 만족스럽지<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;못 할 경우에 나는</div><br/><br/><br/><br/><br/>
            <Button size="1" color="1" onClick={()=>{mbti.E += 1; nextTestNum(TestNum + 1);}}>
              사수나 동료에게 피드백을 요청한다</Button><br/>
            <Button size="1" color="1" onClick={()=>{mbti.I += 1; nextTestNum(TestNum + 1);}}>
              래퍼런스를 계속 찾아보면서 혼자 해결한다</Button>
        </div>
        }
      {TestNum === 4 && 
        <div className="grid items-center justify-center col-start-2 col-end-7 row-start-3">
          <div className="font-bold text-right text-gray-300 pr-7">4 / 12</div>
          <svg width="552" height="50" viewBox="0 0 552 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 21C16 18.2386 18.2386 16 21 16H531C533.761 16 536 18.2386 536 21V21C536 23.7614 533.761 26 531 26H21C18.2386 26 16 23.7614 16 21V21Z" fill="#EDF1F7"/>
            <rect x="16" y="16" width="172" height="10" rx="5" fill="#9262F7"/>
          </svg><br/><br/><br/>
          <div className="text-xl font-bold text-left"><div className="text-2xl font-bold text-purple-500">Q4</div><br/>
            😱 오늘안에 급하게 시안을 바꿔야 한다면</div><br/><br/><br/><br/><br/>
            <Button size="1" color="1" onClick={()=>{mbti.S += 1; nextTestNum(TestNum + 1);}}>
              이전에 했던 작업 중에서 최대한 있어보이게 응용한다</Button><br/>
            <Button size="1" color="1" onClick={()=>{mbti.N += 1; nextTestNum(TestNum + 1);}}>
              시간 없어도 최대한 새로운 아이디어로 수정한다</Button>
        </div>
        }   
      {TestNum === 5 && 
        <div className="grid items-center justify-center col-start-2 col-end-7 row-start-3">
        <div className="font-bold text-right text-gray-300 pr-7">5 / 12</div>
          <svg width="552" height="50" viewBox="0 0 552 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 21C16 18.2386 18.2386 16 21 16H531C533.761 16 536 18.2386 536 21V21C536 23.7614 533.761 26 531 26H21C18.2386 26 16 23.7614 16 21V21Z" fill="#EDF1F7"/>
            <rect x="16" y="16" width="215" height="10" rx="5" fill="#9262F7"/>
          </svg><br/><br/><br/>
          <div className="text-xl font-bold text-left"><div className="text-2xl font-bold text-purple-500">Q5</div><br/>
            💬 내가 선호하는 피드백은</div><br/><br/><br/><br/><br/>
            <Button size="1" color="1" onClick={()=>{mbti.S += 1; nextTestNum(TestNum + 1);}}>
              오른쪽으로 1px 옮겨주시고 색상은 #~로 수정해주세요</Button><br/>
            <Button size="1" color="1" onClick={()=>{mbti.N += 1; nextTestNum(TestNum + 1);}}>
              ~한 느낌으로 적당히 수정해주세요</Button>
        </div>
        }   
      {TestNum === 6 && 
        <div className="grid items-center justify-center col-start-2 col-end-7 row-start-3">
        <div className="font-bold text-right text-gray-300 pr-7">6 / 12</div>
          <svg width="552" height="50" viewBox="0 0 552 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 21C16 18.2386 18.2386 16 21 16H531C533.761 16 536 18.2386 536 21V21C536 23.7614 533.761 26 531 26H21C18.2386 26 16 23.7614 16 21V21Z" fill="#EDF1F7"/>
            <rect x="16" y="16" width="258" height="10" rx="5" fill="#9262F7"/>
          </svg><br/><br/><br/>
          <div className="text-xl font-bold text-left"><div className="text-2xl font-bold text-purple-500">Q6</div><br/>
            😇 마감기한이 다가오는데 작업하기 싫을 때</div><br/><br/><br/><br/><br/>
            <Button size="1" color="1" onClick={()=>{mbti.S += 1; nextTestNum(TestNum + 1);}}>
              이유는 없다. 그냥 하기 싫다.</Button><br/>
            <Button size="1" color="1" onClick={()=>{mbti.N += 1; nextTestNum(TestNum + 1);}}>
              내가 이 일을 왜 해야하지? 도망가면 어떻게 될까? <br/>상상의 나래 시작</Button>
        </div>
        }   
      {TestNum === 7 && 
        <div className="grid items-center justify-center col-start-2 col-end-7 row-start-3">
        <div className="font-bold text-right text-gray-300 pr-7">7 / 12</div>
          <svg width="552" height="50" viewBox="0 0 552 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 21C16 18.2386 18.2386 16 21 16H531C533.761 16 536 18.2386 536 21V21C536 23.7614 533.761 26 531 26H21C18.2386 26 16 23.7614 16 21V21Z" fill="#EDF1F7"/>
            <rect x="16" y="16" width="301" height="10" rx="5" fill="#9262F7"/>
          </svg><br/><br/><br/>
          <div className="text-xl font-bold text-left"><div className="text-2xl font-bold text-purple-500">Q7</div><br/>
            🖥️ 내가 선호하는 작업 방식은</div><br/><br/><br/><br/><br/>
            <Button size="1" color="1" onClick={()=>{ mbti.T += 1; nextTestNum(TestNum + 1);}}>
              그리드를 딱딱 맞추며 가이드라인에 충실한다</Button><br/>
            <Button size="1" color="1" onClick={()=>{ mbti.F += 1; nextTestNum(TestNum + 1);}}>
              가이드라인에는 안맞아도 내 느낌! 감성! 으로 한다</Button>
        </div>
        }   
      {TestNum === 8 && 
        <div className="grid items-center justify-center col-start-2 col-end-7 row-start-3">
        <div className="font-bold text-right text-gray-300 pr-7">8 / 12</div>
          <svg width="552" height="50" viewBox="0 0 552 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 21C16 18.2386 18.2386 16 21 16H531C533.761 16 536 18.2386 536 21V21C536 23.7614 533.761 26 531 26H21C18.2386 26 16 23.7614 16 21V21Z" fill="#EDF1F7"/>
            <rect x="16" y="16" width="344" height="10" rx="5" fill="#9262F7"/>
          </svg><br/><br/><br/>
          <div className="text-xl font-bold text-left"><div className="text-2xl font-bold text-purple-500">Q8</div><br/>
            ✌️ 디자인할 때 내가 자신있는 부분은</div><br/><br/><br/><br/><br/>
            <Button size="1" color="1" onClick={()=>{ mbti.T += 1; nextTestNum(TestNum + 1);}}>
              논리적이고 설득력있는 기획</Button><br/>
            <Button size="1" color="1" onClick={()=>{ mbti.F += 1; nextTestNum(TestNum + 1);}}>
              개성있고 창의적인 아이디어</Button>
        </div>
        }   
      {TestNum === 9 && 
        <div className="grid items-center justify-center col-start-2 col-end-7 row-start-3">
        <div className="font-bold text-right text-gray-300 pr-7">9 / 12</div>
          <svg width="552" height="50" viewBox="0 0 552 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 21C16 18.2386 18.2386 16 21 16H531C533.761 16 536 18.2386 536 21V21C536 23.7614 533.761 26 531 26H21C18.2386 26 16 23.7614 16 21V21Z" fill="#EDF1F7"/>
            <rect x="16" y="16" width="387" height="10" rx="5" fill="#9262F7"/>
          </svg><br/><br/><br/>
          <div className="text-xl font-bold text-left"><div className="text-2xl font-bold text-purple-500">Q9</div><br/>
            👀 동료 디자이너가 새로운 툴을 추천해줬을 때</div><br/><br/><br/><br/><br/>
            <Button size="1" color="1" onClick={()=>{ mbti.T += 1; nextTestNum(TestNum + 1);}}>
              왜 좋은 툴이지? 어떨 때 쓰면 좋은지 서치해보고 결정</Button><br/>
            <Button size="1" color="1" onClick={()=>{ mbti.F += 1; nextTestNum(TestNum + 1);}}>
              좋다니까 한 번 써보자! 일단 써보고 계속 쓸지 말지 결정</Button>
        </div>
        }   
      {TestNum === 10 && 
        <div className="grid items-center justify-center col-start-2 col-end-7 row-start-3">
        <div className="font-bold text-right text-gray-300 pr-7">10 / 12</div>
          <svg width="552" height="50" viewBox="0 0 552 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 21C16 18.2386 18.2386 16 21 16H531C533.761 16 536 18.2386 536 21V21C536 23.7614 533.761 26 531 26H21C18.2386 26 16 23.7614 16 21V21Z" fill="#EDF1F7"/>
            <rect x="16" y="16" width="430" height="10" rx="5" fill="#9262F7"/>
          </svg><br/><br/><br/>
          <div className="text-xl font-bold text-left"><div className="text-2xl font-bold text-purple-500">Q10</div><br/>
            📁 디자인 작업할 때 내 파일은</div><br/><br/><br/><br/><br/>
            <Button size="1" color="1" onClick={()=>{ mbti.J += 1; nextTestNum(TestNum + 1);}}>
              언제나 규칙적으로! <br/>정해진 파일명으로 폴더에 정리한다</Button><br/>
            <Button size="1" color="1" onClick={()=>{ mbti.P += 1; nextTestNum(TestNum + 1);}}>
              최종.psd, 제발최종.psd.. <br/>그 때 그 때 기분에 따라 바탕화면에 널려 있다</Button>
        </div>
        }   
      {TestNum === 11 && 
        <div className="grid items-center justify-center col-start-2 col-end-7 row-start-3">
        <div className="font-bold text-right text-gray-300 pr-7">11 / 12</div>
          <svg width="552" height="50" viewBox="0 0 552 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 21C16 18.2386 18.2386 16 21 16H531C533.761 16 536 18.2386 536 21V21C536 23.7614 533.761 26 531 26H21C18.2386 26 16 23.7614 16 21V21Z" fill="#EDF1F7"/>
            <rect x="16" y="16" width="473" height="10" rx="5" fill="#9262F7"/>
          </svg><br/><br/><br/>
          <div className="text-xl font-bold text-left"><div className="text-2xl font-bold text-purple-500">Q11</div><br/>
            📗 내 포트폴리오에 넣고 싶은 작업은</div><br/><br/><br/><br/><br/>
            <Button size="1" color="1" onClick={()=>{ mbti.J += 1; nextTestNum(TestNum + 1);}}>
              포트폴리오 사이트에서 사람들에게 인기가 많았던 프로젝트</Button><br/>
            <Button size="1" color="1" onClick={()=>{ mbti.P += 1; nextTestNum(TestNum + 1);}}>
              고생했지만 많이 성장할 수 있었던 프로젝트</Button>
        </div>
        }   
      {TestNum === 12 && 
        <div className="grid items-center justify-center col-start-2 col-end-7 row-start-3">
        <div className="font-bold text-right text-gray-300 pr-7">12 / 12</div>
          <svg width="552" height="50" viewBox="0 0 552 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 21C16 18.2386 18.2386 16 21 16H531C533.761 16 536 18.2386 536 21V21C536 23.7614 533.761 26 531 26H21C18.2386 26 16 23.7614 16 21V21Z" fill="#EDF1F7"/>
            <rect x="16" y="16" width="520" height="10" rx="5" fill="#9262F7"/>
          </svg><br/><br/><br/>
          <div className="text-xl font-bold text-left"><div className="text-2xl font-bold text-purple-500">Q12</div><br/>
            ⚠️ '응답 없음' 이 떴을 때 나는</div><br/><br/><br/><br/><br/>
            <Button size="1" color="1" onClick={()=>{ mbti.J += 1; nextTestNum(TestNum + 1);}}>
              Ctrl + S 는 생명! <br/>이미 저장되어 있다</Button><br/>
            <Button size="1" color="1" onClick={()=>{ mbti.P += 1; nextTestNum(TestNum + 1);}}>
              시간을 삭제 당했다 <br/> 울면서 처음부터 새로 작업해야 한다</Button>
        </div>
        }
      {TestNum >= 13 && 
        <div className="grid items-center justify-center col-start-4 col-end-5 row-start-3">
          <svg width="552" height="50" viewBox="0 0 552 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 21C16 18.2386 18.2386 16 21 16H531C533.761 16 536 18.2386 536 21V21C536 23.7614 533.761 26 531 26H21C18.2386 26 16 23.7614 16 21V21Z" fill="#EDF1F7"/>
            <rect x="16" y="16" width="520" height="10" rx="5" fill="#9262F7"/>
          </svg><br/><br/><br/>
          <div className="text-center">"{designation}"<br/><br/> 칭호를 얻으셨습니다!</div><br/>
              <Link to="/MyInterests">
                <div className="grid items-center col-start-4 col-end-5 row-start-3">
                <Button size="1" color="1">
                    확인
                </Button></div>
              </Link>
        </div>
        }          
      <div className="grid items-center col-start-4 row-start-5">
          {TestNum === 0 && <Button size="2" color="3" onClick={()=>{nextTestNum(TestNum + 1)}}>
            시작하기
          </Button>
          }
      </div>
      <div className="col-start-7 row-start-6">
      {TestNum <= 12 && <Link to="/MyInterests">다음에 하기</Link>}
      </div>
    </div>
  );
};

export default TendencyTest;
