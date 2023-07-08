import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../types';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  if (todos.length === 0) {
    return <Typography variant="body1">No todos found.</Typography>;
  }

  return (
    <List sx={{ mt: 2 }}>
      {todos.map((todo) => (
        <ListItem key={todo.id} disablePadding>
          <ListItemText
            primary={todo.title}
            secondary={todo.description}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
