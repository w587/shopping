import React from 'react';

import HeaderLeft from './header_title_qrt.js'

export default class Header extends React.Component{
	constructor(){
		super();
		this.state = {
			i:-1,
			display:"none"
		}
	}
	render(){
		var tags = this.props.data.tags;
		var rightTags = tags.map((item,index)=>{
			var borderColor = this.state.i==index?'#fff':this.props.data.borderColor;
			return (
				<p  key={index}
					style={{
					 border:'1px solid #c187af',
					 borderWidth:1,
					 borderStyle:'solid',
					 borderColor:borderColor,
					 backgroundColor:this.props.data.tag_color}}	
					 onMouseOver={this.change(index)}
					 onMouseLeave={this.reset.bind(this)}
					>{item}</p>
			);
		});	
		return (
			<div className="header" style={{
	backgroundColor: this.props.data.bgc}}>
				<HeaderLeft 
					show={this.show.bind(this)}
					hide={this.hide.bind(this)}
					display={this.state.display}
					title={this.props.data.head_left_title}/>
				<div className="header-right">
					{rightTags}
				</div>
			</div>
		);
	}
	change(index){
		var that = this;
		return function(){
			that.setState({
				i:index
			});
		}
	}
	reset(){
		this.setState({
			i:-1
		});
	}
	show(){
		this.setState({
			display:'block'
		});
	}
	hide(){
		this.setState({
			display:'none'
		});
	}
}