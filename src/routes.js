import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

 

import Home from './pages/Home/home';
import Contato from './pages/Contato/contato';
import Formulario from './pages/Formulario/formulario';
import Container from './components/Header/header';
import Footer from './components/Footer/footer'

const Rota = () => {
    return(

        <BrowserRouter>
        <Container/>
        
       <Routes>
       <Route path="/" element={<Home />}></Route>
       <Route path="/formulario" element={<Formulario />}></Route>
       <Route path="/contato" element={<Contato />}></Route>
        
        <Route path="/form" component = {Formulario} />
        <Route  path="/contato" component = {Contato} />
        </Routes>

        <Footer/>
        
        
        </BrowserRouter>
        
    );
}
export default Rota;