import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {
    ApiButton,
    Background,
    CancelButton,
    FormWrapper,
    Logo,
    Modal,
    ModalHeader,
    NavItem,
    NavItemText,
    Overlay,
    SignOutButton,
    StyledInput,
    StyledLabel,
    UpdateProfileButton,
} from './SideNavBar.styled'
import logo from '../../assets/retrieverLogo.png'
import firebase from '../../config/fire'
import { useHistory } from 'react-router-dom';

const SideNavBar = () => {
    const history = useHistory()

    const [currentUserEmail] = useState(firebase.getCurrentUserEmail())
    const [displayName, setDisplayName] = useState(firebase.getCurrentUserDisplayName())
    const [selectedPage, setSelectedPage] = useState(window.location.pathname.substring(1))
    const [showModal, setShowModal] = useState(false)
    const [usersGroupCodes, setUsersGroupCodes] = useState()

    const userName = currentUserEmail ? currentUserEmail.substr(0, currentUserEmail.indexOf('@')) : ''

    useEffect(() => {
        const db = firebase.getUsersGroups(userName)
        db.on('value', function(snapshot) {
            let usersGroupsArr = []
            snapshot.forEach(function(group) {
                usersGroupsArr.push(group.val().groupCode);
            });
            setUsersGroupCodes(usersGroupsArr)
        });
    }, [userName])

    function logout() {
        firebase.logout()
        history.push('/authenticate')
    }

    async function updateUserDisplayName() {
        try {
            await firebase.updateDisplayName(displayName)
        } catch(error) {
            alert(error.message)
        }
    }

    async function updateUserDisplayNameInGroups(groupCode) {
        const data = { name: displayName }
        try {
            await firebase.updateDisplayNameInGroup(groupCode, userName, data)
        } catch(error) {
            alert(error.message)
        }
    }

    async function handleUpdateName() {
        await updateUserDisplayName()
        usersGroupCodes.forEach(code => {
            updateUserDisplayNameInGroups(code)
        })
        setShowModal(false)
    }

    return (
        <>
            {showModal &&
                <Overlay>
                    <Modal>
                        <ModalHeader>Update display name</ModalHeader>
                        <FormWrapper>
                            <div>
                                <StyledInput
                                    hasValue={displayName !== ''}
                                    onChange={(e) => setDisplayName(e.target.value)}
                                    value={displayName}
                                />
                                <StyledLabel hasValue={displayName !== ''}>Display name</StyledLabel> 
                            </div>
                        </FormWrapper>
                        <ApiButton
                            disabled={displayName === ''}
                            onClick={handleUpdateName}
                        >CONFIRM UPDATE</ApiButton>
                        <CancelButton onClick={() => setShowModal(false)}>CANCEL</CancelButton>
                    </Modal>
                </Overlay>
            }
            <Background>
                <Link onClick={() => setSelectedPage('/')} to='/'>
                    <Logo src={logo}/>
                </Link>
                <NavItem
                    to='/my-list'
                    onClick={() => setSelectedPage('my-list')}
                >
                    <NavItemText selected={selectedPage === "my-list"}>MY WISH LIST</NavItemText>
                </NavItem>
                <NavItem
                    to='/group-lists'
                    onClick={() => setSelectedPage('group-lists')}
                >
                    <NavItemText selected={selectedPage === "group-lists"}>GROUP WISH LISTS</NavItemText>
                </NavItem>
                <NavItem
                    to='/purchased'
                    onClick={() => setSelectedPage('purchased')}
                >
                    <NavItemText selected={selectedPage === "purchased"}>PURCHASE HISTORY</NavItemText>
                </NavItem>
                <UpdateProfileButton onClick={() => setShowModal(true)}>UPDATE PROFILE</UpdateProfileButton>
                <SignOutButton onClick={logout}>SIGN OUT</SignOutButton>
            </Background>
        </>
    )
}

export default SideNavBar