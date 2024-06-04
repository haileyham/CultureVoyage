# <span id="top">🎡 Culture Voyage</span>

### 🔗 [Culture Voyage 바로가기](https://culture-voyage.vercel.app/)

<br/>

## 📢 Culture Voyage 서비스 소개

<img src="https://raw.githubusercontent.com/haileyham/CultureVoyage/d5f5c50336ec79a58b9792f2613b641d3ddcec51/client/public/img/cultureVoyage.jpg" alt="culture-voyage 이미지" style="max-width:700px">

## 📖 개요

### 🎈 프로젝트

- 프로젝트명 : Culture Voyage
- 프로젝트 기간 : 2023.09

### 🐣 특징 및 성과
- SEO 개선으로 평가 100% 달성
- 추천 검색어 기능을 통해 사용자 이용 편리성 증대
- useDebounce를 통한 API 호출 최소화 (키워드 '크리스마스' 검색)
  - API 호출 횟수가 13회에서 1회로 약 92.31% 감소
  - 평균 응답시간 187.8ms -> 64.8ms로 약 65.5% 개선
- session을 활용하여 기존 API 호출한 키워드의 경우 재사용 가능
  - API 호출 횟수 21회 -> 1회로 감소(키워드 '클래식' 2회 검색)
  - 서버 부담을 줄이고 시스템 성능 및 안정성 향상 <br/>
  #### 🐤 참고 : [debounce 및 session 성능개선 ISSUE](https://github.com/haileyham/CultureVoyage/issues/1)
- Infinite Scroll 성능 최적화
  - DOM 크기 및 메모리 사용량 약 32% 감소
  - 최적화된 네트워크 사용으로 약 23% 네트워크 사용량 감소
- Lazy Loading & Suspense 성능 최적화
  - 초기 로드 시간 약 32% 감소
  - 상호작용 시간(TTI) 15% 개선
  - Lighthouse 84점 -> 92점까지 개선
  #### 🐤 참고 : [Infinite Scroll, Lazy Loading & Suspense](https://github.com/haileyham/CultureVoyage/issues/2)
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

# 🐤 성능 개선
### 🐤 [debounce 및 session 성능개선 ISSUE](https://github.com/haileyham/CultureVoyage/issues/1)
- 요약
  - debounce 측정 결과 '크리스마스' 키워드의 경우 API 호출 횟수 92.31% 감소, 평균 응답 시간은 65.5% 개선 <br/>
  - session '클래식' 키워드 기준 API 호출횟수는 21회에서 1회로 대폭 감소
### 🐤 [Infinite Scroll, Lazy Loading & Suspense](https://github.com/haileyham/CultureVoyage/issues/2)
- 요약
  - Lighthouse 84점 -> 92점까지 개선
  - DOM 크기 및 메모리 사용량 약 32% 감소
  - 최적화된 네트워크 사용으로 약 23% 네트워크 사용량 감소
  - 초기 로드 시간 약 32% 감소
  - 상호작용 시간(TTI) 15% 개선


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

<!-- # 🎪 기능 시현
<p align="right"><a href="#top">TOP 🔼</a></p> -->
