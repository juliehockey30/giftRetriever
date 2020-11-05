import React, { useState } from 'react'
import {
    Row,
    Image,
    TextWrapper,
    Name,
    Description,
    Link,
    EditWrapper,
    EditIcon,
    EditText,
} from './ListItem.styled'
import {
    Modal,
    ModalContent,
    InputField,
    LargeInputField,
    CancelButton,
    ButtonWrapper,
    AddItem,
    DeleteItem,
    InputLabel,
    ItemImageWrapper, CloseIcon
} from '../MyList.styled'
import firebase from '../../../config/fire'
import edit from '../../../assets/edit.png'
import checkmark from '../../../assets/checkmark.png'
import close from '../../../assets/close.png'
import gift from '../../../assets/gift.png'

const ListItem = ({ item, currentUser, selectedEmail, enableEdit }) => {

    const [showItemModal, setShowItemModal] = useState(false)
    const [itemName, setItemName] = useState(item.name)
    const [itemLink, setItemLink] = useState(item.link)
    const [itemDescription, setItemDescription] = useState(item.description)
    const [itemImageUrl, setItemImageUrl] = useState(item.imageUrl)
    const [itemImageName, setItemImageName] = useState(item.imageName)
    const [showPurchasedModal, setShowPurchasedModal] = useState(false)

    async function updateItem() {
        const userName = currentUser.email.substr(0, currentUser.email.indexOf('@'));
        const groupCode = currentUser.groupCode
        const data = {
            name: itemName,
            link: itemLink,
            description: itemDescription,
            purchased: item.purchased,
            imageUrl: itemImageUrl,
            imageName: itemImageName
        }
        try {
            await firebase.updateItem(groupCode, userName, item.key, data)
            setShowItemModal(false)
        } catch(error) {
            alert(error.message)
        }
    }

    async function markItemAsPurchased() {
        const groupCode = currentUser.groupCode
        const data = {
            name: item.name,
            link: item.link,
            description: item.description,
            purchased: true
        }

        try {
            await firebase.markItemAsPurchased(groupCode, selectedEmail, item.key, data)
            setShowPurchasedModal(false)
        } catch(error) {
            alert(error.message)
        }
    }

    async function deleteItem() {
        const userName = currentUser.email.substr(0, currentUser.email.indexOf('@'));
        const groupCode = currentUser.groupCode

        try {
            await firebase.deleteItem(groupCode, userName, item.key)
            setItemName('')
            setItemDescription('')
            setItemLink('')
            setShowItemModal(false)
            setItemImageUrl('')
            setItemImageName('')
        } catch(error) {
            alert(error.message)
        }
    }

    async function chooseFile(e)  {
        const image = e.target.files[0]
        setItemImageName(image.name)
        await firebase.uploadImage(image)
        const imageUrl = await firebase.getImageUrl(image.name)
        setItemImageUrl(imageUrl)
    }

    const removeFile = () => {
        setItemImageName('')
        setItemImageUrl('')
    }

    return (
        <>
        {showItemModal && 
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
                        {!itemImageUrl ?
                            <>
                                <InputField 
                                    type="file"
                                    onChange={e => chooseFile(e)}
                                />
                            </>
                        : <ItemImageWrapper>
                            <div>{itemImageName}</div>
                            <CloseIcon
                                src={close}
                                onClick={removeFile}
                            />
                        </ItemImageWrapper> }
                        <ButtonWrapper>
                            <AddItem onClick={updateItem}>UPDATE ITEM</AddItem>
                            <DeleteItem onClick={deleteItem}>DELETE ITEM</DeleteItem>
                            <CancelButton onClick={() => setShowItemModal(false)}>CANCEL</CancelButton>
                        </ButtonWrapper>
                    </ModalContent>
                </Modal>
            }
            {showPurchasedModal && 
                <Modal>
                    <ModalContent>
                        <InputLabel>Are you sure you want to mark this item is purchased? This action cannot be undone.</InputLabel>
                        <ButtonWrapper>
                            <CancelButton onClick={() => setShowPurchasedModal(false)}>CANCEL</CancelButton>
                            <AddItem onClick={markItemAsPurchased}>MARK AS PURCHASED</AddItem>
                        </ButtonWrapper>
                    </ModalContent>
                </Modal>
            }
            <Row>
                <Image src={itemImageUrl ? itemImageUrl : gift} />
                <TextWrapper>
                    <Name>{item.name.toUpperCase()}</Name>
                    <Description>{item.description}</Description>
                    <Link href={item.link}>LINK TO ITEM ONLINE</Link>
                </TextWrapper>
                {enableEdit ?
                    <EditWrapper onClick={() => setShowItemModal(true)}>
                        <EditIcon src={edit} />
                        <EditText>EDIT ITEM</EditText>
                    </EditWrapper>
                : 
                    <EditWrapper
                        purchased={item.purchased}
                        onClick={() => setShowPurchasedModal(true)}
                    >
                        <EditIcon src={checkmark} />
                        <EditText>MARK AS PURCHASED</EditText>
                    </EditWrapper>
                }
            </Row>
        </>
    )
}

export default ListItem