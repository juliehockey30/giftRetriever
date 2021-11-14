import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-database'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyCwFsY_TEzwPrfQwaUbQKQ64ZnwYRg8rLg",
    authDomain: "gift-retriever-9249c.firebaseapp.com",
    databaseURL: "https://gift-retriever-9249c.firebaseio.com",
    projectId: "gift-retriever-9249c",
    storageBucket: "gift-retriever-9249c.appspot.com",
    messagingSenderId: "510563911448",
    appId: "1:510563911448:web:dd85f95bb555689cddc06d"
  }

  class Firebase {
    constructor() {
      firebase.initializeApp(firebaseConfig)
      this.auth = firebase.auth()
      this.db = firebase.database()
      this.storage = firebase.storage()
    }

    login(email, password) {
      return this.auth.signInWithEmailAndPassword(email, password)
    }

    logout() {
      this.auth.signOut()
    }

    async register(name, email, password) {
      await(this.auth.createUserWithEmailAndPassword(email, password))
      return this.auth.currentUser.updateProfile({
        displayName: name,
      })
    }

    isInitialized() {
      return new Promise(resolve => {
        this.auth.onAuthStateChanged(resolve)
      })
    }

    updatePassword(newPassword) {
      return this.auth.currentUser.updatePassword(newPassword)
    }

    updateDisplayName(newName) {
      return this.auth.currentUser.updateProfile({ displayName: newName })
    }

    updateDisplayNameInGroup(groupCode, userName, data) {
      return this.db.ref(`groups/${groupCode}/users/${userName}`).update(data);
    }

    getCurrentUserEmail() {
      return this.auth.currentUser && this.auth.currentUser.email
    }

    getCurrentUserGroupCode() {
      return this.auth.currentUser && this.auth.currentUser.photoURL
    }

    getCurrentUserDisplayName() {
      return this.auth.currentUser && this.auth.currentUser.displayName
    }

    createGroup(groupCode, groupName,) {
      return this.db.ref(`groups/${groupCode}`).set({
        name: groupName,
      });
    }

    addGroupToUser(groupCode, userName) {
      return this.db.ref(`users/${userName}/groups`).push().set({
        code: groupCode,
      });
    }

    addUserToGroup(groupCode, userName, displayName) {
      return this.db.ref(`groups/${groupCode}/users/${userName}`).set({
        userName: userName,
        name: displayName
      });
    }

    attachGroupToUser(groupCode, userName) {
      return this.db.ref(`users/${userName}/groups`).push().set({
        groupCode: groupCode,
      });
    }

    getUsersGroups(userName) {
      return this.db.ref(`users/${userName}/groups`)
    }

    getAllGroups() {
      return this.db.ref('/groups')
    }

    getAllUsersInGroup(groupCode) {
      return this.db.ref(`/groups/${groupCode}/users`)
    }

    getMyWishListItems(userName) {
      return this.db.ref(`users/${userName}/wishList`)
    }

    getSelectedUsersWishList(userName) {
      return this.db.ref(`users/${userName}/wishList`)
    }

    getMyPurchasedItems(userName) {
      return this.db.ref(`users/${userName}/purchasedList`)
    }

    addItemToList(userName, name, description, link, url) {
      return this.db.ref(`users/${userName}/wishList`).push({
        name: name,
        description: description,
        link: link,
        purchased: false,
        imageUrl: url,
      });
    }

    updateItem(userName, key, data) {
      return this.db.ref(`users/${userName}/wishList`).child(key).update(data);
    }

    deleteItem(userName, key) {
      return this.db.ref(`users/${userName}/wishList`).child(key).remove();
    }

    getEntireGroup(groupCode) {
      return this.db.ref(`${groupCode}`)
    }

    markItemAsPurchased(userName, key, data) {
      return this.db.ref(`users/${userName}/wishList`).child(key).update(data);
    }

    addItemToPurchasedList(userName, item) {
      return this.db.ref(`users/${userName}/purchasedList`).push(item);
    }

    sendForgotPasswordEmail(email) {
      return this.auth.sendPasswordResetEmail(email)
    }

    uploadImage(image) {
      return this.storage.ref().child(image.name).put(image)
    }

    getImageUrl(imageName) {
      return this.storage.ref().child(imageName).getDownloadURL()
    }

    getImageName(imageName) {
      return this.storage.ref().child(imageName).getImageName()
    }


  }

  export default new Firebase();