<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <title>오늘 뭐하지?</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>오늘 뭐하지? 🤔</h1>
    <form id="activity-form">
      <label>지금 기분은?</label>
      <input type="text" id="mood" required />

      <label>지금 시간은?</label>
      <input type="text" id="time" placeholder="예: 오후 3시" required />

      <label>장소는 어디인가요?</label>
      <input type="text" id="location" placeholder="예: 집 / 학교 / 카페" required />

      <button type="submit">추천 받기</button>
    </form>

    <div id="result" class="result"></div>
  </div>

  <script src="client.js"></script>
</body>
</html>
