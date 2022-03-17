import React, {useState} from "react";
import { Button } from "../../elements";

import { Link } from "react-router-dom";

const mbti = {"I":0, "E":0, "N":0, "S":0, "T":0, "F":0, "P":0, "J":0 };

const TendencyTest = (props) => {
  const [TestNum, nextTestNum] = useState(0);
  const mbti_s = Object.keys(mbti).filter(key => mbti[key] >= 2).join('')
  console.log(mbti_s);
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
    <div className="grid items-center w-full max-h-screen grid-cols-7 grid-rows-6 bg-yellow-400">
      <div className="col-start-4 row-start-2">디자이너 성향테스트</div>
      {TestNum === 0 && <div className="col-start-4 row-start-3">
          <div>나의 디자인 성향은?</div>
          <div>1분 만에 테스트 하기!</div>
        </div>
      }
      {TestNum === 1 && <div className="grid items-center col-start-2 col-end-7 row-start-3">
          <div className="text-center">1. 회사 첫 출근일에 내 자리를 세팅한 후</div><br/>
            <Button size="1" color="1" onClick={()=>{mbti.E += 1; nextTestNum(TestNum + 1);}}>
              주변 사람들에게 먼저 말을 걸어본다.</Button><br/>
            <Button size="1" color="1" onClick={()=>{mbti.I += 1; nextTestNum(TestNum + 1);}}>
              다른 사람들이 먼저 말을 걸 때까지 기다린다.</Button>
          </div>
        }
      {TestNum === 2 && <div className="grid items-center col-start-2 col-end-7 row-start-3">
          <div className="text-center">2. 재밌을 것 같은 아이디어가 번뜩 떠올랐을 때 나는</div><br/>
            <Button size="1" color="1" onClick={()=>{mbti.E += 1; nextTestNum(TestNum + 1);}}>
              누구랑 같이 해보면 좋을까? 카톡창에서 같이할 팀원을 찾아본다.</Button><br/>
            <Button size="1" color="1" onClick={()=>{mbti.I += 1; nextTestNum(TestNum + 1);}}>
              혼자가 편하지! 나만의 계획에 따라 진행한다.</Button>
          </div>
        }  
      {TestNum === 3 && <div className="grid items-center col-start-2 col-end-7 row-start-3">
          <div className="text-center">3. 아무리 디자인 작업을 해도 어딘가 만족스럽지 못 할 때</div><br/>
            <Button size="1" color="1" onClick={()=>{mbti.E += 1; nextTestNum(TestNum + 1);}}>
              사수나 동료에게 피드백을 요청한다.</Button><br/>
            <Button size="1" color="1" onClick={()=>{mbti.I += 1; nextTestNum(TestNum + 1);}}>
              D+, 비핸스, 핀터레스트 등 계속 래퍼런스를 찾아본다.</Button>
          </div>
        }
      {TestNum === 4 && <div className="grid items-center col-start-2 col-end-7 row-start-3">
          <div className="text-center">4. 오늘 퇴근 전까지 급하게 시안을 바꿔야 한다면</div><br/>
            <Button size="1" color="1" onClick={()=>{mbti.S += 1; nextTestNum(TestNum + 1);}}>
              이전에 했던 작업 중에서 최대한 있어보이게 응용한다.</Button><br/>
            <Button size="1" color="1" onClick={()=>{mbti.N += 1; nextTestNum(TestNum + 1);}}>
              시간 없어도 최대한 새로운 아이디어로 수정한다.</Button>
          </div>
        }   
      {TestNum === 5 && <div className="grid items-center col-start-2 col-end-7 row-start-3">
          <div className="text-center">5. 내가 선호하는 피드백은</div><br/>
            <Button size="1" color="1" onClick={()=>{mbti.S += 1; nextTestNum(TestNum + 1);}}>
              오른쪽으로 1px 옮겨주시고 색상은 #~로 수정해주세요.</Button><br/>
            <Button size="1" color="1" onClick={()=>{mbti.N += 1; nextTestNum(TestNum + 1);}}>
              ~한 느낌으로 적당히 수정해주세요.</Button>
          </div>
        }   
      {TestNum === 6 && <div className="grid items-center col-start-2 col-end-7 row-start-3">
          <div className="text-center">6. 마감기한이 다가오는데 작업하기 싫을 때</div><br/>
            <Button size="1" color="1" onClick={()=>{mbti.S += 1; nextTestNum(TestNum + 1);}}>
              이유는 없다. 그냥 하기 싫다.</Button><br/>
            <Button size="1" color="1" onClick={()=>{mbti.N += 1; nextTestNum(TestNum + 1);}}>
              내가 이 일을 왜 해야하지? 하다가 도망가면 어떻게 될까? 상상의 나래 시작</Button>
          </div>
        }   
      {TestNum === 7 && <div className="grid items-center col-start-2 col-end-7 row-start-3">
          <div className="text-center">7. 내가 선호하는 작업 방식은</div><br/>
            <Button size="1" color="1" onClick={()=>{ mbti.T += 1; nextTestNum(TestNum + 1);}}>
              그리드를 딱딱 맞추며 가이드라인에 충실한다.</Button><br/>
            <Button size="1" color="1" onClick={()=>{ mbti.F += 1; nextTestNum(TestNum + 1);}}>
              가이드라인에는 안맞아도 내 느낌! 감성! 으로 한다.</Button>
          </div>
        }   
      {TestNum === 8 && <div className="grid items-center col-start-2 col-end-7 row-start-3">
          <div className="text-center">8. 디자인할 때 내가 자신있는 부분은</div><br/>
            <Button size="1" color="1" onClick={()=>{ mbti.T += 1; nextTestNum(TestNum + 1);}}>
              논리적이고 설득력있는 기획</Button><br/>
            <Button size="1" color="1" onClick={()=>{ mbti.F += 1; nextTestNum(TestNum + 1);}}>
              개성있고 창의적인 아이디어</Button>
          </div>
        }   
      {TestNum === 9 && <div className="grid items-center col-start-2 col-end-7 row-start-3">
          <div className="text-center">9. 동료 디자이너가 새로운 툴을 추천해줬을 때 나는</div><br/>
            <Button size="1" color="1" onClick={()=>{ mbti.T += 1; nextTestNum(TestNum + 1);}}>
              왜 좋은 툴이지? 어떨 때 쓰면 좋은지 서치햅고 결정</Button><br/>
            <Button size="1" color="1" onClick={()=>{ mbti.F += 1; nextTestNum(TestNum + 1);}}>
              좋다니까 한 번 써보자! 일단 써보고 계속 쓸지 말지 결정</Button>
          </div>
        }   
      {TestNum === 10 && <div className="grid items-center col-start-2 col-end-7 row-start-3">
          <div className="text-center">10. 디자인 작업할 때 내 파일은</div><br/>
            <Button size="1" color="1" onClick={()=>{ mbti.J += 1; nextTestNum(TestNum + 1);}}>
              언제나 규칙적으로! 정해진 파일명으로 폴더에 정리한다.</Button><br/>
            <Button size="1" color="1" onClick={()=>{ mbti.P += 1; nextTestNum(TestNum + 1);}}>
              최종.psd, 제발최종.psd 그 때 그 때 내 기분에 따라 바탕화면에 널려 있다.</Button>
          </div>
        }   
      {TestNum === 11 && <div className="grid items-center col-start-2 col-end-7 row-start-3">
          <div className="text-center">11. 내 포트폴리오에 넣고 싶은 작업은</div><br/>
            <Button size="1" color="1" onClick={()=>{ mbti.J += 1; nextTestNum(TestNum + 1);}}>
              포트폴리오 사이트에서 사람들에게 인기가 많았던 프로젝트</Button><br/>
            <Button size="1" color="1" onClick={()=>{ mbti.P += 1; nextTestNum(TestNum + 1);}}>
              고생했지만 많이 성장할 수 있었던 애증의 프로젝트</Button>
          </div>
        }   
      {TestNum === 12 && <div className="grid items-center col-start-2 col-end-7 row-start-3">
          <div className="text-center">12. '응닶 없음' 이 떴을 때 나는</div><br/>
            <Button size="1" color="1" onClick={()=>{ mbti.J += 1; nextTestNum(TestNum + 1);}}>
              Ctrl + S 는 생명! 이미 저장했다.</Button><br/>
            <Button size="1" color="1" onClick={()=>{ mbti.P += 1; nextTestNum(TestNum + 1);}}>
              시간을 삭제 당했다. 울면서 처음부터 새로 작업해야 한다.</Button>
          </div>
        }
      {TestNum >= 13 && <div className="grid items-center col-start-2 col-end-7 row-start-3 mx-auto">
          <div className="text-center">"{designation}"<br/> 칭호를 얻으셨습니다!</div><br/>
              <Link to="/">
                <Button size="1" color="1">
                    확인
                </Button>
              </Link>
          </div>
        }          
      <div className="col-start-4 row-start-5">
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
