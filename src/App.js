import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import About from './pages/About';
import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import View from './pages/View';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
        <ToastContainer position="top-center" />
        <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={AddEdit} />
        <Route path="/update/:id" component={AddEdit} />
        <Route path="/view/:id" component={View} />
        <Route path="/about" component={About} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
