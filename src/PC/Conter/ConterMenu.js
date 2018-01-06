import React from 'react';

require('../style/Conter/Banner.css')


import { Input,Carousel,Row, Col} from 'antd';

import MenuLeft from './MenuLeft.js';

export default class ConterMenu extends React.Component{

	render(){



		return (
		
			<div className='ConterMenu'>
				{/*轮播图*/}
				<div className='MenuBanner'>
					<Carousel autoplay  style={{width:'100%',height:460}}>
  					  <img style={{height:460}} src='https://i1.mifile.cn/a4/xmad_15142935262383_cBEjQ.jpg'/>
  					  <img style={{height:460}} src="https://i1.mifile.cn/a4/xmad_15127346139897_mVvPT.jpg"/>
  					  <img style={{height:460}} src="https://i1.mifile.cn/a4/xmad_15127346139897_mVvPT.jpg"/>
  					  <img style={{height:460}} src="https://i1.mifile.cn/a4/xmad_15130878026078_dQNUL.jpg"/>
  					  <img style={{height:460}} src="https://i1.mifile.cn/a4/xmad_15142058639403_cTqMd.jpg"/>
  					  <img style={{height:460}} src="https://i1.mifile.cn/a4/xmad_1513304443358_gzjfM.jpg"/>
  					</Carousel>
				</div>
				<MenuLeft />
			</div>
				
			
		);
	}
}