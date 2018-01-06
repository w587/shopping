import React from 'react';

require('../style/Conter/Conter.css')
require('../style/Conter/ConterTop.css')


import { Input,Pagination,Tabs  } from 'antd';
const Search = Input.Search;
const TabPane = Tabs.TabPane;

import ContTop from './ContTop.js';

import BannerBottom from './BannerBottom.js';

import ConterMenu from './ConterMenu.js';

import SortModule from './SortModule.js';

import ConterSKUBox from './ConterSKUBox.js';

var SortData=require('../data/ConterData/SortModule.json')
console.log(SortData)

var SKU_Data=require('../data/ConterData/ConterSKU.json')

export default class Conter extends React.Component{

	constructor(){
		super();
		this.state={
			index:0
		}
	}



	render(){
		
		var Sortdata=SortData.map((item,index)=>{
			return (
					<SortModule key={index} datas={item}/>
				)
		})

		var SKU_data=SKU_Data.map((item,index)=>{
			return (
					<ConterSKUBox key={index} datas={item}/>
				)
		})




		return (
			<div className='Conter'>
				{/*内容头部*/}
				<ContTop />
				{/*内容菜单*/}
				<ConterMenu />
				{/*焦点底部推荐*/}
				<BannerBottom />
				{/*小米明星单品*/}
				<ConterSKUBox datas={SKU_Data[0]}/>
				{/*家电模块*/}
				{Sortdata}
				{/*为您推荐*/}
				<ConterSKUBox datas={SKU_Data[1]}/>
			</div>
		);
	}
}