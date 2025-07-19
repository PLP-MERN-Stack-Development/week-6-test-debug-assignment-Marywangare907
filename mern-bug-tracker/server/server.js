const app = require('./app');

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'test') {
  app.listen(5000, () => console.log('Server running'));
}


module.exports = app;
