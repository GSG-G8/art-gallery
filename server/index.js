const app = require('./app');

const port = app.get('port');

app.listen(port, () => {
  console.log('http://localhost:8000');
});
