import React, { useEffect, useState } from 'react';
import HomePage from '../HomePage/HomePage';
import Authentication from '../Authentication/Authentication';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from '../../config/fire'
export default function App () {

    const [firebaseInitialized, setFirebaseInitialized] = useState(false)

	useEffect(() => {
		firebase.isInitialized().then(val => {
			setFirebaseInitialized(val)
		})
    })

	return firebaseInitialized !== false ? (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/authenticate" component={Authentication} />
            </Switch>
        </Router>
    )
    : <div>I AM LOADING</div>
}