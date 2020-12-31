import app from './src/app';

const server = app.listen(process.env.PORT || 3000, () => console.log(
  '🚀 Server ready at: http://localhost:3000\n⭐️',
));
