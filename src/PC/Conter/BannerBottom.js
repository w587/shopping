import React from 'react';

require('../style/Conter/BannerBottom.css')


import { Input,Carousel,Row, Col,Icon} from 'antd';


var BannerData=require("../data/Banner.json")

import {Link} from 'react-router-dom'

export default class BannerBottom extends React.Component{

	constructor(){
		super();
		this.state={
			index:0
		}
	}

	render(){

		return (
			
			<Row className='BannerBottom'>
    			<Col span={6}><div className='Channel'>
    			  		<ul className='ChannelBox'>
    			  		<li>
    			  			<Icon style={{fontSize:30}} type="apple" />
    			  			<span><Link to='/detail'>选购手机</Link></span>

    			  		</li>
    			  		<li>
    			  			<Icon style={{fontSize:30}} type="android" />
    			  			<span>企业团购</span>
    			  		</li>
    			  		<li>
    			  			<Icon style={{fontSize:30}} type="dingding-o" />
    			  			<span>F码通道</span>
    			  		</li>
    			  		<li>
    			  			<Icon style={{fontSize:30}} type="skype" />
    			  			<span>米粉卡</span>
    			  		</li>
    			  		<li>
    			  			<Icon style={{fontSize:30}} type="twitter" />
    			  			<span>以旧换新</span>
    			  		</li>
    			  		<li>
    			  			<Icon style={{fontSize:30}} type="alipay-circle" />
    			  			<span>话费充值</span>
    			  		</li>
    			  		</ul>
    			</div></Col>
    			<Col span={6}><div><img src='https://i1.mifile.cn/a4/xmad_15142931618712_eaIhT.jpg'/></div></Col>
    			<Col span={6}><div><img src='https://i1.mifile.cn/a4/xmad_15142932350007_dNpbu.jpg'/></div></Col>
    			<Col span={6}><div><img src='https://i1.mifile.cn/a4/xmad_15065269205274_ENtuP.jpg'/></div></Col>
    		</Row>
			
		);
	}
}