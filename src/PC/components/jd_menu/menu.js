import React from 'react';
// 获取到菜单渲染显示所需的数据

export default class Menu extends React.Component{
	render(){
		// 渲染左侧静态菜单部分
		var leftMenu = this.props.menu.map((item,index)=>{
			return (
				<p 	className="item" 
					key={index}
					onMouseOver={this.over(index)}
					>{item.name}</p>
			);
		});
		return (
			<div className="left_menu">
				{leftMenu}
			</div>
		);
	}
	over(index){
		var that = this;
		return function(){
			that.props.over(index);
		}
	}
	leave(){
		this.props.leave();
	}
}