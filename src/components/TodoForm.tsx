import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { addTodo, updateTodo } from '../actions/todoActions';
import { RootState, Todo } from '../types';
import { Button, Container, TextField, Typography } from '@mui/material';

const TodoForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useNavigate();
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);
  const userName = useSelector((state: RootState) => state.auth.username);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (id) {
      const todo = todos.find((todo: any) => todo.id === id);
      if (todo) {
        setTitle(todo.title);
        setDescription(todo.description);
      }
    }
  }, [id, todos]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const todo: Todo = {
      id: id ? id : Date.now().toString(),
      title,
      userId: userName,
      description,
      date: Date.now().toString(),
    };
    if (id) {
      dispatch(updateTodo(todo));
    } else {
      dispatch(addTodo(todo));
    }
    history('/dashboard');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        {id ? 'Edit Todo' : 'Add Todo'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Description"
          multiline
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <div className="text-center">
          <Button variant="contained" type="submit">
            {id ? 'Update' : 'Add'}
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default TodoForm;
