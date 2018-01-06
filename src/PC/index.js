import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'
import Conter from './Conter/Conter.js'


export default class Index extends React.Component{
  
  render(){
    
    return (
        <div id="Index">
          {/*头部*/}
          <Header />
          <div className='ConterBox'>
            {/*内容*/}
            <Conter />
            {/*footer*/}
            <Footer />
          </div>
          
          
        </div>
      
    );
  }


  
  
}
