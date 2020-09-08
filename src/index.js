import React from 'react';
import ReactDOM from 'react-dom';
 
import ClickityClick from './components/ClickityClick';
 import LightSwitch from './components/LightSwitch';
ReactDOM.render(
<div>
  <LightSwitch />
  <ClickityClick color = {'#F00'}/>
</div>, document.getElementById('root'));

