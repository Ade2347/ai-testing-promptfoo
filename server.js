const express = require('express');
const app = express();
app.use(express.json());

// Welcome page for browser
app.get('/', (req, res) => {
  res.send('<h1>Mock AI API</h1><p>Use POST /ai</p>');
});

// AI mock endpoint
app.post('/ai', (req, res) => {
  const q = (req.body.query || '').toLowerCase();

  if (q.includes('hello') || q.includes('hi')) {
    return res.json({ reply: "Hello! How can I help you today?" });
  }
  if (q.includes('weather')) {
    return res.json({ reply: "It’s sunny with a chance of testing." });
  }
  return res.json({ reply: "I don’t know, I’m just a mock AI." });
});

const port = 3000;
app.listen(port, () => console.log(`Mock AI running at http://localhost:${port}`));
