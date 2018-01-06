import React from 'react';

export default class OverRight extends React.Component{
	render(){
		var imgs = this.props.data.right_icons.map((item,index)=>{
			var src = "./src/images/" + (index<9?'0':'') +  item;
			var marginRight = index%2==0?2:0;
			return (
				<img key={index} src={src} style={{margin:marginRight,marginTop:2}}/>
			);
		});
		return (
			<div className="over">
				{imgs}
			</div>
		);
	}
}