import firebase from '../../config/fire'

async function addUserToGroup(groupCode, userName, currentUserDisplayName) {
    try {
        await firebase.addUserToGroup(
            groupCode,
            userName,
            currentUserDisplayName
        )
    } catch(error) {
        alert(error.message)
    }
}

async function attachGroupToUser(groupCode, userName) {
    try {
        await firebase.attachGroupToUser(
            groupCode,
            userName,
        )
    } catch(error) {
        alert(error.message)
    }
}

async function createNewGroup(groupCode, groupName) {
    try {
        await firebase.createGroup(
            groupCode,
            groupName,
        )
    } catch(error) {
        alert(error.message)
    }
}

export {
    addUserToGroup,
    attachGroupToUser,
    createNewGroup
}