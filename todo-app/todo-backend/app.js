const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const todosRouter = require('./routes/todos');
const redis = require('./redis');
const app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);
app.use('/todos', todosRouter);

app.get('/statistics', async(_, res) => {
  const addedTodos = await redis.get('added_todos')
  res.send({
    added_todos: Number(addedTodos || 0)
  })
});

module.exports = app;
