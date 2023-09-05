import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../../config/fire";
import {
  addItemToCurrentList,
  addItemToList,
  deleteItemFromList,
  updateItemOnList,
} from "./api";
import ListItem from "./ListItem/ListItem";
import {
  ApiButton,
  CancelButton,
  FormWrapper,
  HeaderText,
  ImagePreview,
  ImageWrapper,
  ItemToBeMovedName,
  ItemToBeMovedTitle,
  ListWrapper,
  Modal,
  ModalHeader,
  NoItemsText,
  Overlay,
  PreviousListDescription,
  PreviousListTitle,
  StyledButton,
  StyledInput,
  StyledLabel,
  UploadImageButton,
  UploadImageWrapper,
  Wrapper,
  PreviousListBorder,
  TabBarWrapper,
  TabItem,
  LeftWrapper,
  SelectedListText,
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListItem,
  HeadingWrapper,
} from "./MyList.styled";

const MyList = ({ setShowNavBar }) => {
  const history = useHistory();
  if (!firebase.getCurrentUserEmail()) {
    history.push("/authenticate");
  }

  const [currentUserEmail] = useState(firebase.getCurrentUserEmail());
  const [kidsProfiles, setKidsProfiles] = useState([]);
  const userName = currentUserEmail
    ? currentUserEmail.substr(0, currentUserEmail.indexOf("@"))
    : "";

  const [showModal, setShowModal] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemLink, setItemLink] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [chosenImage, setChosenImage] = useState("");
  const [itemImageUrl, setItemImageUrl] = useState("");
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [confirmButtonText, setConfirmButtonText] =
    useState("ADD TO WISH LIST");
  const [modalHeaderText, setModalHeaderText] = useState(
    "ADD ITEM TO WISH LIST"
  );
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToBeDeleted, setItemToBeDeleted] = useState("");
  const [showMoveItemModal, setShowMoveItemModal] = useState(false);
  const [itemToBeMoved, setItemToBeMoved] = useState("");
  const [itemToBeUpdatedKey, setItemToBeUpdatedKey] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  const [selectedList, setSelectedList] = useState({
    userName: userName,
    displayName: "",
  });

  const [showProfilesDropdown, setShowProfilesDropdowns] = useState(false);

  useEffect(() => {
    setShowNavBar(true);
  }, [setShowNavBar]);

  useEffect(() => {
    const db = firebase.getMyWishListItems(selectedList.userName);
    db.on("value", function (snapshot) {
      let itemsArr = [];
      snapshot.forEach(function (item) {
        const key = item.key;
        const name = item.val().name;
        const description = item.val().description;
        const link = item.val().link;
        const purchased = item.val().purchased;
        const imageUrl = item.val().imageUrl;
        const imageName = item.val().imageName;
        const dateAdded = item.val().dateAdded;
        item = {
          key,
          name,
          description,
          link,
          purchased,
          imageUrl,
          imageName,
          dateAdded,
        };
        itemsArr.push(item);
      });
      setList(itemsArr);
    });
  }, [selectedList.userName, userName]);

  useEffect(() => {
    const db = firebase.getKidsProfilesForParent(userName);
    db.on("value", function (snapshot) {
      let profilesArray = [];
      snapshot.forEach(function (profile) {
        const userName = profile.val().kidsUserName;
        const displayName = profile.val().kidsDisplayName;
        profile = {
          userName,
          displayName,
        };
        profilesArray.push(profile);
      });
      setKidsProfiles(profilesArray);
    });
  }, [userName]);

  async function chooseFile(e) {
    const image = e.target.files[0];
    setChosenImage(URL.createObjectURL(e.target.files[0]));
    setLoading(true);
    await firebase.uploadImage(image);
    firebase.getImageUrl(image.name).then((result) => {
      setLoading(false);
      setItemImageUrl(result);
      setChosenImage(result);
    });
  }

  function addItemOnClick() {
    setShowModal(true);
    setIsUpdating(false);
  }

  async function handleAddItemToList() {
    await addItemToList(
      selectedList.userName,
      itemName,
      itemDescription,
      itemLink,
      itemImageUrl
    );
    setShowModal(false);
    setItemName("");
    setItemDescription("");
    setItemLink("");
    setItemImageUrl("");
    setChosenImage("");
  }

  function handleCancelOnClick() {
    setItemName("");
    setItemDescription("");
    setItemLink("");
    setItemImageUrl("");
    setChosenImage("");
    setShowModal(false);
    setConfirmButtonText("ADD TO WISH LIST");
    setModalHeaderText("ADD ITEM TO WISH LIST");
  }

  async function confirmDeleteOnClick() {
    await deleteItemFromList(selectedList.userName, itemToBeDeleted.key);
    setShowDeleteModal(false);
  }

  async function handleUpdateItem() {
    const itemToBeUpdated = {
      name: itemName,
      description: itemDescription,
      link: itemLink,
      imageUrl: chosenImage,
    };
    await updateItemOnList(
      selectedList.userName,
      itemToBeUpdatedKey,
      itemToBeUpdated
    );
    setShowModal(false);
    setItemName("");
    setItemDescription("");
    setItemLink("");
    setItemImageUrl("");
    setChosenImage("");
  }

  async function confirmMoveOnClick() {
    const movingItem = {
      name: itemName,
      description: itemDescription,
      link: itemLink,
      imageUrl: chosenImage,
    };
    await addItemToCurrentList(userName, itemToBeMoved.key, movingItem);
    setShowMoveItemModal(false);
    setItemName("");
    setItemDescription("");
    setItemLink("");
    setItemImageUrl("");
  }

  const addedThisYear = (date) => {
    const dateObj = new Date(date);
    const formattedDate = dateObj.getFullYear();
    const thisYear = new Date().getFullYear();

    return formattedDate === thisYear;
  };

  const handleSelectList = (targetProfile) => {
    setSelectedList({
      userName: targetProfile.userName,
      displayName: targetProfile.displayName,
    });
    setShowProfilesDropdowns(false);
  };

  return (
    <>
      {showModal && (
        <Overlay>
          <Modal hasImage={chosenImage !== ""}>
            <HeadingWrapper>
              <ModalHeader>{modalHeaderText}</ModalHeader>
              {kidsProfiles.length > 0 && !isUpdating ? (
                <>
                  <SelectedListText>{`You are adding this item to ${
                    selectedList.userName === userName
                      ? "YOUR"
                      : `${selectedList.displayName.toUpperCase()}'S`
                  } wishlist. If you wish to add an item to a different list, select it below.`}</SelectedListText>
                  <DropDownContainer>
                    <DropDownHeader
                      onClick={() => setShowProfilesDropdowns(true)}
                    >
                      {selectedList.userName === userName
                        ? "MYSELF ▼"
                        : `${selectedList.displayName} ▼`}
                    </DropDownHeader>
                    {showProfilesDropdown && (
                      <DropDownList>
                        <DropDownListItem
                          onClick={() =>
                            handleSelectList({
                              userName: userName,
                              displayName: "",
                            })
                          }
                          key={Math.random()}
                        >
                          Myself
                        </DropDownListItem>
                        {kidsProfiles.map((kp) => (
                          <DropDownListItem
                            onClick={() => handleSelectList(kp)}
                            key={Math.random()}
                          >
                            {kp.displayName}
                          </DropDownListItem>
                        ))}
                      </DropDownList>
                    )}
                  </DropDownContainer>
                </>
              ) : null}
            </HeadingWrapper>
            <FormWrapper>
              <LeftWrapper>
                <div>
                  <StyledInput
                    hasValue={itemName !== ""}
                    onChange={(e) => setItemName(e.target.value)}
                    value={itemName}
                  />
                  <StyledLabel hasValue={itemName !== ""}>
                    Item name
                  </StyledLabel>
                </div>
                <div>
                  <StyledInput
                    hasValue={itemDescription !== ""}
                    onChange={(e) => setItemDescription(e.target.value)}
                    value={itemDescription}
                  />
                  <StyledLabel hasValue={itemDescription !== ""}>
                    Item description
                  </StyledLabel>
                </div>
                <div>
                  <StyledInput
                    hasValue={itemLink !== ""}
                    onChange={(e) => setItemLink(e.target.value)}
                    value={itemLink}
                  />
                  <StyledLabel hasValue={itemLink !== ""}>
                    Link to item
                  </StyledLabel>
                </div>
                <UploadImageWrapper>
                  <UploadImageButton htmlFor="files">
                    {chosenImage
                      ? "CHOOSE A NEW IMAGE"
                      : "UPLOAD IMAGE OF ITEM"}
                  </UploadImageButton>
                  <input id="files" hidden type="file" onChange={chooseFile} />
                </UploadImageWrapper>
              </LeftWrapper>
              {chosenImage && (
                <ImageWrapper>
                  <ImagePreview loading={loading} src={chosenImage} />
                </ImageWrapper>
              )}
            </FormWrapper>
            <ApiButton
              disabled={itemName === "" || loading}
              onClick={isUpdating ? handleUpdateItem : handleAddItemToList}
            >
              {confirmButtonText}
            </ApiButton>
            <CancelButton onClick={handleCancelOnClick}>CANCEL</CancelButton>
          </Modal>
        </Overlay>
      )}
      {showDeleteModal && (
        <Overlay>
          <Modal>
            <ModalHeader>Are you sure you want to delete:</ModalHeader>
            <ModalHeader>{itemToBeDeleted.name}</ModalHeader>
            <ApiButton onClick={confirmDeleteOnClick}>CONFIRM DELETE</ApiButton>
            <CancelButton onClick={() => setShowDeleteModal(false)}>
              CANCEL
            </CancelButton>
          </Modal>
        </Overlay>
      )}
      {showMoveItemModal && (
        <Overlay>
          <Modal>
            <ItemToBeMovedTitle>
              Are you sure you want to move:
            </ItemToBeMovedTitle>
            <ItemToBeMovedName>{itemToBeMoved.name}</ItemToBeMovedName>
            <ItemToBeMovedTitle>to your current wish list?</ItemToBeMovedTitle>
            <ApiButton onClick={confirmMoveOnClick}>CONFIRM MOVE</ApiButton>
            <CancelButton onClick={() => setShowMoveItemModal(false)}>
              CANCEL
            </CancelButton>
          </Modal>
        </Overlay>
      )}
      <Wrapper>
        <HeaderText>MY WISH LIST</HeaderText>
        <StyledButton onClick={addItemOnClick}>
          ADD ITEM TO WISH LIST
        </StyledButton>
        {kidsProfiles.length > 0 ? (
          <TabBarWrapper>
            <TabItem
              selected={selectedList.userName === userName}
              onClick={() =>
                setSelectedList({
                  userName: userName,
                  displayName: "",
                })
              }
            >
              My List
            </TabItem>
            {kidsProfiles.map((kp) => (
              <TabItem
                selected={selectedList.userName === kp.userName}
                onClick={() =>
                  setSelectedList({
                    userName: kp.userName,
                    displayName: kp.displayName,
                  })
                }
              >{`${kp.displayName}'s List`}</TabItem>
            ))}
          </TabBarWrapper>
        ) : null}
        {list.filter((gift) => addedThisYear(gift.dateAdded)).length === 0 ? (
          <NoItemsText>
            {`NO ITEMS HAVE BEEN ADDED TO ${
              selectedList.displayName === ""
                ? "YOUR"
                : `${selectedList.displayName.toUpperCase()}'S`
            } WISH LIST YET THIS YEAR`}
          </NoItemsText>
        ) : (
          <ListWrapper>
            {list
              .filter((i) => addedThisYear(i.dateAdded))
              .map((item) => (
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
        )}
        <PreviousListBorder />
        <PreviousListTitle>Previous Wish List Items</PreviousListTitle>
        <PreviousListDescription>
          {`Items that were added to ${
            selectedList.displayName === ""
              ? "your"
              : `${selectedList.displayName}'s`
          } wish list over 1 year ago and have not
          been marked as purchased will appear here.`}
        </PreviousListDescription>
        <ListWrapper>
          {list
            .filter((i) => !addedThisYear(i.dateAdded) && i.purchased === false)
            .map((item) => (
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
                setShowMoveItemModal={setShowMoveItemModal}
                setItemToBeDeleted={setItemToBeDeleted}
                setItemToBeMoved={setItemToBeMoved}
                setItemToBeUpdatedKey={setItemToBeUpdatedKey}
                setIsUpdating={setIsUpdating}
              />
            ))}
        </ListWrapper>
      </Wrapper>
    </>
  );
};

export default MyList;
