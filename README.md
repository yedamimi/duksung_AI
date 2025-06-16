# 🎯 AI 활동 추천 서비스

사용자의 **기분, 시간, 장소**를 입력받아 Google Gemini API를 활용해 **오늘 할 만한 활동을 추천**해주는 인공지능 서비스입니다.

이 서비스는 HTML, CSS, JavaScript로 프론트엔드를 구현하고, Express.js 백엔드를 통해 Gemini API와 연동됩니다. 프론트엔드는 **GitHub Pages**, 백엔드는 **Vercel**에 배포되어 있습니다.

---

## 🧠 주요 기능

- 사용자의 기분, 시간, 장소에 따라 AI가 활동 추천
- Gemini 1.5 Flash 모델을 사용하여 창의적이면서도 현실적인 제안 제공
- 간단하고 직관적인 입력 폼 UI
- GitHub Pages를 통해 누구나 접근 가능

---

## 🛠️ 사용 기술

### 프론트엔드
- HTML5 / CSS3 / JavaScript (Vanilla)
- GitHub Pages 배포

### 백엔드
- Node.js + Express.js
- Google Gemini API (`@google/genai`)
- Vercel 배포

---

## 📦 배포 링크

- 🔗 **웹 페이지 (GitHub Pages)**: [https://github.com/yedamimi/duksung_AI-api)
- ⚙️ **백엔드 API (Vercel)**: [https://vercel.com/yeadamkims-projects/assign2/FkWSa67vzmFDie2ButJK3DCkcT17)
- [https://assign2-yedamimi-yeadamkims-projects.vercel.app/)

---

## 📋 사용 방법

1. 웹 페이지 접속
2. 기분, 시간, 장소를 입력
3. "추천받기" 클릭
4. AI가 추천하는 활동이 아래에 표시됨

---

## 💡 구현 주안점

- 사용자 입력값을 API에 POST 요청하여 처리
- Gemini 모델을 활용한 자연어 생성
- 과하지 않은 추천을 유도하는 프롬프트 설계
- 서버 에러 및 예외 상황에 대한 처리

---

## 📁 폴더 구조

project-root/
├── index.html         # 프론트엔드 진입점
├── style.css          # 프론트 디자인
├── client.js          # API 요청 및 응답 처리
├── api/               # 백엔드 API 폴더
│   └── duksungAI.js   # Express 서버 및 Gemini API 연동
├── README.md          # 프로젝트 설명


