import React from 'react';

require('../PC/style/LoaDing.css')

export default class LoaDing extends React.Component{
	render(){
		
		return (
					<div className="spinner">
					  <div className="bounce1"></div>
					  <div className="bounce2"></div>
					  <div className="bounce3"></div>
					</div>
				);
	}
}