import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Spinner from "./components/Spinner/Spinner";
import { Header } from './components';
import { About, AddEdit, Home, View, Search } from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
      <div className="App">
      <Header />
        <ToastContainer position="top-center" />
        <Routes>
            <Route index element={<Home />} />
            <Route path="/add" element={<AddEdit />} />
            <Route path="/update/:id" element={<AddEdit />} />          
            <Route path="/view/:id" element={<View />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<Search />} />
        </Routes>
      </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
