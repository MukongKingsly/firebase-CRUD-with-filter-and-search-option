import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './pages/About';
import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import View from './pages/View';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
        <ToastContainer position="top-center" />
        <Routes>
            <Route index element={<Home />} />
            <Route path="/add" element={<AddEdit />} />
            <Route path="/update/:id" element={<AddEdit />} />          
            <Route path="/view/:id" element={<View />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
