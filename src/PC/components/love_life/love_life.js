import React from 'react';

var datas = require('../../data/datas.json');
import BoxItem from './boxItem.js'

export default class LoveLife extends React.Component{
	render(){
		var loveLift = datas.map((item,index)=>{
			return <BoxItem key={index} data={item} index={index}/>;
		});
		return (
			<div className="love_life">{loveLift}</div>
		);
	}
}