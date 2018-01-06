import React from 'react';
require('../../css/jd_menu/jd_menu.css');
// 获取到左侧菜单渲染所需的模块
import Menu from './menu.js';
// 获取默认的中间以及左侧模块
import NormalCenter from './center/normal.js';
import NormalRight from './right/normal.js';
// 获取触摸时的中间以及左侧模块
import OverCenter from './center/over.js';
import OverRight from './right/over.js';
var menu = require('../../data/menu.json');
var ads = require('../../data/ads.json');
export default class JDMenu extends React.Component{
	constructor(){
		super();
		this.state = {
			over:false,
			index:0,
			h:0
		}
	}
	render(){
		var center = this.state.over?<OverCenter data={menu[this.state.index]}/>:<NormalCenter ads={ads}/>;
		var right = this.state.over?<OverRight data={menu[this.state.index]}/>:<NormalRight />;
		var marginRight = this.state.over?0:10;
		var boxShadow = this.state.over?"2px 0 5px rgba(0,0,0,.3)":"";
		var paddingTop = this.state.over?10:0;
		var h = this.state.h - paddingTop;
		var paddingLeft = this.state.over?25:6;
		return (
			<div id="jd_menu" ref="menu" onMouseLeave={this.leave.bind(this)}>
				<div className="cate_menu">
					<Menu 
						over={this.over.bind(this)} 
						leave={this.leave.bind(this)}
						menu={menu}
						/>
				</div>
				<div className="carousel_ads" style={{marginRight:marginRight,boxShadow:boxShadow,height:h,paddingTop:paddingTop}}>
					{center}
				</div>
				<div className="jd_user" style={{boxShadow:boxShadow,paddingLeft:paddingLeft}}>
					{right}
				</div>
			</div>
		);
	}
	over(index){
		this.setState({
			over:true,
			index:index
		});
	}
	leave(){
		this.setState({
			over:false
		});
	}
	// 等页面渲染完成之后，获取到组件的高度
	componentDidMount(){
		var memuEle = this.refs.menu;
		var style = window.getComputedStyle(memuEle, null);
		var h = parseInt(style.height);
		this.setState({
			h:h
		});
	}
}