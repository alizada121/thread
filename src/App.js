
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './components/styling.css'
import Mail from './components/Mail';
import Customoers from './components/Customers';
import ChampMenu from './components/ChampMenu';
import Form from './components/Form';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route exact path="/" element={<Form/>}></Route>
    <Route exact path="/customers" element={<Customoers/>}></Route>
    <Route exact path="/champaign" element={<ChampMenu/>}></Route>

   </Routes>
   </BrowserRouter>
  );
}

export default App;
