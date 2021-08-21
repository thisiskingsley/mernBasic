import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import HomePage from './HomePage';
import ShowPage from './ShowPage';
import NewPage from './NewPage';
import EditPage from './EditPage';

//MAKE SURE YOUR LOCALHOST MONGODB SERVER IS RUNNING!!!
const App = () => {
	return (
		<div>
			<Router history={history}>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/products/new" component={NewPage} />
					<Route exact path="/products/:id/edit" component={EditPage} />
					<Route exact path="/products/:id" component={ShowPage} />

					<Route exact path="*" component={() => 'Page Does Not Exist'} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
