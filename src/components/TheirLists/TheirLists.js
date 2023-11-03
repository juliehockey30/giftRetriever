import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../../config/fire";
import {
  ApiButton,
  CancelButton,
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  HeaderText,
  ItemName,
  ListItem,
  ListWrapper,
  Modal,
  ModalHeader,
  ModalSubtext,
  NoItemsText,
  Overlay,
  PurchasedListBorder,
  PurchasedListDescription,
  PurchasedTitle,
  SelectsWrapper,
  Wrapper,
} from "./TheirLists.styled";
import WishListItem from "./WishListItem/WishListItem";

const TheirLists = ({ setShowNavBar }) => {
  const history = useHistory();
  if (!firebase.getCurrentUserEmail()) {
    history.push("/authenticate");
  }

  const [currentUserEmail] = useState(firebase.getCurrentUserEmail());
  const [currentUserDisplayName] = useState(
    firebase.getCurrentUserDisplayName()
  );
  const userName = currentUserEmail
    ? currentUserEmail.substr(0, currentUserEmail.indexOf("@"))
    : "";
  const [selectedGroup, setSelectedGroup] = useState("");
  const [openSelectGroupMenu, setOpenSelectGroupMenu] = useState(false);
  const [selectedUser, setSelectedUser] = useState();
  const [openSelectListMenu, setOpenSelectListMenu] = useState(false);
  const [usersGroupCodes, setUsersGroupCodes] = useState();
  const [usersGroups, setUsersGroups] = useState();
  const [allGroups, setAllGroups] = useState();
  const [allUsersInGroup, setAllUsersInGroup] = useState();
  const [selectedList, setSelectedList] = useState();
  const [showConfirmPurchasedModal, setShowConfirmPurchasedModal] =
    useState(false);
  const [itemToBePurchased, setItemToBePurchased] = useState();

  useEffect(() => {
    setShowNavBar(true);
  }, [setShowNavBar]);

  useEffect(() => {
    const db = firebase.getAllGroups();
    db.on("value", function (snapshot) {
      let allGroupsArr = [];
      snapshot.forEach(function (group) {
        const groupObj = {
          code: group.key,
          name: group.val().name,
        };
        allGroupsArr.push(groupObj);
      });
      setAllGroups(allGroupsArr);
    });
  }, []);

  useEffect(() => {
    const db = firebase.getUsersGroups(userName);
    db.on("value", function (snapshot) {
      let usersGroupsArr = [];
      snapshot.forEach(function (group) {
        usersGroupsArr.push(group.val().groupCode);
      });
      setUsersGroupCodes(usersGroupsArr);
    });
  }, [userName]);

  useEffect(() => {
    if (selectedGroup) {
      const db = firebase.getAllUsersInGroup(selectedGroup.code);
      db.on("value", function (snapshot) {
        let usersArr = [];
        snapshot.forEach(function (user) {
          if (user.val().name !== currentUserDisplayName) {
            usersArr.push({
              displayName: user.val().name,
              userName: user.val().userName,
            });
          }
        });
        setAllUsersInGroup(usersArr);
      });
    }
  }, [selectedGroup, currentUserDisplayName]);

  useEffect(() => {
    if (allGroups && usersGroupCodes) {
      const usersGroupsArray = [];
      allGroups.forEach((group) => {
        if (usersGroupCodes.includes(group.code)) {
          usersGroupsArray.push({ name: group.name, code: group.code });
        }
      });
      setUsersGroups(usersGroupsArray);
    }
  }, [allGroups, usersGroupCodes]);

  useEffect(() => {
    if (selectedUser) {
      const db = firebase.getSelectedUsersWishList(selectedUser.userName);
      db.on("value", function (snapshot) {
        let usersListArr = [];
        snapshot.forEach(function (user) {
          const obj = {
            key: user.key,
            ...user.val(),
          };
          usersListArr.push(obj);
        });
        setSelectedList(usersListArr);
      });
    }
  }, [selectedUser]);

  async function markItemAsPurchased(userName, key, data) {
    try {
      await firebase.markItemAsPurchased(userName, key, data);
    } catch (error) {
      alert(error.message);
    }
  }

  async function addItemToPurchasedList(userName, item) {
    try {
      await firebase.addItemToPurchasedList(userName, item);
    } catch (error) {
      alert(error.message);
    }
  }

  async function handleMarkAsPurchased() {
    const data = { purchased: true };
    const preppedItem = {
      purchasedFor: selectedUser.displayName,
      ...itemToBePurchased,
    };
    await markItemAsPurchased(
      selectedUser.userName,
      itemToBePurchased.key,
      data
    );
    await addItemToPurchasedList(userName, preppedItem);
    setShowConfirmPurchasedModal(false);
  }

  function handleOpenSelectGroup() {
    setOpenSelectGroupMenu(true);
    setOpenSelectListMenu(false);
  }

  function selectGroup(value) {
    setSelectedGroup({ name: value.name, code: value.code });
    setSelectedUser(undefined);
    setSelectedList(undefined);
    setOpenSelectGroupMenu(false);
  }

  function selectUsersList(value) {
    setSelectedUser({
      displayName: value.displayName,
      userName: value.userName,
    });
    setOpenSelectListMenu(false);
  }

  const addedThisYear = (date) => {
    const dateObj = new Date(date);
    const formattedDate = dateObj.getFullYear();
    const thisYear = new Date().getFullYear();

    return formattedDate === thisYear;
  };

  return (
    <>
      {showConfirmPurchasedModal && (
        <Overlay>
          <Modal>
            <ModalHeader>Are you sure you want to mark</ModalHeader>
            <ItemName>{itemToBePurchased.name}</ItemName>
            <ModalHeader>as purchased?</ModalHeader>
            <ModalSubtext>This action cannot be undone.</ModalSubtext>
            <ApiButton onClick={handleMarkAsPurchased}>
              CONFIRM PURCHASED
            </ApiButton>
            <CancelButton onClick={() => setShowConfirmPurchasedModal(false)}>
              CANCEL
            </CancelButton>
          </Modal>
        </Overlay>
      )}
      <Wrapper>
        <HeaderText>GROUP WISH LISTS</HeaderText>
        <SelectsWrapper>
          <DropDownContainer>
            <DropDownHeader onClick={handleOpenSelectGroup}>
              {selectedGroup ? `${selectedGroup.name} ▼` : "SELECT GROUP ▼"}
            </DropDownHeader>
            {openSelectGroupMenu && (
              <DropDownList>
                {usersGroups.map((option) => (
                  <ListItem
                    onClick={() => selectGroup(option)}
                    key={Math.random()}
                  >
                    {option.name}
                  </ListItem>
                ))}
              </DropDownList>
            )}
          </DropDownContainer>
          {selectedGroup && (
            <DropDownContainer>
              <DropDownHeader onClick={() => setOpenSelectListMenu(true)}>
                {selectedUser
                  ? `${selectedUser.displayName} ▼`
                  : "SELECT WISH LIST ▼"}
              </DropDownHeader>
              {openSelectListMenu && (
                <DropDownList>
                  <>
                    {allUsersInGroup.length === 0 ? (
                      <ListItem disabled={true}>
                        No others in group yet
                      </ListItem>
                    ) : (
                      <>
                        {allUsersInGroup.map((option) => (
                          <ListItem
                            onClick={() => selectUsersList(option)}
                            key={Math.random()}
                          >
                            {option.displayName}
                          </ListItem>
                        ))}
                      </>
                    )}
                  </>
                </DropDownList>
              )}
            </DropDownContainer>
          )}
        </SelectsWrapper>
        {selectedList && (
          <>
            {selectedList.length === 0 ? (
              <NoItemsText>{`${selectedUser.displayName} hasn't added any items to their wish list yet.`}</NoItemsText>
            ) : (
              <>
                <ListWrapper>
                  {selectedList
                    .filter(
                      (gift) => addedThisYear(gift.dateAdded) && !gift.purchased
                    )
                    .map((item) => (
                      <WishListItem
                        key={item.key}
                        item={item}
                        setItemToBePurchased={setItemToBePurchased}
                        setShowConfirmPurchasedModal={
                          setShowConfirmPurchasedModal
                        }
                      />
                    ))}
                </ListWrapper>
                <PurchasedListBorder />
                <PurchasedTitle>Already Purchased Gifts</PurchasedTitle>
                <ListWrapper>
                  {selectedList.filter(
                    (gift) => gift.purchased && addedThisYear(gift.dateAdded)
                  ).length === 0 ? (
                    <PurchasedListDescription>
                      No gifts marked as purchased yet
                    </PurchasedListDescription>
                  ) : null}
                  {selectedList
                    .filter(
                      (gift) => gift.purchased && addedThisYear(gift.dateAdded)
                    )
                    .map((item) => (
                      <WishListItem key={item.key} item={item} />
                    ))}
                </ListWrapper>
              </>
            )}
          </>
        )}
      </Wrapper>
    </>
  );
};

export default TheirLists;
