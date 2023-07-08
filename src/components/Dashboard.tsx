import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Button, Card, CardContent, List, ListItem, ListItemText, Fab } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { RootState } from '../types';
import { logout } from '../actions/authActions';
import { Todo } from '../types';

const Dashboard: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const userName = useSelector((state: RootState) => state.auth.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const handleEditTodo = (id: any) => {
    navigate(`/edit/${id}`);
  };
  const filteredTodos = todos.filter((todo: Todo) => todo.userId === userName);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Card sx={{ mt: 5 }}>
            <CardContent>
              <Typography variant="h4" align="center" gutterBottom>
                Dashboard
              </Typography>
              {isAuthenticated ? (
                <span className="text-end mb-3">
                  <Button style={{float: 'right'}} variant="outlined" color="error" onClick={handleLogout}>
                    Logout
                  </Button>
                </span>
              ) : (
                <span className="text-end mb-3">
                  <Link style={{float: 'right'}} to="/" className="btn btn-outline-primary">
                    Login
                  </Link>
                </span>
              )}
              {isAuthenticated && (
                <div className="text-center mb-3">
                  <Fab
                    component={Link}
                    to="/add"
                    color="primary"
                    aria-label="add"
                    variant="extended"
                    size="medium"
                  >
                    <AddIcon />
                    Add Todo
                  </Fab>
                </div>
              )}
              {isAuthenticated ? (
                <>
                  {filteredTodos.length > 0 ? (
                    <List>
                      {filteredTodos.map((todo: Todo) => (
                        <ListItem key={todo.id}>
                          <ListItemText primary={todo.title} />
                          <Button
                            variant="contained"
                            onClick={() => handleEditTodo(todo.id)}
                            component={Link}
                            to={`/edit/${todo.id}`}
                          >
                            Edit
                          </Button>
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    <div style={{textAlign:'center'}}>
                      <Typography  variant="body1">No todos found.</Typography>
                    </div>
                  )}
                </>
              ) : (
                <div style={{textAlign:'center'}}>
                  <Typography variant="body1">Please log in to view your todos.</Typography>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
