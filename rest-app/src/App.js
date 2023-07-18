import logo from './logo.svg';
import './App.css';
import Add_data from './Add_data';
import View_data from './View_data';
import View_dataCard from './View_dataCard';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Routes>
      <Route path='/Add' element={<Add_data/>}/>
      <Route path='/View' element={<View_data/>} />
    </Routes>
    </div>
  );
}

export default App;
