import React from 'react';

require('../style/Header/Header.css')
import {Menu, Dropdown, Icon,Row, Col,Modal,Form,Input,Button  } from 'antd';

import {Link} from 'react-router-dom'

var FormItem  = Form.Item;


class Header extends React.Component{

	 handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

	constructor(){
		super();
		this.state={
			visible:false
		}
	}

	showModal(){
  	  this.setState({
  	    visible: true,
  	  });
  	}

  	handleOk(e){
  	  console.log(e);
  	  this.setState({
  	    visible: false,
  	  });
  	}

  	handleCancel(e){
  	  console.log(e);
  	  this.setState({
  	    visible: false,
  	  });
  	}

	render(){
		const menu = (
		  <Menu className='ShowCartMenu'>
		    <Menu.Item size='50'>
		      <a target="_blank" rel="noopener noreferrer" >暂无商品</a>
		    </Menu.Item>
		  </Menu>
		);

		var { getFieldDecorator } = this.props.form;

		var HeaderTop_Data=[{"Item":["MIUI","IOT","云服务","水滴","金融","有品","Select Region"]},
							{"Item":["登陆","注册","消息通知"]}]


		var MoudelBoxItem=HeaderTop_Data[0].Item.map((item, index) =>{
			return (<span key={index}>{item}</span>)
		})

		var UserBoxItem=HeaderTop_Data[1].Item.map((item, index) =>{
			return (<span key={index}>{item}</span>)
		})

		return (
			<div className='Header'>
				{/*头部广告*/}
				<img src='http://i1.mifile.cn/a4/cms_15139095186428_rUbpq.jpg' />
				{/*头部导航*/}
				<div className='HeaderTop'>
					{/*模块导航*/}
					<div className='MoudelBox'>
            <Link to='/'><span>小米商城</span></Link>
						{MoudelBoxItem}
					</div>
					{/*用户导航*/}
					<div className='UserBox'>
						{UserBoxItem}
						<span style={{color:'white'}} onClick={this.showModal.bind(this)}>登陆</span>
						<Dropdown overlay={menu}>
  						  <Link to='/Show_cat'><span  className="ant-dropdown-link ShowCart">
  						   购物车<Icon type="down" />
  						  </span></Link>
  						</Dropdown>
					</div>

					<Modal
        			  title="Basic Modal"
        			  visible={this.state.visible}
        			  onOk={this.handleOk.bind(this)}
        			  onCancel={this.handleCancel.bind(this)}
        	>
        		<Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
                <FormItem>
                  {getFieldDecorator('userName', {
                    rules: [{  message: 'Please input your username!' }],
                  })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{ message: 'Please input your Password!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                  )}
                </FormItem>
                <FormItem>
                  <a className="login-form-forgot" href="">Forgot password</a>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                  </Button>
                  Or <a href="">register now!</a>
                </FormItem>
            </Form>
        	</Modal>
				</div>
			</div>
		);
	}
	primes(){

	}

	
}

 Header = Form.create()(Header);
	module.exports = Header