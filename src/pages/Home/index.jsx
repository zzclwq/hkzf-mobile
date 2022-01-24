import React, { useState } from 'react';
import { TabBar } from 'antd-mobile';
import { useNavigate, Outlet } from 'react-router-dom';
import './index.css';

const tabBarData = [
  {
    key: '/index',
    title: '首页',
    icon: 'icon-home',
    path: 'home',
  },
  {
    key: '/find',
    title: '找房',
    icon: 'icon-qiyechazhao',
    path: 'find',
  },
  {
    key: '/news',
    title: '资讯',
    icon: 'icon-zixun',
    path: 'message',
  },
  {
    key: '/profile',
    title: '我的',
    icon: 'icon-31wode',
    path: 'my',
  }
];
const Home = (props) => {
  const navigate = useNavigate(null);
  const [selectedTab, setSelectedTab] = useState('blueTab');

  return (
    <div className="homePage" style={{ position: 'fixed', height: '100%', width: '100%', bottom: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          {
            tabBarData.map((item) => (
              <TabBar.Item
                title={item.title}
                key={item.key}
                icon={<i className={`iconfont ${item.icon} iconSize`}></i>}
                selectedIcon={<i className={`iconfont ${item.icon} iconSize`}></i>}
                selected={selectedTab === item.path}
                badge={item.badge || null}
                dot={item.dot || false}
                onPress={() => {
                  setSelectedTab(item.path);
                  navigate(`/home${item.key}`)
                }}
                // data-seed="logId"
              >
                  <Outlet />
              </TabBar.Item>
            ))
          }
        </TabBar>
      </div>
  );
};
 export default Home;