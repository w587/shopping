import React from 'react';

export default class NormalRight extends React.Component{
	constructor(){
		super();
		this.state = {
			index:0
		}
	}
	render(){
		var titles = ['促销','公告'];
		var topLeft = titles.map((item,index)=>{
			var borderRight = index==0?'1px solid #aaa':'';
			var borderBottom = index==this.state.index?"1px solid red":'1px solid #aaa';
			return (
				<p 	onMouseOver={this.change(index)}
					style={{borderRight:borderRight,borderBottom:borderBottom}}>{item}</p>	
			);
		});
		return (
			<div className="normal">
				<div className="user">
					<div className="user_info">
						<img className="icon" src="https://misc.360buyimg.com/mtd/pc/common/img/no_login.jpg"/>
						<div className="regist_or_login">
							<p>Hi, 欢迎来到京东!</p>
							<p>登录 注册</p>
						</div>
					</div>
					<div className="fuli">
						<p>新人福利</p>
						<p>PLUS会员</p>
					</div>
				</div>
				<div className="news">
					<div className="top">
						<div className="left">
							{topLeft}
						</div>
						<div className="right"><p>更多</p></div>
					</div>
				</div>
				<div className="service_entry"></div>
			</div>
		);
	}
	change(index){
		var that = this;
		return function(){
			that.setState({
				index:index
			});
		}
	}
}