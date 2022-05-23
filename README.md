# D+ 

### **“디자이너를 위한, 디자이너에 의한 매력적인 포트폴리오 사이트는 없을까?”**

디자이너 커뮤니티 사이트, <br>
**D+ 를 체험해보세요!
<br>
<!-- [디플러스 바로가기](https://dplusday.com/)**<br> -->

<br>
<img width="905" alt="플러스하다" src="https://user-images.githubusercontent.com/79740505/161507027-ac3024b5-44cb-48e2-a1b8-f2f609336e97.png">

<br>

## 1. D+ 소개<br/>
> 안녕하세요! 디자이너들의 손쉬운 포트폴리오 제작과 디자이너들의 만남을 도와주는 D Plus 입니다 :)<br/>

> **디자인을 플러스하다 D plus! 👩‍🎨**<br/>
디자인 작업하기만 해도 바쁜데, 이력서에 포트폴리오까지 🤦‍♀️ <br/>
요즘은 또 포트폴리오를 웹사이트로 만든다는데 나는 코딩할 줄 모르는 코린이인걸..? 😮‍💨<br/>
D Plus는 디자이너들의 이러한 고민을 줄여드리기 위해 만들어진 디자이너 포트폴리오 제작 서비스입니다!<br/>
이젠 D Plus에서 쉽고 간단하게 만들어보세요 🥳<br/>
>

## 2. Team D+ 소개
|  [이승호](https://github.com/vivala0519)  |  [이혜림](https://github.com/matty255)  |  


<br>

## 3. 기술 스택
<div align="center">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=flat-square&logo=react&logoColor=white"> 
<img src="https://img.shields.io/badge/create%20react%20app-09D3AC?style=flat-square&logo=create%20react%20app&logoColor=white"> 
 <img src="https://img.shields.io/badge/html5-E34F26?style=flat-square&logo=html5&logoColor=white"> 
 <img src="https://img.shields.io/badge/css-1572B6?style=flat-square&logo=css3&logoColor=white">  
  <img src="https://img.shields.io/badge/github-181717?style=flat-square&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/github%20actions-181717?style=flat-square&logo=github%20actions&logoColor=white">
 <img src="https://img.shields.io/badge/amazon%20aws-232F3E?style=flat-square&logo=amazon%20aws&logoColor=white">
 <img src="https://img.shields.io/badge/amazon%20s3-232F3E?style=flat-square&logo=amazon%20s3&logoColor=white">
 <img src="https://img.shields.io/badge/cloud%20front-00A8E1?style=flat-square&logo=amazon%20aws&logoColor=white">
  <img src="https://img.shields.io/badge/react%20router%20dom-CA4245?style=flat-square&logo=react%20router&logoColor=white">
 <img src="https://img.shields.io/badge/mui-007FFF?style=flat-square&logo=mui&logoColor=white">
   <img src="https://img.shields.io/badge/tailwind%20css-06B6D4?style=flat-square&logo=tailwind%20css&logoColor=white">
  <img src="https://img.shields.io/badge/react%20slick-F4C51C?style=flat-square&logo=&logoColor=white">
  <img src="https://img.shields.io/badge/react%20drop%20zone-F4C51C?style=flat-square&logo=&logoColor=white">
    <img src="https://img.shields.io/badge/react%20beautiful%20dnd-FF6D70?style=flat-square&logo=&logoColor=white">
        <img src="https://img.shields.io/badge/sweet%20alert2-00897B?style=flat-square&logo=&logoColor=white">
        
</div>

**`Front-end`**
- [React Repository이동](https://github.com/https-github-com-Allaccept12/D_Team_Front)

**`Back-end`**
- [Spring Repository이동](https://github.com/https-github-com-Allaccept12/D-Back)


## 4. 아키텍쳐


## 5. 개발 포인트

1. 작품을 올리고 공유하는 기능(crud)
2. 사용자를 팔로우/팔로잉하고 정보를 공유하는 커뮤니티 기능(질문/답변, 스크랩, 북마크)
3. 포트폴리오 템플릿 기능

## 6. 설계

위키 링크

1. 폴더 구조
2. 디자인 시스템
3. 트러블 슈팅
고객피드백을 반영하여 UX 개선 사례
- 리액트 앱은 어떤 페이지에서 스크롤을 내리면 다른 페이지에서도 그 위치가 유지되어 어색합니다. 이를 개선하기 위해 index.js에 ScrollTop 기능을 적용하여 일괄적으로 (0,0) 좌표로 보냈으나… 커뮤니티 페이지의 전면 슬라이드 크기, 마이페이지의 내 프로필 크기 때문에 스크롤 위치가 초기화되는 것이 더 불편하다는 유저 피드백이 들어왔습니다. 이에 react-router-dom6 에서 제공하는 useLocation에다 pathname.startWith() 함수를 사용하여 각 페이지에 맞춘 스크롤뷰를 구현했습니다.

- 팔로우/스크랩 기능은 로그인 상태이면서 나 자신이 아닌 유저를 클릭할 때만 가능한데 후자의 것만 예외처리가 되어있어 로그인하지 않고 구경하는 유저가 버튼을 눌렀을때에도 변한 것 처럼 보인다는 문제가 발생하였습니다. 이에 12개의 경고창을 일괄추가하게 되었는데, 이때 개발시간을 줄이기 위해 경고 모달을 쉽게 생성해주는 SweetAlert2 라이브러리를 도입해서 기능과 UI를 개선할 수 있었습니다.

- 반응형 웹 적용시 크롬 개발자도구를 이용하여 아이폰, 갤럭시, 아이패드, 그리고 원화면으로 레이아웃을 작업하였는데 서버 배포 후 다른 멤버의 데스크톱 화면에서 사이트가 아이패드 버전으로 간소화되어 보이는 것을 확인. 원인은 제 모니터(26인치)와 멤버의 맥북(13인치)의 차이였습니다. 데스크톱 사용자를 목표로 제작된 프로젝트의 목적성을 지키기 위해 일부 레이아웃(유사한 질문, 팔로우 등)을 재배치하였습니다.

5. 광고용 미니 테스트 사이트 https://dplustest-d15f5.web.app/




