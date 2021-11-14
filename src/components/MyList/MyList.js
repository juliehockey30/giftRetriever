import React, { useEffect, useState } from 'react'
import {
    ApiButton,
    CancelButton,
    FormWrapper,
    HeaderText,
    ImagePreview,
    ImageWrapper,
    ListWrapper,
    Modal,
    ModalHeader,
    NoItemsText,
    Overlay,
    StyledButton,
    StyledInput,
    StyledLabel,
    UploadImageButton,
    UploadImageWrapper,
    Wrapper
} from './MyList.styled'
import firebase from '../../config/fire'
import ListItem from './ListItem/ListItem'
import { useHistory } from 'react-router-dom';
import { addItemToList, deleteItemFromList, updateItemOnList } from './api'

const MyList = ({ setShowNavBar }) => {

    const history = useHistory();
    if(!firebase.getCurrentUserEmail()) {
        history.push('/authenticate')
    }

    const [currentUserEmail] = useState(firebase.getCurrentUserEmail())
    const userName = currentUserEmail ? currentUserEmail.substr(0, currentUserEmail.indexOf('@')) : ''


    const [showModal, setShowModal] = useState(false)
    const [itemName, setItemName] = useState('')
    const [itemLink, setItemLink] = useState('')
    const [itemDescription, setItemDescription] = useState('')
    const [chosenImage, setChosenImage] = useState('')
    const [itemImageUrl, setItemImageUrl] = useState('')
    const [myList, setMyList] = useState([])
    const [loading, setLoading] = useState(false)
    const [confirmButtonText, setConfirmButtonText] = useState('ADD TO WISH LIST')
    const [modalHeaderText, setModalHeaderText] = useState('ADD ITEM TO WISH LIST')
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [itemToBeDeleted, setItemToBeDeleted] = useState('')
    const [itemToBeUpdatedKey, setItemToBeUpdatedKey] = useState('')
    const [isUpdating, setIsUpdating] = useState(false)

    useEffect(() => {
        setShowNavBar(true)
    }, [setShowNavBar])

    useEffect(() => {
        const db = firebase.getMyWishListItems(userName)
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
    }, [userName])

    async function chooseFile(e)  {
        const image = e.target.files[0]
        setChosenImage(URL.createObjectURL(e.target.files[0]))
        setLoading(true)
        await firebase.uploadImage(image)
        firebase.getImageUrl(image.name)
        .then((result) => {
            setLoading(false)
            setItemImageUrl(result)
            setChosenImage(result)
        })
    }

    function addItemOnClick() {
        setShowModal(true)
        setIsUpdating(false)
    }


    async function handleAddItemToList() {
        await addItemToList(userName, itemName, itemDescription, itemLink, itemImageUrl )
        setShowModal(false)
        setItemName('')
        setItemDescription('')
        setItemLink('')
        setItemImageUrl('')
        setChosenImage('')
    }

    function handleCancelOnClick() {
        setItemName('')
        setItemDescription('')
        setItemLink('')
        setItemImageUrl('')
        setChosenImage('')
        setShowModal(false)
        setConfirmButtonText('ADD TO WISH LIST')
        setModalHeaderText("ADD ITEM TO WISH LIST")
    }

    async function confirmDeleteOnClick() {
        await deleteItemFromList(userName, itemToBeDeleted.key)
        setShowDeleteModal(false)
    }

    async function handleUpdateItem() {
        const itemToBeUpdated = {
            name: itemName,
            description: itemDescription,
            link: itemLink,
            imageUrl: chosenImage
        }
        await updateItemOnList(userName, itemToBeUpdatedKey, itemToBeUpdated)
        setShowModal(false)
        setItemName('')
        setItemDescription('')
        setItemLink('')
        setItemImageUrl('')
        setChosenImage('')
    }

    return (
        <>
            {showModal &&
                <Overlay>
                    <Modal hasImage={chosenImage !== ''}>
                        <ModalHeader>{modalHeaderText}</ModalHeader>
                        <FormWrapper>
                            <div>
                                <div>
                                    <StyledInput
                                        hasValue={itemName !== ''}
                                        onChange={(e) => setItemName(e.target.value)}
                                        value={itemName}
                                    />
                                    <StyledLabel hasValue={itemName !== ''}>Item name</StyledLabel> 
                                </div>
                                <div>
                                    <StyledInput
                                        hasValue={itemDescription !== ''}
                                        onChange={(e) => setItemDescription(e.target.value)}
                                        value={itemDescription}
                                    />
                                    <StyledLabel hasValue={itemDescription !== ''}>Item description</StyledLabel> 
                                </div>
                                <div>
                                    <StyledInput
                                        hasValue={itemLink !== ''}
                                        onChange={(e) => setItemLink(e.target.value)}
                                        value={itemLink}
                                    />
                                    <StyledLabel hasValue={itemLink !== ''}>Link to item</StyledLabel> 
                                </div>
                                <UploadImageWrapper>
                                    <UploadImageButton htmlFor="files">
                                        {chosenImage ? "CHOOSE A NEW IMAGE" : "UPLOAD IMAGE OF ITEM"}
                                    </UploadImageButton>
                                    <input id="files" hidden type="file" onChange={chooseFile} />
                                </UploadImageWrapper>
                            </div>
                            {chosenImage && 
                                <ImageWrapper>
                                    <ImagePreview loading={loading} src={chosenImage} />
                                </ImageWrapper>
                            }
                        </FormWrapper>
                        <ApiButton
                            disabled={itemName === '' || loading}
                            onClick={isUpdating ? handleUpdateItem : handleAddItemToList}
                        >{confirmButtonText}</ApiButton>
                        <CancelButton onClick={handleCancelOnClick}>CANCEL</CancelButton>
                    </Modal>
                </Overlay>
            }
            {showDeleteModal &&
                <Overlay>
                    <Modal>
                        <ModalHeader>Are you sure you want to delete:</ModalHeader>
                        <ModalHeader>{itemToBeDeleted.name}</ModalHeader>
                        <ApiButton onClick={confirmDeleteOnClick}>CONFIRM DELETE</ApiButton>
                        <CancelButton onClick={() => setShowDeleteModal(false)}>CANCEL</CancelButton>
                    </Modal>
                </Overlay>
            }
            <Wrapper hasItems={myList.length > 0}>
                <HeaderText>MY WISH LIST</HeaderText>
                <StyledButton onClick={addItemOnClick}>ADD ITEM TO WISH LIST</StyledButton>
                {myList.length === 0 ? 
                    <NoItemsText>NO ITEMS HAVE BEEN ADDED TO YOUR WISH LIST YET</NoItemsText> :
                    <ListWrapper>
                        {myList.map(item => (
                            <ListItem 
                                key={item.key}
                                item={item}
                                setItemName={setItemName}
                                setItemLink={setItemLink}
                                setItemDescription={setItemDescription}
                                setChosenImage={setChosenImage}
                                setShowModal={setShowModal}
                                setConfirmButtonText={setConfirmButtonText}
                                setModalHeaderText={setModalHeaderText}
                                setShowDeleteModal={setShowDeleteModal}
                                setItemToBeDeleted={setItemToBeDeleted}
                                setItemToBeUpdatedKey={setItemToBeUpdatedKey}
                                setIsUpdating={setIsUpdating}
                            />
                        ))}
                    </ListWrapper>
                }
            </Wrapper>
        </>
    )
}

export default MyList