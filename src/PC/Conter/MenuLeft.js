import React from 'react';


require('../style/Conter/MenuLeft.css')

import { Input } from 'antd';
const Search = Input.Search;

import LoaDing from '../../LoaDing/LoaDing.js';
import PartBox from './PartBox.js';

import {Link} from 'react-router-dom'

export default class MenuLeft extends React.Component{



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
			overs:true,
			dataItem:[]
		}
	}

	render(){

		

		var datas=this.state.datas
		
		var noens={display:this.state.overs?'none':'block'}
		
		var MenuItem=datas.length==0?<LoaDing />:datas.map((item, index)=>{
			return (<li key={index} onMouseOver={this.over(index)} style={{cursor:'pointer'}}><Link style={{color:'white'}} to='/Phone_list'><span>{item.title}</span><span>></span></Link></li>)
		})
		return (
			<div onMouseLeave={this.Leave.bind(this)} className='MenuLeft'>
				<ul className='MenuBox'>
					{/*菜单项*/}
					{MenuItem}
				</ul>
				<div style={noens}>
					{/*菜单详情*/}
					<PartBox datas={this.state.dataItem}/>
				</div>
			</div>
		);
	}

	over(index){
		var that=this;
		return ()=>{
			that.setState({
				dataItem:that.state.datas[index].item,
				overs:false
			})
		}
	}

	Leave(){
		
		
		
		this.setState({
			overs:true,
		})
		
	}

}