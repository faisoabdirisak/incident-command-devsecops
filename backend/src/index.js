const express = require('express');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    application: 'Incident Command',
    message: 'Hello from Incident Command API!',
    sprint: 'Sprint 0',
    status: 'running'
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    service: 'incident-command-api'
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Incident Command API running on port ${PORT}`);
});