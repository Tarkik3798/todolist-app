import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions/authActions';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, TextField, Typography } from '@mui/material';
import usersData from '../users.json';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    const foundUser = usersData.users.find(
        (user: any) => user.username === username && user.password === password
      );
      if (foundUser) {
        const id = foundUser.id
        const user = {
            id,
            username,
            password,
          };
        dispatch(login(user));
        navigate('/dashboard');
      } else {
        alert('Invalid username or password');
      }
    
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Login
      </Typography>
      <form>
        <TextField
          label="Username"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          type="password"
          label="Password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginForm;
