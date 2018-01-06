import React from 'react';

import Header from './header.js';
import Content from './content.js';
import AD from './ad.js';

export default class App extends React.Component{
	render(){
		var index = this.props.index;
		var marginRight = index%2==0?10:0;
		return (
			<div className='box_item' style={{marginRight:marginRight}}>
				{/*头部组件*/}
				<Header data={this.props.data.header}/>
				{/*内容组件*/}
				<Content data={this.props.data.content}/>
				{/*导航组件*/}
				<AD data={this.props.data.ad}/>
			</div>
		);
	}
	
}

