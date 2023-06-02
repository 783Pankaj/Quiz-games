// import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Quiz from './components/Quiz';
// import TimeOut from './components/TimerOut';
function App() {
  return (
    <div className="App">
    <Quiz />
    {/* <BrowserRouter>
      <Routes>
        <Route path='/timeOut' element={<TimeOut />}/>
      </Routes>
    </BrowserRouter> */}
    </div>
  );
}

export default App;
