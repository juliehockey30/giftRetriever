import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import {
    Background,
    Logo,
    Name,
    ProfileWrapper,
    ProfileText,
    LogoutButton,
    ToggleWrapper,
    ToggleItem,
    Modal,
    ModalContent,
    InputField,
    CancelButton,
    UpdateButton,
    ShowPasswordIcon,
    PasswordWrapper,
    SuccessText,
    SuccessSubtext,
    HamburgerIcon,
    HamburgerMenu,
    HamburgerItem
} from './NavBar.styled'
import firebase from '../../config/fire'
import logo from '../../assets/retrieverLogo.png'
import showIcon from '../../assets/show.png'
import hideIcon from '../../assets/hide.png'
import hamburger from '../../assets/hamburger.png'

const NavBar = ({
    selectedList,
    setSelectedList,
    currentUserDisplayName,
    currentUser
}) => {

    const [showUpdateModal, setShowUpdateModal] = useState(false)
    const [updatePassword, setUpdatePassword] = useState(false)
    const [updateDisplayName, setUpdateDisplayName] = useState(false)
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [updateSuccess, setUpdateSuccess] = useState(false)
    const [showHamburgerMenu, setShowHamburgerMenu] = useState(false)

    const history = useHistory()

    const logout = () => {
        firebase.logout()
        history.push('/authenticate')
    }

    const closeUpdateModal = () => {
        setShowUpdateModal(false)
        setUpdatePassword(false)
        setUpdateDisplayName(false)
        setUpdateSuccess(false)
        setPassword('')
        setDisplayName('')
    }

    const getPasswordIcon = () => {
        if(showPassword) {
            return hideIcon
        } else {
            return showIcon
        }
    }

    const showPasswordOnClick = () => {
        setShowPassword(!showPassword)
    }

    const updateProfile = (target, updateString) => {
        if(target === 'password') {
            firebase.updatePassword(updateString)
        } else {
            firebase.updateDisplayName(updateString, currentUser.groupCode)
            // firebase.updateDisplayNameInGroup(updateString, currentUser.groupCode)
        }
        setUpdateSuccess(true)
        setUpdatePassword(false)
        setUpdateDisplayName(false)
    }

    return (
        <>
            {showUpdateModal && 
                <Modal>
                <ModalContent>
                    <>
                    {!updatePassword && !updateDisplayName && !updateSuccess &&
                        <>
                            <UpdateButton onClick={() => setUpdatePassword(true)}>UPDATE PASSWORD</UpdateButton>
                            <UpdateButton onClick={() => setUpdateDisplayName(true)}>UPDATE DISPLAY NAME</UpdateButton>
                        </>
                    }
                    {updatePassword &&
                        <>
                            <PasswordWrapper>
                                <InputField
                                    placeholder="Password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <ShowPasswordIcon
                                    src={getPasswordIcon()}
                                    onClick={showPasswordOnClick}
                                />                   
                            </PasswordWrapper>
                            <UpdateButton onClick={() => updateProfile('password', password)}>UPDATE PASSWORD</UpdateButton>
                        </>
                    }
                    {updateDisplayName &&
                        <>
                            <InputField
                                placeholder="Display Name"
                                value={displayName}
                                onChange={(e) => setDisplayName(e.target.value)}
                            />
                            <UpdateButton onClick={() => updateProfile('displayName', displayName)}>UPDATE DISPLAY NAME</UpdateButton>
                        </>
                    }
                    {updateSuccess && 
                        <>
                        <SuccessText>Success!</SuccessText>
                        <SuccessSubtext>Note: You will need to refresh the page to see these changes.</SuccessSubtext>
                        </>
                    }
                    <CancelButton onClick={() => closeUpdateModal(false)}>{updateSuccess ? 'CLOSE' : 'CANCEL'}</CancelButton>
                    </>
                </ModalContent>
            </Modal>
            }
            <Background>
                <Logo src={logo}/>
                <Name>GIFT RETRIEVER</Name>
                <ProfileWrapper>
                    <ProfileText>{`Welcome, ${currentUserDisplayName}`}</ProfileText>
                    <LogoutButton onClick={logout}>LOG OUT</LogoutButton>
                    <ProfileText
                        isLink={true}
                        onClick={() => setShowUpdateModal(true)}
                    >Update Profile</ProfileText>
                </ProfileWrapper>
                <HamburgerIcon
                    src={hamburger}
                    onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}
                />
                {showHamburgerMenu &&
                    <HamburgerMenu>
                        <HamburgerItem onClick={() => setShowUpdateModal(true)}>UPDATE PROFILE</HamburgerItem>
                        <HamburgerItem onClick={logout}>LOG OUT</HamburgerItem>
                    </HamburgerMenu>
                }
            </Background>
            <ToggleWrapper>
                <ToggleItem
                    selected={selectedList === 'myList'}
                    onClick={() => setSelectedList('myList')}
                >MY WISH LIST</ToggleItem>
                <ToggleItem
                    selected={selectedList === 'theirList'}
                    onClick={() => setSelectedList('theirList')}
                >{`FRIENDS & FAMILY WISH LISTS`}</ToggleItem>
            </ToggleWrapper>
        </>
    )
}

export default NavBar