import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
