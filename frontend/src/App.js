import './App.css';
import './styles/faguni.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Toaster } from './components/ui/sonner';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
        <CartDrawer />
      </CartProvider>
      <Toaster position="bottom-right" richColors />
    </div>
  );
}

export default App;
