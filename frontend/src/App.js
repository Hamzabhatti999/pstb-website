
import Home from './components/home';
import Register from './components/register';
import { Route, Routes } from 'react-router-dom';
function App() {

  return (
   
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} /> 
        </Routes>
        {/* <Register/> */}
      </div>
   
  )
}

export default App;
