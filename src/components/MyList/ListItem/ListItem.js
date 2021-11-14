import React from 'react'
import {
    Box,
    ButtonWrapper,
    DeleteButton,
    EditButton,
    ItemDescription,
    ItemImage,
    ItemLink,
    ItemName,
    NoImageItext
} from './ListItem.styled'

const ListItem = ({
    item,
    setItemName,
    setItemLink,
    setItemDescription,
    setChosenImage,
    setShowModal,
    setConfirmButtonText,
    setModalHeaderText,
    setShowDeleteModal,
    setItemToBeDeleted,
    setItemToBeUpdatedKey,
    setIsUpdating
}) => {

    function handleEditOnClick() {
        setItemName(item.name)
        setItemDescription(item.description)
        setItemLink(item.link)
        setChosenImage(item.imageUrl)
        setShowModal(true)
        setConfirmButtonText('UPDATE ITEM')
        setModalHeaderText('UPDATE ITEM ON WISH LIST')
        setItemToBeUpdatedKey(item.key)
        setIsUpdating(true)
    }

    function handleDeleteItem() {
        setItemToBeDeleted({
            name: item.name,
            key: item.key
        })
        setShowDeleteModal(true)
    }

    return (
        <>
            <Box>
                {item.imageUrl ? <ItemImage src={item.imageUrl} /> : <NoImageItext>No image available</NoImageItext> }
                <ItemName>{item.name}</ItemName>
                { item.description && <ItemDescription>{item.description}</ItemDescription> }
                { item.link && <ItemLink href={item.link} target="_blank">LINK TO ITEM ONLINE</ItemLink> }
                <ButtonWrapper>
                    <EditButton onClick={handleEditOnClick}>EDIT ITEM</EditButton>
                    <DeleteButton onClick={handleDeleteItem}>DELETE ITEM</DeleteButton>
                </ButtonWrapper>
            </Box>
        </>
    )
}

export default ListItem