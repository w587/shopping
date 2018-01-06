import React from 'react';
export default class HeaderQrt extends React.Component{
	render(){
		return (
			<div className="header-left">
				<h3>{this.props.title}</h3>
				<div className="qrcode">
					<div className="sm_pt_qrcode_ico"
						 onMouseOver={this.show.bind(this)}
						 onMouseLeave={this.hide.bind(this)}
					></div>
					<div className="big_pt_qrcode_ico" style={{display:this.props.display}}></div>
				</div>
			</div>
		);
	}
	show(){
		this.props.show();
	}
	hide(){
		this.props.hide();
	}
}