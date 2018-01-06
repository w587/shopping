import React from 'react';

import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'
import ConterL from './Detail/ConterL.js'
import ConterR from './Detail/ConterR.js'

require('./style/Detail/detail.css')

import { Tabs,Menu, Dropdown, Icon } from 'antd';
const TabPane = Tabs.TabPane;


export default class Detail extends React.Component{
	
	render(){
		
		return (
  			<div id="Detail">
  				{/*头部*/}
  				<Header />
  				<div className='DetailConter' >
  					<ConterL />
  					<ConterR />
  				</div>
 
  				<div style={{marginTop:20,height:100}} className="card-container DetailConter">
  					  <Tabs type="card">
  					    <TabPane tab="人气配件" key="1">
  					    </TabPane>
  					    <TabPane tab="手机贴膜" key="2">
  					    </TabPane>
  					    <TabPane tab="手机壳" key="3"></TabPane>
  					    <TabPane tab="移动电源" key="4"></TabPane>
  					    <TabPane tab="数据线" key="5"></TabPane>
  					    <TabPane tab="充电器" key="6"></TabPane>
  					    <TabPane tab="更多" key="7"></TabPane>
  					    
  					  </Tabs>
  					</div>
				{/*footer*/}
  				<Footer />
  			</div>
			
		);
	}	
	
	
}
