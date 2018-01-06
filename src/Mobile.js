import React from 'react';

import {ListView, Button, WhiteSpace, WingBlank, Tabs, Badge,NavBar, Icon } from 'antd-mobile';

import 'antd-mobile/dist/antd-mobile.css'

const tabs = [
  { title: <Badge>首页</Badge> },
  { title: <Badge>购物车</Badge> },
  { title: <Badge>我</Badge> },
];


export default class Mobile extends React.Component{
	
	render(){
		
		return (
  			<div id="Mobile">
          <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                  <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                  <Icon key="1" type="ellipsis" />,
                ]}
              >NavBar</NavBar>


          <div style={{position:'fixed',width:'100%',bottom:0}}>
            <Tabs 
              
              tabs={tabs}
              tabBarPosition="bottom"

              initialPage={1}
              
            >
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '600px', backgroundColor: '#fff' }}>
                Content of first tab
              </div>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '600px', backgroundColor: '#fff' }}>
                Content of second tab
              </div>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '600px', backgroundColor: '#fff' }}>
                Content of third tab
              </div>
            </Tabs>
          </div>
  			</div>	
		)
	}


	
	
}

