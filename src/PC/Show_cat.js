import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'

import { Checkbox, Row, Col } from 'antd';
const CheckboxGroup = Checkbox.Group;

var datas=require("./data/Show_cat/Show_cat.json")

class Show_cat extends React.Component{
	
  constructor(){
    super();
    this.state = {
      
      indeterminate: true,
      checkAll: false
    }
  }

	render(){
		
    var items=datas.map((item,index)=>{
      return (
          <Col key={index} style={{marginTop:40,borderTop:'1px solid gray',paddingTop:10}} span={24}>
           <Checkbox style={{ width: '100%'}} value={index+1}>
             <Row className='text-center' type="flex" justify="space-around" align="middle" style={{ width: '96%',cssFloat:'right'}}>
               <Col style={{textAlign:'center'}} span={3}><img src={item.img}/></Col>
               <Col style={{textAlign:'center',color:'#424242',fontSize:18,fontWeight:'bold'}} span={9}>{item.title}</Col>
               <Col style={{textAlign:'center',fontSize:16}} span={3}>{item.price}</Col>
               <Col style={{textAlign:'center'}} span={3}>
                 <button>+</button>
                 <input style={{width:30,height:30,textAlign:'center'}} type='text' />
                 <button>-</button>
               </Col>
               <Col style={{textAlign:'center',color:'#ff6700',fontSize:16}} span={3}>{item.price}</Col>
               <Col style={{textAlign:'center'}} span={3}>X </Col>
              </Row>
           </Checkbox>
          </Col>
        )
    })

		return (
  			<div id="Show_cat">
  				{/*头部*/}
  				<Header />

  				<div className='ConterBox'>
            <div className='Show_cat_conter'>
             <Checkbox.Group style={{ width: '100%' }} onChange={this.Change}>
               <Row style={{ width: '100%' }}>
                 <Col span={24}>
                  <Checkbox style={{ width: '100%' }} value="All">
                   <Row style={{ width: '96%',cssFloat:'right'}}>
                    <Col style={{textAlign:'left'}} span={4}>全选</Col>
                    <Col style={{textAlign:'center'}} span={8}>商品名称</Col>
                    <Col style={{textAlign:'center'}} span={3}>单价</Col>
                    <Col style={{textAlign:'center'}} span={3}>数量</Col>
                    <Col style={{textAlign:'center'}} span={3}>小计</Col>
                    <Col style={{textAlign:'center'}} span={3}>操作 </Col>
                   </Row>
                  </Checkbox>
                 </Col>

                {items}
               </Row>
             </Checkbox.Group>
            </div>
  					{/*footer*/}
  					<Footer />
  				</div>
  				
  				
  			</div>
			
		);
	}

	Change(checkedValues){
  
  }
}
  module.exports = Show_cat