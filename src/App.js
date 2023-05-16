import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home/Home';
import Header from './components/common/header/Header';
import BrandSelection from './components/common/brandSelection/SelectBrands';
import Brand from './components/pages/brand/Brand';

function App() {
  return (
    <>
      <Header />
      <BrandSelection />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='brand/:id' element={<Brand />} />
        <Route path='brand/:id/category/:catId' element={<Brand />} />
      </Routes>
    </>
  );
}

export default App;
