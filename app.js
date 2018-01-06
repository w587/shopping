import React from 'react';
import ReactDOM from 'react-dom';

import PC from './src/PC.js'
import Mobile from './src/Mobile.js'

import MediaQuery from 'react-responsive';


export default class App extends React.Component{
	
	render(){
		
		return (
  			<div id="shopping">
          <MediaQuery query="(min-device-width: 1224px)">
            <PC />
          </MediaQuery>

           <MediaQuery query="(max-device-width: 980px)">
            <Mobile />
          </MediaQuery>
  			</div>
			
		);
	}


	
	
}

ReactDOM.render(<App />,document.getElementById('box'))