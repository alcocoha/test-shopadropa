import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// IMPORT ROUTES
import booksRouter from './routes/books.js';

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use(cors())

// all routers will be start with this route /books
app.use('/books', booksRouter);

app.get('/', (req, res) => {
  res.send("Server working!");
});

app.use((error, req, res, next) => {
  res.status(400).json({
    status: 'error',
    message: error.message
  });
});

app.listen(PORT, () => console.log(`Running on port: http://localhost:${PORT}`));
