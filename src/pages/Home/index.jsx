import React, { useState } from 'react';
import { TabBar } from 'antd-mobile';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import './index.css';

const tabBarData = [
  {
    key: '/',
    title: '首页',
    icon: 'icon-home',
  },
  {
    key: '/find',
    title: '找房',
    icon: 'icon-qiyechazhao',
  },
  {
    key: '/news',
    title: '资讯',
    icon: 'icon-zixun',
  },
  {
    key: '/profile',
    title: '我的',
    icon: 'icon-31wode',
  }
];
const Home = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

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
                selected={location.pathname === item.key}
                badge={item.badge || null}
                dot={item.dot || false}
                onPress={() => {
                  navigate(item.key)
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