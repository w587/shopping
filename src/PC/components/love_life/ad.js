import React from 'react';
export default class AD extends React.Component{
	render(){
		var ads = this.props.data.ads;
		var adItems = ads.map((item,index)=>{
			var borderRight = index==(ads.length-1)?"0px solid red":"1px solid #dedfe0"
			return (
				<div  key={index} 
					  className="ad_item"
					  style={{borderRight:borderRight}}
					><img src={item}/></div>
			);
		});
		return (
			<div className="ads">
				{adItems}
			</div>
		);
	}
	
}