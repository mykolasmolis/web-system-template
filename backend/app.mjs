import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

const filePath = fileURLToPath(import.meta.url);
const dirName = filePath.substr(0, filePath.length - 8);

app.use(bodyParser.json());
app.use(express.static(path.join(dirName, '..', 'frontend', 'dist')));

app.listen(port, (error) => {
  if (error) {
    console.error(error);
    return;
  }
  console.info('==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});

export default app;
