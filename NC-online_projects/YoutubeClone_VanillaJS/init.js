//start of our application
import app from './app.js';

const PORT = 4000;
const handleListening = () =>
  console.log(`listening at http://localhost:${PORT}`);

app.listen(PORT, handleListening);
