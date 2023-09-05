import React from "react";
import {
  AddToCurrentListButton,
  Box,
  ButtonWrapper,
  DeleteButton,
  EditButton,
  ItemDescription,
  ItemImage,
  ItemLink,
  ItemName,
  NoImageText,
} from "./ListItem.styled";

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
  setShowMoveItemModal,
  setItemToBeDeleted,
  setItemToBeMoved,
  setItemToBeUpdatedKey,
  setIsUpdating,
}) => {
  function handleEditOnClick() {
    setItemName(item.name);
    setItemDescription(item.description);
    setItemLink(item.link);
    setChosenImage(item.imageUrl);
    setShowModal(true);
    setConfirmButtonText("UPDATE ITEM");
    setModalHeaderText("UPDATE ITEM ON WISH LIST");
    setItemToBeUpdatedKey(item.key);
    setIsUpdating(true);
  }

  function handleDeleteItem() {
    setItemToBeDeleted({
      name: item.name,
      key: item.key,
    });
    setShowDeleteModal(true);
  }

  function handleMoveItem() {
    setItemName(item.name);
    setItemDescription(item.description);
    setItemLink(item.link);
    setChosenImage(item.imageUrl);
    setItemToBeMoved({
      name: item.name,
      key: item.key,
    });
    setShowMoveItemModal(true);
  }

  const addedThisYear = (date) => {
    const dateObj = new Date(date);
    const formattedDate = dateObj.getFullYear();
    const thisYear = new Date().getFullYear();

    return formattedDate === thisYear;
  };

  return (
    <>
      <Box>
        {!addedThisYear(item.dateAdded) ? (
          <AddToCurrentListButton onClick={handleMoveItem}>
            ADD TO CURRENT LIST
          </AddToCurrentListButton>
        ) : null}
        {item.imageUrl ? (
          <ItemImage src={item.imageUrl} />
        ) : (
          <NoImageText>No image available</NoImageText>
        )}
        <ItemName>{item.name}</ItemName>
        {item.description && (
          <ItemDescription>{item.description}</ItemDescription>
        )}
        {item.link && (
          <ItemLink href={item.link} target="_blank">
            LINK TO ITEM ONLINE
          </ItemLink>
        )}
        <ButtonWrapper>
          <EditButton onClick={handleEditOnClick}>EDIT ITEM</EditButton>
          <DeleteButton onClick={handleDeleteItem}>DELETE ITEM</DeleteButton>
        </ButtonWrapper>
      </Box>
    </>
  );
};

export default ListItem;
