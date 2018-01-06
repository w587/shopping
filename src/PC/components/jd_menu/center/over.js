import React from 'react';

export default class OverCenter extends React.Component{
	render(){
		// 获取到top模块设定所需的数据
		var sec1 = this.props.data.sec1;
		// 设定顶部元素的显示
		var top = sec1.map((item,index)=>{
			return  (
				<p key={index}>{item} > </p>
			);
		});
		// 设定类别列表的显示
		var allContent = this.props.data.content;
		var categaryList = allContent.map((item,index)=>{
			var detail = item.detail;// 此时获取到的detail是一个数组
			var detailItem = detail.map((it,id)=>{
				return (
					<p key={id} className="title">{it}</p>
				);
			});	
			return (
				<div className="categary_item" key={index}>
					<div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
						<h3>{item.title} > </h3>
						<div className="ls">{detailItem}</div>
					</div>
				</div>
			);
		});
		return (
			<div className="over">
				<div className="top">{top}</div>
				<div className="list">{categaryList}</div>
			</div>
		);
	}
}