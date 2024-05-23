# <span id="top">🎡 Culture Voyage</span>

### 🔗 [Culture Voyage 바로가기](https://culture-voyage.vercel.app/)

<br/>

## 📢 Culture Voyage 서비스 소개

## 📖 개요

### 🎈 프로젝트

- 프로젝트명 : Culture Voyage
- 프로젝트 기간 : 2023.09

### 🐣 특징 및 성과
- SEO 개선으로 평가 100% 달성
- 추천 검색어 기능을 통해 사용자 이용 편리성 증대
- useDebounce를 통한 API 호출 최소화
- session을 활용하여 기존 API 호출한 키워드의 경우 재사용 가능
- mobile input 입력 시 확대 방지로 인한 사용자 편리성 증대
- 반응형 웹을 통한 사용자 친화적

### ⚙ 개발 환경

  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white"/><img src="https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white"><img src="https://img.shields.io/badge/Scss-CC6699?style=for-the-badge&logo=Sass&logoColor=white"> <br/><img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"><img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"><img src="https://img.shields.io/badge/figma-f76c62?style=for-the-badge&logo=figma&logoColor=white"><img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">


<p align="right"><a href="#top">TOP 🔼</a></p>

## 📖 주요 기능 및 페이지

### [server]
#### 💡 Node.js - server
- API Mixed Content 문제로 인한 API 통신용 Server 생성 및 배포
- cors 미들웨어 추가하여 CORS 위험도 감소 및 보안 증대

### [Main]
#### 💡 서울시 문화행사 공공데이터 API 활용
#### 💡 useDebounce 성능 개선
- 검색 시 debounce를 통해 api 호출 최소화
#### 💡 session 활용하여 검색 내용 저장 및 활용 - API 호출 부담 ↓
- 기존에 검색하여 api 호출한 키워드의 경우 session 활용하여 재검색 시, api 재호출하지 않아 부담 최소화
#### 💡 추천 검색어 기능
- 검색창 입력시 api 호출되며 해당 검색어에 대한 키워드 반영하여 추천 검색어 표시
- 추천 검색어의 경우 키보드 위아래 ↑ / ↓ / tab / enter 키를 이용하여 이동 가능하게 하여 사용자 편리성 증대

<p align="right"><a href="#top">TOP 🔼</a></p>

# 🎃 트러블 슈팅
## 🎃 mixed content & HTTPS 설정 문제
### ▶ 요약
배포 사이트에서 공공데이터 api 통신 제대로 하지 못하는 문제
### ▶ 어떤 문제?
- Failed to load resource: net::ERR_SSL_PROTOCOL_ERROR
- SSL 인증서 문제 또는 HTTPS 설정 문제로 인한 발생
### ▶ 해결 방안
- API 호출용 서버를 새로 만들고 배포 후 연결하여 문제 해결

<p align="right"><a href="#top">TOP 🔼</a></p>
<br/>

# 🎪 기능 시현


<p align="right"><a href="#top">TOP 🔼</a></p>
