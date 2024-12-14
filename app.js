const express = require('express');
const app = express();
const port = 3000;

// Sample Vastu Kaar List (this can be replaced by data from a database or external API)
const vastukaarList = [
  { id: 1, name: 'Vastu Shastra', description: 'Traditional science of architecture and design.' },
  { id: 2, name: 'Vastu Tips', description: 'Basic principles and tips for home/office design.' },
  { id: 3, name: 'Vastu Consultation', description: 'Consultation for specific Vastu-related concerns.' },
];

// API Endpoint for getting Vastukaar List
app.get('/getVastukaarList', (req, res) => {
  res.json(vastukaarList);
});

// Start the server
app.listen(port, () => {
  console.log(`Vastu Consultation API running at http://localhost:${port}`);
});
