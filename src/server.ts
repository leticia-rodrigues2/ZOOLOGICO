import express from 'express';

const app = express();


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Winx!');
});

app.listen(3010)
