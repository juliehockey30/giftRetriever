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

    async register(name, groupCode, email, password) {
      await(this.auth.createUserWithEmailAndPassword(email, password))
      return this.auth.currentUser.updateProfile({
        displayName: name,
        photoURL: groupCode
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

    updateDisplayName(newName, groupCode) {
      return this.auth.currentUser.updateProfile({ displayName: newName, photoURL: groupCode })
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

    addUserToGroup(groupCode, email, displayName) {
      return this.db.ref(`${groupCode}/${email}`).set({
        email: email,
        name: displayName
      });
    }

    getMyWishListItems(groupCode, email) {
      return this.db.ref(`${groupCode}/${email}/wishList`)
    }

    addItemToList(groupCode, email, name, description, link, url, imageName) {
      return this.db.ref(`${groupCode}/${email}/wishList`).push({
        name: name,
        description: description,
        link: link,
        purchased: false,
        imageUrl: url,
        imageName: imageName
      });
    }

    updateItem(groupCode, email, key, data) {
      return this.db.ref(`${groupCode}/${email}/wishList`).child(key).update(data);
    }

    deleteItem(groupCode, email, key) {
      return this.db.ref(`${groupCode}/${email}/wishList`).child(key).remove();
    }

    getEntireGroup(groupCode) {
      return this.db.ref(`${groupCode}`)
    }

    markItemAsPurchased(groupCode, email, key, data) {
      return this.db.ref(`${groupCode}/${email}/wishList`).child(key).update(data);
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