import React from "react";
import {
  Box,
  ItemDescription,
  ItemImage,
  ItemLink,
  ItemName,
  NoImageItext,
  PurchasedForName,
  PurchasedForText,
  PurchasedInYear,
} from "./ListItem.styled";

const ListItem = ({ item }) => {
  const getItemYear = (date) => {
    if (date === undefined) {
      return "2021";
    } else {
      const dateObj = new Date(date);
      return dateObj.getFullYear();
    }
  };

  return (
    <>
      <Box>
        {item.imageUrl ? (
          <ItemImage src={item.imageUrl} />
        ) : (
          <NoImageItext>No image available</NoImageItext>
        )}
        <ItemName>{item.name}</ItemName>
        {item.description && !item.purchased && (
          <ItemDescription>{item.description}</ItemDescription>
        )}
        {item.link && (
          <ItemLink href={item.link} target="_blank">
            LINK TO ITEM ONLINE
          </ItemLink>
        )}
        <PurchasedForText>Purchased for:</PurchasedForText>
        <PurchasedForName>{item.purchasedFor}</PurchasedForName>
        <PurchasedInYear>{`in ${getItemYear(item.dateAdded)}`}</PurchasedInYear>
      </Box>
    </>
  );
};

export default ListItem;
