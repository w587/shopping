import React from 'react';

import ContentRightItem from './content_right_item.js'

export default class Content extends React.Component{
	render(){
		var topImgList = this.props.data.top_img_list;
		var contentTopRight = topImgList.map((item,index)=>{
			var borderRight = index%2==0?'1px solid #e6e6e6':'0px solid gray';
			var borderBottom = index<2?'1px solid #e6e6e6':'0px solid gray';
			return (
				<ContentRightItem 
					key={index}
					borderRight={borderRight}
					borderBottom={borderBottom}
					color={this.props.data.color}
					item={item}/>
			);
		});
		var bottomImgList = this.props.data.bottom_img_list;
		var contentBottom = bottomImgList.map((item,index)=>{
			return (
				<div  className="content_bottom_item" key={index}><img src={item}/></div>
			);
		});
		return (
			<div className="content">
				<div className="content_top">
					<img src={this.props.data.left_icon}/>
					<div className="content_top_imgs">
						{contentTopRight}
					</div>
				</div>
				<div className="content_bottom">
					{contentBottom}
				</div>
			</div>
		);
	}
	
}