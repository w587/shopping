import React from 'react';


import { 
  Checkbox, 
  Row, 
  Col,
  Radio, 
  Menu, 
  Dropdown, 
  Button, 
  Icon, 
  message } from 'antd';

import {Link} from 'react-router-dom'

class Phone_item extends React.Component{
	
  constructor(){
    super();
    this.state = {
      index:0
    }
}




	render(){
    

    var Minimg=this.props.datas.MinImg.map((item,index)=>{

      return (
          <Col  key={index}><img className='Phone_items' style={{margin:4}} onMouseOver={this.minOver(index).bind()} src={item} /></Col>
        )
    })

		return (

      <Col style={{padding:3}} span={6}>
         <Link to='/detail'>
         {/*大图*/}
         <img src={this.props.datas.BigImg[this.state.index]} />

         <Row style={{width:'100%'}}  type="flex" justify="state">
           {/*小图*/}
           {Minimg}
         </Row>
         </Link>
         {/*价格*/}
         <p style={{color:'#e4393c',fontSize:20,marginBottom:0}}>{this.props.datas.price}</p>
          {/*标题*/}
         <p style={{marginBottom:0}}>{this.props.datas.title}</p>
         {/*评论*/}
         <p>已有<span style={{color:'#646fb0',fontFamily:'verdana',fontWeight:'bold'}}>{this.props.datas.comm}+</span>万人评价</p>

      </Col>

		);
	}

  minOver(index){
   
    var that=this
    return ()=>{
      that.setState({
        index:index
      })
    }
  }
}
  module.exports = Phone_item