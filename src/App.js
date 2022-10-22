import { Route, Routes } from 'react-router-dom'
import Home from './Home';
import MovingSofa from './MovingSofa';

function App() {
  return (
    <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/extension-of-the-moving-sofa-problem" exact element={<MovingSofa/>} />
    </Routes>
  );
}

export default App;
