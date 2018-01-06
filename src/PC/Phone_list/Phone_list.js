import React from 'react';

import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import Conter_miniNav from './Conter_miniNav.js'
import Phone_conterL from './Phone_conterL.js'
import Phone_item from './Phone_item.js'
import Phone_sort from './Phone_sort.js'

import { 
  Row, 
  Col
 } from 'antd';



require("../style/Phone_List/Phone_List.css")

var datas=require("../data/Phone_list/Phone_list.json")



class Phone_list extends React.Component{
	
  constructor(){
    super();
    this.state = {
      index:0
    }
  }




	render(){
    

    var items=datas.map((item,index)=>{

      return (
            
            <Phone_item key={index} datas={item}/>
            
        )
    })

		return (
  			<div id="Phone_list">
  				{/*头部*/}
  				<Header />
          
  				<div className='ConterBox'>
            {/*商品分类*/}
            <Conter_miniNav />

            {/*商品列表*/}
            <div className='Phone_conter'>

              {/*广告栏*/}
              <Phone_conterL />

              {/*商品列表*/}
              <div className='Phone_conterR'>

                {/*排序方式*/}
                <Phone_sort />

                <Row >
                  {items}
                </Row>
                
              </div>

            </div>

  				  {/*底部*/}
  					<Footer />
  				</div>
  				
  				
  			</div>
			
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
  module.exports = Phone_list