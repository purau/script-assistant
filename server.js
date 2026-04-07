const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const API_KEY = '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';

app.post('/chat', async (req, res) => {
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(req.body)
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log('PuraU Script Assistant running on port 3000'));
