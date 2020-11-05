import React, { useState, useEffect } from 'react'
import {
    Modal,
    ModalContent,
    InputField,
    InputLabel,
    LargeInputField,
    CancelButton,
    Wrapper,
    NameHeader,
    ButtonWrapper,
    AddItem,
    ItemImageWrapper,
    CloseIcon
} from './MyList.styled'
import firebase from '../../config/fire'
import ListItem from './ListItem/ListItem'
import close from '../../assets/close.png'

const MyList = ({ currentUser }) => {

    const [showModal, setShowModal] = useState(false)
    const [itemName, setItemName] = useState('')
    const [itemLink, setItemLink] = useState('')
    const [itemDescription, setItemDescription] = useState('')
    const [itemImage, setItemImage] = useState(null)
    const [itemImageUrl, setItemImageUrl] = useState('')
    const [itemImageName, setItemImageName] = useState('')
    const [myList, setMyList] = useState([])
    const [loading, setLoading] = useState(false)

    async function addItemToList() {
        const userName = currentUser.email.substr(0, currentUser.email.indexOf('@'));
        const groupCode = currentUser.groupCode

        try {
            await firebase.addItemToList(
                groupCode,
                userName,
                itemName,
                itemDescription,
                itemLink,
                itemImageUrl,
                itemImageName
            )
            setItemName('')
            setItemDescription('')
            setItemLink('')
            setItemImage(null)
            setShowModal(false)
        } catch(error) {
            alert(error.message)
        }
    }

    async function chooseFile(e)  {
        const image = e.target.files[0]
        setItemImageName(image.name)
        await firebase.uploadImage(image)
        setLoading(true)
        firebase.getImageUrl(image.name)
        .then((result) => {
            setLoading(false)
            setItemImageUrl(result)
        })
    }

    useEffect(() => {
        if(currentUser && currentUser.email) {
            const userName = currentUser.email.substr(0, currentUser.email.indexOf('@'));
            const groupCode = currentUser.groupCode
            const db = firebase.getMyWishListItems(groupCode, userName)
            db.on('value', function(snapshot) {
                let itemsArr = []
                snapshot.forEach(function(item) {
                    const key = item.key
                    const name = item.val().name;
                    const description = item.val().description;
                    const link = item.val().link;
                    const purchased = item.val().purchased;
                    const imageUrl = item.val().imageUrl;
                    const imageName = item.val().imageName;
                    item = {
                        key,
                        name,
                        description,
                        link,
                        purchased,
                        imageUrl,
                        imageName
                    }
                    itemsArr.push(item);
                });
                setMyList(itemsArr)
            });
        }
    }, [currentUser])

    return (
        <>
            {showModal && 
                <Modal>
                    <ModalContent>
                        <InputField
                            placeholder="Item Name"
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                        />
                        <InputField
                            placeholder="Link To Item Online"
                            value={itemLink}
                            onChange={(e) => setItemLink(e.target.value)}
                        />
                        <LargeInputField 
                            placeholder="Item Description. Please include as many details as possible (size, color, etc.)"
                            value={itemDescription}
                            onChange={(e) => setItemDescription(e.target.value)}
                            rows="4"
                        />
                        <InputLabel>Upload Image Of Item</InputLabel>
                        {!itemImage ?
                            <>
                                <InputField 
                                    type="file"
                                    onChange={e => chooseFile(e)}
                                />
                            </>
                        : <ItemImageWrapper>
                            <div>{itemImage.name}</div>
                            <CloseIcon
                                src={close}
                                onClick={() => setItemImage(null)}
                            />
                        </ItemImageWrapper> }
                        <ButtonWrapper>
                            <CancelButton onClick={() => setShowModal(false)}>CANCEL</CancelButton>
                            <AddItem
                                onClick={() => addItemToList()}
                                disabled={loading}
                            >ADD TO WISH LIST</AddItem>
                        </ButtonWrapper>
                    </ModalContent>
                </Modal>
            }
            <Wrapper>
                <NameHeader>MY WISH LIST</NameHeader>
                <ButtonWrapper>
                    <AddItem onClick={() => setShowModal(true)}>ADD ITEM</AddItem>
                </ButtonWrapper>
                {myList && myList.map((item) => (
                    <ListItem
                        item={item}
                        currentUser={currentUser}
                        enableEdit={true}
                    />
                ))}
            </Wrapper>
        </>
    )
}

export default MyList