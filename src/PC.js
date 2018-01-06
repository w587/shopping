import React from 'react';

import {Router,
  Route,
 
  HashRouter,
  hashHistory,
  Switch} from 'react-router-dom'

import 'antd/dist/antd.css';

import Index from './PC/Index.js'
import Detail from './PC/Detail.js'
import Show_cat from './PC/Show_cat.js'
import Phone_list from './PC/Phone_list/Phone_list.js'

export default class PC extends React.Component{
	
	render(){
		
		return (
  			<div style={{width:'100%'}} id="PC">
          <HashRouter history={hashHistory}>
              <Switch>
                <Route exact path="/" component={Index}/>
                {/*传递参数*/}
                <Route path="/detail" component={Detail}/>
                
                <Route path="/Show_cat" component={Show_cat}/>

                <Route path="/Phone_list" component={Phone_list}/>
              </Switch>
            </HashRouter>
  			</div>
			
		);
	}


	
	
}
