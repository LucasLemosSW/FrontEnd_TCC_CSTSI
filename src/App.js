
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './home/home';
import Login from './login/login';
import Cadastro from './cadastro/cadastro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
      </Routes>
    </Router>
  );
}

export default App;
