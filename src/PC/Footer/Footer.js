import React from 'react';

require('../style/Footer/Footer.css')

import { Row, Col } from 'antd';

import FooterTop from './FooterTop.js';
import FooterSever from './FooterSever.js';
import SiteInfo from './SiteInfo.js';

export default class Footer extends React.Component{
	render(){
		return (
			<div className='Footer'>
            	{/*售后服务*/}
				<FooterTop />
            	{/*服务提供*/}
   	 			<FooterSever />
   	 			{/*备案号*/}
   	 			<SiteInfo />
			</div>
		);
	}
}