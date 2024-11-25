

import Layout from './pages/Layout';
import Logo from './Logo';
// import Home from './pages/Home'
// import Layout from './pages/Layout'
// import Nopage from './pages/Nopage'
// import Products from './products/Products'
// import Dulce from './pages/Dulce'
// import Salado from './pages/Salado'
// import Cafe from './pages/Cafe'

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {  

  return (
    <>     
      <BrowserRouter>   
        <Layout />
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='Cafe' element={<Cafe/>}/>
            <Route path='Dulce' element={<Dulce/>}/>
            <Route path='Salado' element={<Salado/>}/>
            <Route path='*' element={<Nopage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
            
    </>
  );
}

export default App
