import React from 'react';
export default class ContentRightItem extends React.Component{
	render(){
		return (
			<div 
				className="content_top_imgitem"
				style={{borderRight:this.props.borderRight,borderBottom:this.props.borderBottom}}
				>
				<div className="content_top_imgitem_txt">
					<p className="title" style={{color:this.props.color}}>{this.props.item.title}</p>
					<p className="promo">{this.props.item.promo}</p>
				</div>
				<img src={this.props.item.imgSrc}/>
			</div>
		);
	}
	
}