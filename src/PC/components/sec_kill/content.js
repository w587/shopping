import React from 'react';

export default class Content extends React.Component{
	constructor(){
		super();
		this.state = {
			index:0
		}
	}
	render(){
		var imgs = ['https://img13.360buyimg.com/mobilecms/s180x225_jfs/t13699/325/980934491/153964/daa4573b/5a3b85f2N0aadc752.jpg','https://img13.360buyimg.com/mobilecms/s180x225_jfs/t13963/15/2268415918/73088/38e5bbca/5a37bf10Na00a384e.jpg'];
		var carousel = <img src={imgs[this.state.index]}/>
		var ctrls = imgs.map((item,index)=>{
			var backgroundColor = this.state.index == index?'#e01222':'#342a2d';
			return (
				<p key={index} 
				   style={{backgroundColor:backgroundColor}}
				   onMouseOver={this.change(index)}
				   ></p>
			);
		});	
		return (
			<div className="content">
				<div className="sec_list"></div>
				<div className="carousel">
					{carousel}
					<div className="ctrls">{ctrls}</div>
				</div>
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