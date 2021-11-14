import firebase from '../../config/fire'

async function addItemToList(userName, itemName, itemDescription, itemLink, itemImageUrl) {
    try {
        await firebase.addItemToList(
            userName,
            itemName,
            itemDescription,
            itemLink,
            itemImageUrl,
        )
    } catch(error) {
        alert(error.message)
    }
}

async function deleteItemFromList(userName, key) {
   try {
        await firebase.deleteItem(userName, key)
    } catch(error) {
        alert(error.message)
    }
}

async function updateItemOnList(userName, key, data) {
    try {
         await firebase.updateItem(userName, key, data)
     } catch(error) {
         alert(error.message)
     }
 }
 

export { addItemToList, deleteItemFromList, updateItemOnList }