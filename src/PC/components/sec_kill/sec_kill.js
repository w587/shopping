import React from 'react';

import Header from './header.js';
import Content from './content.js';

export default class SecKill extends React.Component{
	render(){
		return (
			<div className="sec_kill">
				{/*秒杀头部*/}
				<Header />
				{/*秒杀主体*/}
				<Content />
			</div>
		);
	}
}