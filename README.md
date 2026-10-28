# AlPa의 자기소개 사이트

React + JavaScript + Vite로 만든 AlPa의 자기소개 사이트입니다. 사이트 이름은 `my portfolio.`로 유지합니다.
자기소개 메뉴·버튼은 별도의 자기소개 페이지(`#/about`)로, 포트폴리오 메뉴·버튼은 포트폴리오 목록 페이지(`#/portfolio`)로 이동합니다.
각 페이지에서 홈으로 돌아가기와 브라우저 뒤로 가기·새로고침을 사용할 수 있습니다.
자기소개는 한 줄 소개, 관심사와 취미, 강점, 배우고 싶은 것, 활동과 작품, 목표 순서로 구성됩니다.
AlPa의 관심사와 취미는 운동, 강점은 농구, 배우고 싶은 것은 자격증 관련 공부, 목표는 취업입니다.
자격증 종류와 희망 직종 등 아직 정하지 않은 내용은 임의로 추가하지 않습니다. 전화번호·주소·생년월일은 넣지 않습니다.
현재 등록된 작품은 없습니다. 사진 없이도 사용할 수 있으며 사진은 나중에 `public/`에 추가할 수 있습니다.
작품은 `src/App.jsx`의 `projects` 배열에 추가합니다. 각 항목에는 `number`, `category`, `title`, `description`, `style`, `overview`, `goal`, `process`(문자열 배열), `learning`을 넣습니다.
`number`와 `style`은 작품마다 다르게 정합니다. 기존 장식은 `website`, `idea`, `creative`를 지원합니다.
작품을 추가하면 목록 카드와 `#/portfolio/<style>` 상세 페이지에 함께 반영됩니다.

## 내 프로젝트로 시작하기

1. GitHub의 **Use this template → Create a new repository**로 자신의 저장소를 만듭니다.
2. 새로 만든 저장소를 컴퓨터로 복제하고 Visual Studio Code에서 엽니다.
3. 아래 실행 방법에 따라 사이트를 실행합니다.
4. GitHub Copilot과 함께 자기소개, 프로젝트 설명, 색상과 이미지를 자신의 내용으로 바꿉니다.

소개와 작품에는 직접 확인한 경험만 담고, 정하지 않은 내용을 임의로 채우지 마세요.

## 실행하기

1. Node.js 24 LTS를 설치합니다.
2. Visual Studio Code에서 복제한 프로젝트 폴더를 엽니다.
3. 터미널에서 다음 명령을 실행합니다.

```sh
npm install
npm run dev
```

터미널에 표시되는 주소를 브라우저에서 엽니다. 개발 서버는 `Ctrl + C`로 종료합니다.

## 수정할 파일

- `src/App.jsx`: 화면 내용과 React 컴포넌트
- `src/App.css`: 화면 스타일
- `src/index.css`: 전체 공통 스타일
- `public/`: 직접 사용할 이미지 등 정적 파일

파일을 수정하고 저장하면 실행 중인 브라우저에 반영됩니다.

## 확인 명령

```sh
npm run lint
npm run build
```

`npm run build`는 배포용 파일을 `dist` 폴더에 만듭니다.
