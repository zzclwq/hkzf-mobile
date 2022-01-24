import Home from '../pages/Home';
import CityList from '../pages/CityList';
export const routes = [
    {
        path: '/home',
        element: <Home />,
        children: [
            {
                path: '/home/index',
                element: <div>index</div>
            },
            {
                path: '/home/find',
                element: <div>finds</div>
            },
            {   
                path: '/home/news',
                element: <div>news</div>
            },
            {   
                path: '/home/profile',
                element: <div>profile</div>
            }
        ]
    },
    {
        path:  '/citylist',
        element: <CityList />
    }
];