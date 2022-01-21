import React, { useState, useEffect } from 'react';
import { TabBar } from 'antd-mobile';
import './index.css';

const tabBarData = [
  {
    key: 'home',
    title: '首页',
    icon: 'icon-home',
    path: 'home',
  },
  {
    key: 'find',
    title: '找房',
    icon: 'icon-qiyechazhao',
    path: 'find',
  },
  {
    key: 'message',
    title: '资讯',
    icon: 'icon-zixun',
    path: 'message',
  },
  {
    key: 'my',
    title: '我的',
    icon: 'icon-31wode',
    path: 'my',
  }
];
const Home = () => {
  const [selectedTab, setSelectedTab] = useState('blueTab');
  const renderContent = (key) => (
    <>{key}</>
  );
  return (
    <div className="homePage" style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
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
                onPress={() => {setSelectedTab(item.path);}}
                // data-seed="logId"
              >
                {renderContent(item.selectedTabName)}
              </TabBar.Item>
            ))
          }
        </TabBar>
      </div>
  );
};
 export default Home;