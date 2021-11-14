import React, { useEffect, useState } from 'react';
import SideNavBar from '../SideNavBar/SideNavBar';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import HomePage from '../HomePage/HomePage';
import Authentication from '../Authentication/Authentication';
import MyList from '../MyList/MyList';
import TheirLists from '../TheirLists/TheirLists';
import PurchaseHistory from '../PurchaseHistory/PurchaseHistory';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from '../../config/fire';
import { Flex } from './App.styled'

export default function App () {

    const [firebaseInitialized, setFirebaseInitialized] = useState(false)
    const [showNavBar, setShowNavBar] = useState(false)

	useEffect(() => {
		firebase.isInitialized().then(val => {
			setFirebaseInitialized(val)
		})
    })

	return firebaseInitialized !== false ? (
        <Router>
            <Flex authentication={window.location.pathname === '/authenticate'}>
                {showNavBar ?
                    <>
                        <HamburgerMenu />
                        <SideNavBar />
                    </>
                : null}
                <Switch>
                    <Route exact path="/"><HomePage setShowNavBar={setShowNavBar} /></Route>
                    <Route exact path="/authenticate"><Authentication setShowNavBar={setShowNavBar} /></Route>
                    <Route exact path="/my-list"><MyList setShowNavBar={setShowNavBar} /></Route>
                    <Route exact path="/group-lists"><TheirLists setShowNavBar={setShowNavBar} /></Route>
                    <Route exact path="/purchased"><PurchaseHistory setShowNavBar={setShowNavBar} /></Route>
                </Switch>
            </Flex>
        </Router>
    )
    : <div>SIT! STAY! WE'RE FETCHING YOUR DATA  </div>
}