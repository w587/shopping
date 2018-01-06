import React from 'react';

export default class NormalCenter extends React.Component{
	render(){
		var top = <img src={this.props.ads.top_ad[0]}/>
		var bottom = this.props.ads.bottom_ad.map((item,index)=>{
			var marginRight = index==0?10:0;
			return (
				<img style={{marginRight:marginRight}} key={index} src={item}/>
			);
		});	
		return (
			<div className="normal">
				<div className="top">{top}</div>
				<div className="bottom">{bottom}</div>
			</div>
		);
	}
}