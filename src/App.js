
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Product } from './pages/Product/Product';


function App() {
  return (
    <div className="App">
      <h1>React com Context</h1>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/product' element={<Product/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
