import React from 'react';

export default class Header extends React.Component{
	constructor(){
		super();
		this.state = {
			time:{
				hour:'00',
				min:'00',
				sec:'00',
			}
		};
	}
	render(){
		return (
			<div className="header">
				<div className="left">
					<p className="box_hd_icon"></p>
					<p className="title">京东秒杀</p>
					<p className="desc">总有你想不到的低价</p>
				</div>
				<div className="right">
					<p>当前场次</p>
					<div className="count_down">
						<p className="left_num">{this.state.time.hour}</p>
						<p className="tags">:</p>
						<p className="left_num">{this.state.time.min}</p>
						<p className="tags">:</p>
						<p className="left_num">{this.state.time.sec}</p>
					</div>
					<p>后结束抢购</p>
				</div>
			</div>
		);
	}
	componentDidMount(){
		// 获取到距离目标完成的描述
		var left = 5000;
		setInterval(()=>{
			left--;
			this.setState({
				time:this.timeChange(left)
			});
		}, 100);
	}
	timeChange(time){
		var hour = parseInt(time/3600);
		var min = parseInt((time- hour*3600)/60) ;
		var sec = time%60;
		hour = hour<10?('0'+ hour):''+hour;
		min = min<10?('0'+ min):''+min;
		sec = sec<10?('0'+ sec):''+sec;
		return {
			hour:hour,
			min:min,
			sec:sec
		};
	}
}