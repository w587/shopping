import React from 'react';


import { Checkbox, Row, Col } from 'antd';


var datas=require("../data/Phone_list/Phone_conterL.json")

class Phone_conterL extends React.Component{
	
  constructor(){
    super();
    this.state = {
     
    }
  }

	render(){
    

    var items=datas.map((item,index)=>{
      return (
          <div key={index} className='Phone_conterL_item'>
            <img src={item.img} />
            <span style={{}}>{item.title}</span>
            <span style={{color:'red',fontSize:14,fontWeight:'bold'}}>{item.price}</span>
            <span style={{color:'gray',fontSize:14}}>已有{item.comm}人评论</span>
          </div>
        )
    })

		return (
  			
        <div className='Phone_conterL'>
          <h2 style={{fontWeight:'bold'}}>商品精选</h2>
          {items}
        </div>
		);
	}
}
  module.exports = Phone_conterL