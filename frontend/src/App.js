
import React from 'react';
import Home from './components/home';
import Accredition from './components/pages/accreditation';
import Tester from './components/pages/testers';
import Register from './components/register';
import { Route, Routes } from 'react-router-dom';
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/accredition" element={<Accredition />} />
      <Route path="/testers" element={<Tester />} />
      <Route path='/registeration' element={<Register />} />
    </Routes>

  )
}

export default App;
