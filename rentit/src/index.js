import React from 'react';
import ReactDOM from 'react-dom';
import './grid.css';
import './index.css';

import Form from './form'
import Room from './room'
import Details from './Details'
import Profile from './profile'
import Bills from './bills'
import Menuside from './menu';

function App() {
  return <section>
  <section className='row' id='firstSection'>
  <div className='col span-1-of-2 left'> </div>
    <Form/>
  </section>
  <section className='row'>
    <Details/>
    <Room/>
    <Menuside/>
  </section>
  <section className='row' style={{backgroundColor:'#e4e4e4'}}>
    <Profile/>
    <Bills/>
  </section>
  </section>
}

ReactDOM.render(
  <App/>, document.getElementById('root')
);

