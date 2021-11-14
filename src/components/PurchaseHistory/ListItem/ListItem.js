import React from 'react'
import {
    Box,
    ItemDescription,
    ItemImage,
    ItemLink,
    ItemName,
    NoImageItext,
    PurchasedForName,
    PurchasedForText
} from './ListItem.styled'

const ListItem = ({ item }) => {

    return (
        <>
            <Box>
                {item.imageUrl ? <ItemImage src={item.imageUrl} /> : <NoImageItext>No image available</NoImageItext> }
                <ItemName>{item.name}</ItemName>
                { item.description && !item.purchased && <ItemDescription>{item.description}</ItemDescription> }
                { item.link && <ItemLink href={item.link} target="_blank">LINK TO ITEM ONLINE</ItemLink> }
                <PurchasedForText>Purchased for:</PurchasedForText>
                <PurchasedForName>{item.purchasedFor}</PurchasedForName>
            </Box>
        </>
    )
}

export default ListItem