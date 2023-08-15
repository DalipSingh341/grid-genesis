import logo from './logo.svg';
import './App.css';
import './Root.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main"
import NavBar from "./components/NavBar"
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/genesis" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
