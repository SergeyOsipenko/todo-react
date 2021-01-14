import React, {Suspense, lazy, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import { useDispatch } from 'react-redux';
import { getLocalStorage } from '../actions';

const Board = lazy(() => import('../Board/Board'));
const DoingCard = lazy(() => import('../DoingCard/DoingCard'));

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getLocalStorage())
	});

	return (
		<div className="app">
			<div className="app-content">
				<h1 className="app-content__todo-label">todos-react</h1>
				<Router>
					<Suspense fallback={""}>
						<Switch>
							<Redirect exact from="/" to="/Board" />
							<Route exact path="/Board" component={Board} />
							<Route exact path="/Doing/:id" component={DoingCard} />
						</Switch>
					</Suspense>
				</Router>
			</div>
		</div>
	);
}

export default App;
