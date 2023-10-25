const express = require('express');
const app = express();
const path = require('path');



app.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../public', 'index.example.html');
  res.sendFile(filePath);
});
app.get('/cars', (req, res) => {
  const filePath = path.join(__dirname, '../public', 'cars.html');
  res.sendFile(filePath);
});

app.use(express.static('public', {
  setHeaders: (res, path, stat) => {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  },
}));

app.use(express.static('public', {
  setHeaders: (res, path, stat) => {
    if (path.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
    
  },
}));



app.listen(3000, () => {
  console.log('Server started on port 3000');
});
