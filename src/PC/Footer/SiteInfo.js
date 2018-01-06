import React from 'react';

import { Row, Col } from 'antd';

export default class SiteInfo extends React.Component{
	render(){
		return (
   	 		<div className='SiteInfo'>
   	 				<div className='SiteInfoL'>
   	 					<img style={{width:50,height:50}} src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514305007558&di=8f8e5229286393c2b5792dfcf48f5653&imgtype=0&src=http%3A%2F%2Fpic2.16pic.com%2F00%2F01%2F51%2F16pic_151750_b.jpg' />
   	 					<div>
   	 					<p style={{margin:0}} className="Sites">
   	 						<span>小米商城</span>
   	 						<span className="sep">|</span>
   	 						<span>MIUI</span>
   	 						<span className="sep">|</span>
   	 						<span>米家</span>
   	 						<span className="sep">|</span>
   	 						<span>米聊</span>
   	 						<span className="sep">|</span>
   	 						<span>多看</span>
   	 						<span className="sep">|</span>
   	 						<span>路由器</span>
   	 						<span className="sep">|</span>
   	 						<span>米粉卡</span>
   	 						<span className="sep">|</span>
   	 						<span>小米天猫店</span>
   	 						<span className="sep">|</span>
   	 						<span>隐私政策</span>
   	 						<span className="sep">|</span>
   	 						<span>问题反馈</span>
   	 						<span className="sep">|</span>
   	 						<span>Select Region</span>
   	 						</p>
   	 					<p style={{fontSize: 12}}>©mi.com
   	 					<span> 京ICP证xxxxxx号 京ICP备xxxxx444号 京公网安备1101080xxxxxxx号 京网文[2014]0059-xxxx号</span><br />
   	 					<span> 违法和不良信息举报电话：121-1311-xxxx，本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</span>
   	 					</p>
   	 					</div>
   	 				</div>
   	 				<div className='SiteInfoR'>
   	 					<img src='https://i1.mifile.cn/f/i/17/site/truste.png' />
   	 					<img src='https://s01.mifile.cn/i/v-logo-2.png' />
   	 					<img src='https://s01.mifile.cn/i/v-logo-1.png' />
   	 					<img src='https://s01.mifile.cn/i/v-logo-3.png' />
   	 					<img src='https://i8.mifile.cn/b2c-mimall-media/ba10428a4f9495ac310fd0b5e0cf8370.png' />
   	 				</div>
   	 		</div>
		);
	}
}