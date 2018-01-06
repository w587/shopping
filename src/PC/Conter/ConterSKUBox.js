import React from 'react';

require('../style/Conter/ConterTop.css')


import { Input,Pagination } from 'antd';
const Search = Input.Search;

import ContTop from './ContTop.js';




export default class ConterSKUBox extends React.Component{

	constructor(){
		super();
		this.state={
			index:0
		}
	}

	render(){
		
		var SKUItem=this.props.datas.data.map((item, index)=>{
			
			return (
						<li key={index} style={{borderTop:'red solid 1px'}}>
							<img style={{width:160,height:160}} src={item.imgsrc} />
							<span style={{color:'#212121',margin:'0 20px 3px',fontSize:10}}>{item.name}</span>
							<span style={{margin:'0 20px 12px',fontSize:8}}>{item.title}</span>
							<span style={{color:'#ff6709'}}>{item.price}</span>
						</li>)
		})


		return (
			<div className='ConterSKUBox'>
					<div  className='TopTitle'>
						<span style={{fontSize:20,fontWeight:'bold'}}>{this.props.datas.name}</span>
						<Pagination defaultCurrent={1} total={0} />
					</div>
					<ul className='ConterSKU'>
						{SKUItem}
					</ul>
			</div>
		);
	}
}