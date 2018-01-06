import React from 'react';



import { Input } from 'antd';
const Search = Input.Search;

export default class ContTop extends React.Component{
	render(){
		return (
			<div className='ContTop'>
					{/*logo及活动图*/}
					<div className="HeaderLogo">
						<img style={{width:55,height:55}} src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514305007558&di=8f8e5229286393c2b5792dfcf48f5653&imgtype=0&src=http%3A%2F%2Fpic2.16pic.com%2F00%2F01%2F51%2F16pic_151750_b.jpg' />
						<img style={{width:165,height:100}} src='http://5b0988e595225.cdn.sohucs.com/images/20170824/26ce851113aa4015b4efd422c5da1f4f.gif' />
					</div>
					{/*导航项*/}
					<div className="HeaderNav">
						<ul className='HeaderNavBox'>
							<li>小米手机</li>
							<li>红米</li>
							<li>笔记本</li>
							<li>电视</li>
							<li>盒子</li>
							<li>新品</li>
							<li>路由器</li>
							<li>智能硬件</li>
							<li>服务</li>
							<li>社区</li>
						</ul>
						{/*搜索框*/}
						 <Search className='HeaderSearch' placeholder="" onSearch={value => console.log(value)} enterButton/>
					</div>
			</div>
		);
	}
}