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

const CheckboxGroup = Checkbox.Group;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

  function handleButtonClick(e) {
    message.info('Click on left button.');
    console.log('click left button', e);
  }
  
  function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }
  
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">厦门</Menu.Item>
      <Menu.Item key="2">泉州</Menu.Item>
      <Menu.Item key="3">福州</Menu.Item>
    </Menu>
  );

class Phone_sort extends React.Component{
	
	render(){
    
		return (
  			<div className='Phone_sort' style={{marginLeft:20,marginBottom:20}}>
              <RadioGroup  defaultValue="a">
                <RadioButton value="a">综合排序</RadioButton>
                <RadioButton value="b">销量</RadioButton>
                <RadioButton value="c">价格</RadioButton>
                <RadioButton value="d">评论数</RadioButton>
                <RadioButton value="e">上架时间</RadioButton>
              </RadioGroup>

              <div style={{display:'flex',flexDirection: 'row',alignItems:'center',marginTop:20}}>收货地
                <Dropdown style={{}} overlay={menu}>
                  <Button style={{ marginRight:20}}>
                    北京 <Icon type="down" />
                  </Button>
                </Dropdown>

                <Checkbox.Group  >
                  <Row  type="flex" justify="state">
                    <Col ><Checkbox value="A">京东配送</Checkbox></Col>
                    <Col ><Checkbox value="B">京尊达</Checkbox></Col>
                    <Col ><Checkbox value="C">货到付款</Checkbox></Col>
                    <Col ><Checkbox value="D">仅显示有货</Checkbox></Col>
                    <Col ><Checkbox value="E">可配送全球</Checkbox></Col>
                  </Row>
                </Checkbox.Group>,
              </div>
            </div>
			
		);
	}
}
  module.exports = Phone_sort