import React from 'react';

import { Input,Pagination,Tabs  } from 'antd';
const TabPane = Tabs.TabPane;


export default class SortModule extends React.Component{


	render(){

		var Heads=this.props.datas.head.map((item, index)=>{
			return (
					<TabPane tab={item} key={index+1}></TabPane>
				)
		})

		var SortItem=this.props.datas.data.map((item, index)=>{
			return (
					<li key={index}>
						<img src={item.imgsrc} />
						<span style={{color:'#333'}}>{item.title1}</span>
						<span style={{color:'#b0b0b0',overflow:'hidden',fontSize:12,margin:'0 10px 10px'}}>{item.title2}</span>
						<span style={{color:'#ff6700',margin:'0 10px 10px'}}>{item.price}</span>
					</li>
				)
		})
		
		return (


			
			<div className='SortModule'>
					<div className='TopTitle'>
						<span style={{color: '#333',fontSize:22}}>{this.props.datas.name}</span>
						<Tabs defaultActiveKey="1" >
  						  {Heads}
  						</Tabs>
					</div>
					{/*分类模块项*/}
					<div className='SortConter'>
						{/*分类模块左大图*/}
						<div className='SortConterL'>
							<img src='https://i1.mifile.cn/a4/xmad_14950222431232_Twnyl.jpg' />
						</div>
						{/*分类模块右模块*/}
						<div className='SortConterR'>
							<ul className='SortItemBox'>
								{SortItem}
							</ul>
						</div>
					</div>
			</div>
			
		);
	}
}