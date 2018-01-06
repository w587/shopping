import React from 'react';

require('../style/Footer/Footer.css')

import { Row, Col,Button } from 'antd';

var Footer_Data=require('../data/Footer_Data.json')

export default class FooterSever extends React.Component{
	render(){
		var FooterSeverItem=Footer_Data.map((item, index)=> {
			
			var title=(<span className='FooterTitle'>{item.title}</span>)

			var cont=item.cont.map((it, id)=>{
				return (<li key={it+5}>{it}</li>)
			})
			

			return (
						<Col key={index+10} className="gutter-row" span={4}>
   	 					  	  <div className="gutter-box">
   	 					  	  	{title}
   	 					  	  	<ul className='FooterCont'>
   	 					  	  		{cont}
   	 					  	  	</ul>
   	 					  	  </div>
   	 					  	</Col>)
		})

		return (
   	 	<Row className='FooterSever' type="flex" justify="center" gutter={10}>
   	 	  	<Col className="gutter-row" span={16}>
   	 	  	  <div className="gutter-box SeverCent">
   	 	  	  	<Row type="flex" justify="center" gutter={10}>
   	 			  	{FooterSeverItem}
   	 			</Row>
   	 	  	  </div>
   	 	  	</Col>
   	 	  	<Col className="gutter-row" span={8}>
   	 	  	  <div className="gutter-box AboutUs">
                  <p className='Tel' style={{margin: 0}}>110-120-1191</p>
                  <p className='Time' style={{margin: 0}}>周一至周日 8:00-18:0<br />（仅收市话费）</p>
                 
                 <Button type="danger" className='Hour'>24小时服务电话</Button>
              </div>
   	 	  	</Col>
   	 	</Row>
		);
	}
}