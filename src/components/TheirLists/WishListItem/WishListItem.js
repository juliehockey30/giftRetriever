import React from 'react'
import {
    Box,
    ButtonWrapper,
    EditButton,
    ItemDescription,
    ItemImage,
    ItemLink,
    ItemName,
    NoImageItext,
} from './WishListItem.styled'

const ListItem = ({ item, setItemToBePurchased, setShowConfirmPurchasedModal }) => {

    function markItemAsPurchasedOnClick() {
        setItemToBePurchased(item)
        setShowConfirmPurchasedModal(true)
    }

    return (
        <>
            <Box purchased={item.purchased}>
                {item.imageUrl ? <ItemImage src={item.imageUrl} /> : <NoImageItext>No image available</NoImageItext> }
                <ItemName>{item.name}</ItemName>
                { item.description && !item.purchased && <ItemDescription>{item.description}</ItemDescription> }
                { item.link && <ItemLink href={item.link} target="_blank">LINK TO ITEM ONLINE</ItemLink> }
                { !item.purchased &&
                    <ButtonWrapper>
                        <EditButton onClick={markItemAsPurchasedOnClick}>MARK AS PURCHASED</EditButton>
                    </ButtonWrapper>
                }
            </Box>
        </>
    )
}

export default ListItem