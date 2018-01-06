import React from 'react';

require('../style/Footer/Footer.css')

import { Row, Col } from 'antd';

export default class FooterTop extends React.Component{
	render(){

		return (
				<Row className='FooterTop' type="flex" justify="center" gutter={10}>
   	 			  	<Col className="gutter-row" span={4}>
   	 			  	  <div className="gutter-box">预约维修服务</div>
   	 			  	</Col>
   	 			  	<Col className="gutter-row" span={4}>
   	 			  	  <div className="gutter-box">7天无理由退货</div>
   	 			  	</Col>
   	 			  	<Col className="gutter-row" span={4}>
   	 			  	  <div className="gutter-box">15天免费换货</div>
   	 			  	</Col>
   	 			  	<Col className="gutter-row" span={4}>
   	 			  	  <div className="gutter-box">满150元包邮</div>
   	 			  	</Col>
   	 			  	<Col className="gutter-row" span={4}>
   	 			  	  <div className="gutter-box">520余家售后网点</div>
   	 			  	</Col>
   	 			</Row>
		);
	}
}