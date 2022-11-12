
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './components/styling.css'
import Mail from './components/Mail';
import Customoers from './components/Customers';
import ChampMenu from './components/ChampMenu';
// import Form from './components/Form';
// import Formm from './components/Formm';
import PageTemplate from './components/PageTemplate';
import EditThread from './components/EditThread';
import View from "./components/View"


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route exact path="/message" element={<PageTemplate/>}></Route>
    <Route exact path="/customers" element={<Customoers/>}></Route>
    <Route exact path="/" element={<ChampMenu/>}></Route>
    {/* <Route exact path="/form" element={<Formm/>}></Route> */}
    <Route exact path="/edit" element={<EditThread/>}></Route>
    <Route exact path="/view" element={<View/>}></Route>

    

   </Routes>
   </BrowserRouter>
  );
}

export default App;
