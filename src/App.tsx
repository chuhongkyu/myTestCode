import Nav from 'components/Nav';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav/>
      <h1>홈</h1>
      <Outlet/>
    </div>
  );
}

export default App;
