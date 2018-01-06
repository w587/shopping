import React from 'react';

import { Checkbox, Row, Col } from 'antd';


var datas=require("../data/Phone_list/Top_nav.json")

class Conter_miniNav extends React.Component{
	
  constructor(){
    super();
    this.state = {
     
    }
  }

	render(){
    
    var TopNav=datas.map((item,index)=>{
      var items=item.items.map((it,id)=>{
        return (<Col style={{marginRight:40}} key={id+2}>{it}</Col>)
      })
      return (
          <Row style={{marginTop:20}} key={index}>
            <Col span={2}>{item.title}</Col>
            <Col  span={18}>
               <Row  type="flex" justify="start">
                 {items}
               </Row>
            </Col>
            <Col  span={2}></Col>
          </Row>
        )
    })
  

		return (

        
        <div style={{marginTop:20}} className="Conter_miniNav">
               <Row>
                  <Col span={2}>品牌：</Col>
                  <Col span={19}>
                    <img style={{border:'1px solid gray',margin:2}} src='https://img12.360buyimg.com/popshop/jfs/t5662/36/8888655583/7806/1c629c01/598033b4Nd6055897.jpg' />
                    <img style={{border:'1px solid gray',margin:2}} src='https://img11.360buyimg.com/popshop/jfs/t7084/169/439244907/4647/724c7958/598042c9N6e4e79e5.jpg' />
                    <img style={{border:'1px solid gray',margin:2}} src='https://img12.360buyimg.com/popshop/jfs/t2989/240/151377693/3895/30ad9044/574d36dbN262ef26d.jpg' />
                    <img style={{border:'1px solid gray',margin:2}} src='https://img10.360buyimg.com/popshop/jfs/t3511/131/31887105/4943/48f83fa9/57fdf4b8N6e95624d.jpg' />
                    <img style={{border:'1px solid gray',margin:2}} src='https://img12.360buyimg.com/popshop/jfs/t2701/34/484677369/7439/ee13e8fa/5716e2c4Nc925baf3.jpg' />
                    <img style={{border:'1px solid gray',margin:2}} src='https://img13.360buyimg.com/popshop/jfs/t5182/149/2437584670/15334/2e1ebf3/591aa1abN602ebecf.jpg' />
                    <img style={{border:'1px solid gray',margin:2}} src='https://img11.360buyimg.com/popshop/jfs/t2119/133/2264148064/4303/b8ab3755/56b2f385N8e4eb051.jpg' />
                    <img style={{border:'1px solid gray',margin:2}} src='https://img11.360buyimg.com/popshop/jfs/t2458/318/1092287831/5774/b7b4ff89/563b3484N9ba68e13.jpg' />
                    <img style={{border:'1px solid gray',margin:2}} src='https://img12.360buyimg.com/popshop/jfs/t2398/233/975959106/6263/a786f5b8/563b33ffN9c288c6c.jpg' />
                    <img style={{border:'1px solid gray',margin:2}} src='https://img10.360buyimg.com/popshop/jfs/t2572/102/189476501/7717/16cc5814/563b33d4N6c59780c.jpg' />
                    <img style={{border:'1px solid gray',margin:2}} src='https://img11.360buyimg.com/popshop/jfs/t1954/102/907711365/5487/9f26868f/5631ccdeNe8df5efb.jpg' />
                    <img style={{border:'1px solid gray',margin:2}} src='https://img13.360buyimg.com/popshop/jfs/t2521/347/883897149/3732/91c917ec/5670cf96Ncffa2ae6.jpg' />
                    <img style={{border:'1px solid gray',margin:2}} src='https://img10.360buyimg.com/popshop/jfs/t2413/204/2928322939/11997/1a757fce/56fc94e0Nc4581b2a.jpg' />
                    <img style={{border:'1px solid gray',margin:2}} src='https://img12.360buyimg.com/popshop/jfs/t2101/155/882410684/3730/b24b14db/5631cd12N7548352d.jpg' />
                    <img style={{border:'1px solid gray',margin:2}} src='https://img13.360buyimg.com/popshop/jfs/t2551/271/1317227522/3284/7419745e/56a855a3Ne38ee719.jpg' />
                    <img style={{border:'1px solid gray',margin:2}} src='https://img12.360buyimg.com/popshop/jfs/t3553/225/1930378991/5787/c2ebdd72/5836e479N88a98abb.jpg' />
                  </Col>
                  <Col  ><span>更多∨</span>  <span>+多选</span></Col>
                </Row>

                {TopNav}
        </div>

		);
	}
}
  module.exports = Conter_miniNav