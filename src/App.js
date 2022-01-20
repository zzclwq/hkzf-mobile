import './App.css';
import { Button } from 'antd-mobile';
// import { Switch } from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { lazy } from 'react';

import Home from './pages/Home/index.jsx';
import CityList from './pages/CityList/index.jsx';
const router = [
  {
    path: '/',
    key: 'home',
    component: lazy(() => import('./pages/Home/index') )
  },
  {
    path: '/cityList',
    key: 'cityList',
    component: lazy(() => import('./pages/CityList/index') )
  }
]
function App() {
  return (
    <Router>
      <div className="App">
        <Button>这是测试按钮</Button>
        {/* <Switch> */}
          <Link to="/">home </Link>
          <Link to="/cityList">cityList </Link>
        {/* </Switch> */}
       <Routes>
          <Route path="/" element={ <Home />}></Route>
          <Route path="/cityList" element={<CityList />}></Route>
       </Routes>
      
      </div>
    </Router>
  );
}

export default App;
