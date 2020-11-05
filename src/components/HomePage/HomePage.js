import React, { useState } from 'react'
import firebase from '../../config/fire'
import { useHistory } from 'react-router-dom';
import NavBar from '../NavBar/NavBar'
import MyList from '../MyList/MyList'
import TheirLists from '../TheirLists/TheirLists'

const HomePage = () => {

    const [selectedList, setSelectedList] = useState('myList')
    const [currentUserEmail] = useState(firebase.getCurrentUserEmail())
    const [currentUserGroupCode] = useState(firebase.getCurrentUserGroupCode())
    const [currentUserDisplayName] = useState(firebase.getCurrentUserDisplayName())

    const history = useHistory();
    const currentUser = {
        email: currentUserEmail,
        groupCode: currentUserGroupCode
    }

    if(!firebase.getCurrentUserEmail()) {
        history.push('/authenticate')
    }

    return (
        <div>
            <NavBar
                selectedList={selectedList}
                setSelectedList={setSelectedList}
                currentUserDisplayName={currentUserDisplayName}
                currentUser={currentUser}
            /> 
            <>
                {selectedList === 'myList' ? <MyList currentUser={currentUser} /> : <TheirLists currentUser={currentUser} />}
            </>
        </div>
    )
}

export default HomePage