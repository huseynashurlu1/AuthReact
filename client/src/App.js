import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';

function App() {
  const user = localStorage.getItem('token');

  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
          {user && <Route path='/' exact element={<Main />}/>}
          <Route path='/signup' exact element={<Signup />}/>
          <Route path='/login' exact element={<Login />}/>
          <Route path='/' exact element={<Navigate replace to='/login'/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
