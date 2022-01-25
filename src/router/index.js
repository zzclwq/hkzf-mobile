import Home from '../pages/Home';
import CityList from '../pages/CityList';
export const routes = [
    {
        path: '/',
        element: <Home />,
        children: [
            {
                // path: '/home/index',
                index: true, // 嵌套路由中，如果url只匹配了父级url，Outlet则会显示带有index属性的路由
                element: <div>index</div>
            },
            {
                path: '/find',
                element: <div>finds</div>
            },
            {   
                path: '/news',
                element: <div>news</div>
            },
            {   
                path: '/profile',
                element: <div>profile</div>
            }
        ]
    },
    {
        path:  '/citylist',
        element: <CityList />
    },
    {
        path:  '*',
        element: <div>404</div>
    }
];