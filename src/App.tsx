import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './store';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import TodoForm from './components/TodoForm';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
        <Route path="/" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add" element={<TodoForm />} />
          <Route path="/edit/:id" element={<TodoForm />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
