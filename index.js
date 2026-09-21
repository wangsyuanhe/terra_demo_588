const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Health check endpoint for Railway deployment and monitoring
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Shortcut routes for easy navigation
app.get('/daniel', (req, res) => {
  res.redirect('/src/webpages_individual/daniel/daniel_page.html');
});

app.get('/sophie', (req, res) => {
  res.redirect('/src/webpages_individual/sophie/sophie_add.html');
});

// Redirect root to main Garden page
app.get('/', (req, res) => {
  res.redirect('/src/webpages_individual/daniel/daniel_page.html');
});

// Serve static assets from project root
app.use(express.static(__dirname));

// Bind to 0.0.0.0 to ensure Railway / container reverse proxies can route incoming requests
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Garden server listening on 0.0.0.0:${PORT}`);
});
