const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <form method="post" action="/login">
      <div>
        <label>Username:</label>
        <input name="username" type="text" />
      </div>
      <div>
        <label>Password:</label>
        <input name="password" type="password" />
      </div>
      <div>
        <label>Introduce yourself:</label>
        <textarea name="introduction"></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/login', (req, res) => {
  const { username, password} = req.body;
  res.send(`
    Username: ${username}<br>
    Password: ${password}<br>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
