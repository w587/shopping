import React from 'react';

require('../style/Conter/Conter.css')
require('../style/Conter/ConterTop.css')

import { Input } from 'antd';
const Search = Input.Search;
import LoaDing from '../../LoaDing/LoaDing.js';
export default class PartBox extends React.Component{



	componentDidMount(){
		fetch('http://p084rxa96.bkt.clouddn.com/MI.json').then((res)=>{
			return res.json()
		}).then((data)=>{
		  	this.setState({
		  		datas:data
		  	})
		});
	}

	constructor(){
		super();
		this.state={
			datas:[],
			over:false,
			dataItem:[]
		}
	}

	render(){

		var datas=this.props.datas
		

		var PartItem=datas.length==0?<LoaDing />:datas.map((item, index)=>{
			return (<li key={index}><a><img src={item.imgSrc}/><span>{item.name}</span></a></li>)
		})

		var PartBoxW=220*parseInt((datas.length/6))+230
		PartBoxW=PartBoxW>890?890:PartBoxW;

		return (
			<ul style={{width: PartBoxW}} className='PartBox'>
				{PartItem}
			</ul>
		);
	}

	
}