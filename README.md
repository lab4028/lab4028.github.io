# Report 4028 홈페이지 사용법

## 처음 한 번만: 공개하기
1. GitHub에 가입하고 새 저장소를 만든다. 이름은 **`아이디.github.io`**로 하고 Public으로 설정한다.
2. 저장소 화면에서 **Add file → Upload files**를 누른다. 이 폴더 안의 내용을 전부 끌어다 놓고 **Commit changes**를 누른다.
   - `.github` 폴더가 꼭 함께 올라가야 한다. 숨김 폴더라서 안 보이면 Mac은 Finder에서 `Cmd+Shift+.`, Windows는 보기 → 숨긴 항목을 켠다.
3. 저장소의 **Settings → Pages → Source**를 **GitHub Actions**로 바꾼다.
4. **Actions** 탭에서 배포가 끝나기를 1~2분 기다린 뒤 `https://아이디.github.io`에 접속한다.

## 글 올리기
- 본글은 `content/report/`, 메모는 `content/memo/` 폴더에 `.md` 파일을 추가한다.
- 파일 이름 예시: `2026-12-02-nvidia-q3.md` (영문·숫자·하이픈 권장)
- 파일 맨 위에는 아래 형식을 넣는다.

```
---
title: "글 제목"
date: 2026-12-02
description: "목록에 보일 한 줄 요약"
tickers: ["NVDA"]
---

본문은 여기부터 쓴다.
```

- 이미지는 `static/images/`에 올리고 본문에서 `![설명](/images/파일이름.png)`로 불러온다.
- GitHub 웹에서 **Add file → Create new file**로 바로 써도 된다. Commit하면 1~2분 뒤 사이트에 반영된다.
- 예시 글 두 개(`2026-11-25-example-...md`)는 실제 글을 올린 뒤 지우면 된다.

## 방문자 통계
이 사이트에는 방문자 분석 도구가 없다. 조회수는 어디에도 기록되거나 표시되지 않는다.
