import './App.css';
import { routes } from './router';
import { useRoutes, BrowserRouter as Router } from 'react-router-dom'; // v6实现路由统一管理

// react-router-dom v5中路由管理：
// Switch 重命名为 Routes
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Home from './pages/Home/index.jsx';
// import CityList from './pages/CityList/index.jsx';
// import { lazy } from 'react';
// const router = [
//   {
//     path: '/',
//     key: 'home',
//     component: lazy(() => import('./pages/Home/index') )
//   },
//   {
//     path: '/cityList',
//     key: 'cityList',
//     component: lazy(() => import('./pages/CityList/index') )
//   }
// ]
const App = () => {
  // useRoutes必须包裹在Router组件之内使用
  const element = useRoutes(routes);
  return element;
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  )
  // return (
  //   <Router>
  //     <div className="App">
  //       <Link to="/">home </Link>
  //       <Link to="/cityList">cityList </Link>
  //      <Routes>
  //         <Route path="/" element={ <Home />}></Route>
  //         <Route path="/cityList" element={<CityList />}></Route>
  //      </Routes>
  //     </div>
  //   </Router>
  // );
}

export default AppWrapper;
