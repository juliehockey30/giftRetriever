import React, { useEffect, useState } from 'react'
import firebase from '../../config/fire'
import { useHistory } from 'react-router-dom';
import {
    ApiButton,
    ButtonWrapper,
    FormWrapper,
    GroupsHeader,
    GroupName,
    StyledButton,
    StyledInput,
    StyledLabel,
    WarningText,
    WelcomeText,
    Wrapper
} from './HomePage.styled';
import {
    addUserToGroup,
    attachGroupToUser,
    createNewGroup
} from './api'

const HomePage = ({ setShowNavBar }) => {

    const [currentUserEmail] = useState(firebase.getCurrentUserEmail())
    const [currentUserDisplayName, setCurrentUserDisplayName] = useState(firebase.getCurrentUserDisplayName())
    const [groupCode, setGroupCode] = useState('')
    const [groupName, setGroupName] = useState('')
    const [usersGroupCodes, setUsersGroupCodes] = useState()
    const [usersGroupNames, setUsersGroupNames] = useState()
    const [allGroups, setAllGroups] = useState()
    const [showForm, setShowForm] = useState()

    const history = useHistory();

    if(!firebase.getCurrentUserEmail()) {
        history.push('/authenticate')
    }

    const userName = currentUserEmail ? currentUserEmail.substr(0, currentUserEmail.indexOf('@')) : ''
    const displayName = firebase.getCurrentUserDisplayName()

    useEffect(() => {
        setShowNavBar(true)
    }, [setShowNavBar])

    useEffect(() => {
        setCurrentUserDisplayName(displayName)
    }, [displayName])

    useEffect(() => {
            const db = firebase.getAllGroups()
            db.on('value', function(snapshot) {
                let allGroupsArr = []
                snapshot.forEach(function(group) {
                    const groupObj = {
                        code: group.key,
                        name: group.val().name
                    }
                    allGroupsArr.push(groupObj);
                });
                setAllGroups(allGroupsArr)
            });
    }, [])

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

    useEffect(() => {
        if(allGroups && usersGroupCodes) {
            const usersGroupsNames = []
            allGroups.forEach((group) => {
                if (usersGroupCodes.includes(group.code)){
                    usersGroupsNames.push(group.name)
                }
            })
            setUsersGroupNames(usersGroupsNames)
        }
    }, [allGroups, usersGroupCodes])

    function handleJoinGroup() {
        addUserToGroup(groupCode.toUpperCase(), userName, currentUserDisplayName)
        attachGroupToUser(groupCode.toUpperCase(), userName)
    }

    async function handleCreateGroup() {
        await createNewGroup(groupCode.toUpperCase(), groupName)
        await addUserToGroup(groupCode.toUpperCase(), userName, currentUserDisplayName)
        await attachGroupToUser(groupCode.toUpperCase(), userName)
        setShowForm(false)
    }

    return (
        <Wrapper>
            <WelcomeText>{`Welcome ${currentUserDisplayName}!`}</WelcomeText>
            {usersGroupNames && 
                <>
                    {usersGroupNames.length === 0 ? <GroupsHeader>You are currently not a part of any groups. Either join an existing group or create a new group using the buttons below</GroupsHeader> :
                    <>
                        <GroupsHeader>You are currently a part of the following group(s) </GroupsHeader>
                        {usersGroupNames.map(groupName => (
                            <GroupName>{groupName}</GroupName>
                        ))}
                    </>
}
                </>
            }
            <ButtonWrapper>
                <StyledButton onClick={() => setShowForm('join')} selected={showForm === 'join'}>JOIN EXISTING GROUP</StyledButton>
                <StyledButton onClick={() => setShowForm('create')} selected={showForm === 'create'}>CREATE NEW GROUP</StyledButton>
            </ButtonWrapper>
            {showForm && 
                <FormWrapper>
                    {showForm === 'join' ? 
                        <>
                            <div>
                                <StyledInput
                                    hasValue={groupCode !== ''}
                                    onChange={(e) => setGroupCode(e.target.value)}
                                    upperCase={true}
                                />
                                <StyledLabel hasValue={groupCode !== ''}>Group code</StyledLabel> 
                            </div>
                            <ApiButton
                                disabled={!allGroups.some(g => g.code === groupCode.toUpperCase())}
                                onClick={handleJoinGroup}
                            >JOIN GROUP</ApiButton>
                            {!allGroups.some(g => g.code === groupCode.toUpperCase()) && <WarningText>Group code does not exist</WarningText>}
                        </>
                    : 
                        <>
                            <div>
                                <StyledInput
                                    hasValue={groupCode !== ''}
                                    onChange={(e) => setGroupCode(e.target.value)}
                                    upperCase={true}
                                />
                                <StyledLabel hasValue={groupCode !== ''}>Group code</StyledLabel> 
                            </div>
                            <div>
                                <StyledInput
                                    hasValue={groupName !== ''}
                                    onChange={(e) => setGroupName(e.target.value)}
                                />
                                <StyledLabel hasValue={groupName !== ''}>Group name</StyledLabel> 
                            </div>
                            <ApiButton
                                disabled={allGroups.some(g => g.code === groupCode.toUpperCase()) || groupCode === "" || groupName === ""}
                                onClick={handleCreateGroup}
                            >CREATE GROUP</ApiButton>
                            {allGroups.some(g => g.code === groupCode.toUpperCase()) && <WarningText>Group code already exists</WarningText>}
                        </>
                    }
                </FormWrapper>
            }
        </Wrapper>
    )
}

export default HomePage