import './App.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import List from './pages/List/List';
import Store from './pages/Store/Store';
import Edit from './pages/Edit/Edit';

function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <Outlet/>
    </div>
  );
}

export default App;
