const express = require('express');
const app = express();
const port = 3000;

// Body 데이터를 파싱하기 위한 설정 (Code 3.14)
app.use(express.urlencoded({ extended: true }));

// 요청 데이터를 문자열로 변환하는 함수 (Code 3.15)
function stringify(obj) {
  return Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');
}

// GET 요청 처리 (query 사용)
app.get('/', (req, res) => {
  res.send(stringify(req.query));
});

// POST 요청 처리 (body 사용)
app.post('/', (req, res) => {
  res.send(stringify(req.body));
});

// PUT 요청 처리 (body 사용)
app.put('/', (req, res) => {
  res.send(stringify(req.body));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
