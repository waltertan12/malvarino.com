// react stuff
import React, {Component} from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';

// components
import Resume from './components/resume/resume';
import NoMatch from './components/noMatch';
import RQMSClient from './components/rqms/rqmsClient';
//
// my app component 
class MyApp extends Component{
	constructor(){
		super();
	} // constructor()
	render(){
		return(
			<div className="container">
				<Resume/>
			</div>
		);
	} // renderer()

}

render((
  <Router>
    <Route path="/" component={ MyApp }/>
	<Route path="rqms" component={RQMSClient}/>
	<Route path="*" component={ NoMatch }/>
  </Router>
), document.getElementById('app'));