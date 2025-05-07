const express = require('express');
const app = express();
const port = 3000;

// 팩토리얼 계산 함수
function factorial(n) {
  if (n < 0) return 'undefined';
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

app.get('/factorial', (req, res) => {
  const num = req.query.number;
  res.redirect(`/factorial/${num}`);
});

// /factorial/:number → factorial 계산 결과 반환
app.get('/factorial/:number', (req, res) => {
  const num = parseInt(req.params.number, 10);
  const result = factorial(num);
  res.send(`Factorial of ${num} is ${result}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});