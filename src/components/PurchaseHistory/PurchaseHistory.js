import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../../config/fire";
import ListItem from "./ListItem/ListItem";
import {
  HeaderText,
  ListWrapper,
  NoItemsText,
  Wrapper,
  PreviousListBorder,
} from "./PurchaseHistory.styled";
import {
  PreviousListTitle,
  PreviousListDescription,
} from "../MyList/MyList.styled";

const PurchaseHistory = ({ setShowNavBar }) => {
  const history = useHistory();
  if (!firebase.getCurrentUserEmail()) {
    history.push("/authenticate");
  }

  useEffect(() => {
    setShowNavBar(true);
  }, [setShowNavBar]);

  const [currentUserEmail] = useState(firebase.getCurrentUserEmail());
  const userName = currentUserEmail
    ? currentUserEmail.substr(0, currentUserEmail.indexOf("@"))
    : "";

  const [purchasedList, setPurchasedList] = useState([]);

  useEffect(() => {
    const db = firebase.getMyPurchasedItems(userName);
    db.on("value", function (snapshot) {
      let itemsArr = [];
      snapshot.forEach(function (item) {
        const key = item.key;
        const name = item.val().name;
        const description = item.val().description;
        const link = item.val().link;
        const purchasedFor = item.val().purchasedFor;
        const imageUrl = item.val().imageUrl;
        const imageName = item.val().imageName;
        const dateAdded = item.val().dateAdded;
        item = {
          key,
          name,
          description,
          link,
          purchasedFor,
          imageUrl,
          imageName,
          dateAdded,
        };
        itemsArr.push(item);
      });
      setPurchasedList(itemsArr);
    });
  }, [userName]);

  const purchasedThisYear = (date) => {
    const dateObj = new Date(date);
    const formattedDate = dateObj.getFullYear();
    const thisYear = new Date().getFullYear();

    return formattedDate === thisYear;
  };

  return (
    <>
      <Wrapper>
        <HeaderText>{`PURCHASE HISTORY ${new Date().getFullYear()}`}</HeaderText>
        {purchasedList.filter((gift) => purchasedThisYear(gift.dateAdded))
          .length === 0 ? (
          <NoItemsText>
            YOU HAVE NOT MARKED ANY ITEMS AS PURCHASED YET THIS YEAR
          </NoItemsText>
        ) : (
          <ListWrapper>
            {purchasedList
              .filter((gift) => purchasedThisYear(gift.dateAdded))
              .map((item) => (
                <ListItem key={item.key} item={item} />
              ))}
          </ListWrapper>
        )}
        <PreviousListBorder />
        <PreviousListTitle>Previously Purchased Items</PreviousListTitle>
        <PreviousListDescription>
          Items that you purchased over 1 year ago will appear below, along with
          the year you purchased them.
        </PreviousListDescription>
        {purchasedList.filter((gift) => !purchasedThisYear(gift.date))
          .length === 0 ? (
          <NoItemsText>
            YOU HAVE NOT MARKED ANY ITEMS AS PURCHASED IN PREVIOUS YEARS
          </NoItemsText>
        ) : (
          <ListWrapper>
            {purchasedList
              .filter((gift) => !purchasedThisYear(gift.dateAdded))
              .map((item) => (
                <ListItem key={item.key} item={item} />
              ))}
          </ListWrapper>
        )}
      </Wrapper>
    </>
  );
};

export default PurchaseHistory;
