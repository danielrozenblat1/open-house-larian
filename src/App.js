import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SadnaotWrapper from './sadnaotWrapper/SadnaotWrapper';
import ServicesWrapper from './servicesPage/ServicesWrapper';

function App() {
  return <>
   <Router>
    <Routes>

    <Route path="/workshops" index element={<SadnaotWrapper/>}/>
    <Route path="/services" index element={<ServicesWrapper/>}/>
 </Routes>
 </Router>
  </>
}

export default App;
