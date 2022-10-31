import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from '../../config/fire';
import ListItem from './ListItem/ListItem';
import {
    HeaderText,
    ListWrapper,
    NoItemsText,
    Wrapper
} from './PurchaseHistory.styled';

const PurchaseHistory = ({ setShowNavBar     }) => {

    const history = useHistory();
    if(!firebase.getCurrentUserEmail()) {
        history.push('/authenticate')
    }

    useEffect(() => {
        setShowNavBar(true)
    }, [setShowNavBar])

    const [currentUserEmail] = useState(firebase.getCurrentUserEmail())
    const userName = currentUserEmail ? currentUserEmail.substr(0, currentUserEmail.indexOf('@')) : ''

    const [purchasedList, setPurchasedList] = useState([])

    useEffect(() => {
        const db = firebase.getMyPurchasedItems(userName)
        db.on('value', function(snapshot) {
            let itemsArr = []
            snapshot.forEach(function(item) {
                const key = item.key
                const name = item.val().name;
                const description = item.val().description;
                const link = item.val().link;
                const purchasedFor = item.val().purchasedFor;
                const imageUrl = item.val().imageUrl;
                const imageName = item.val().imageName;
                item = {
                    key,
                    name,
                    description,
                    link,
                    purchasedFor,
                    imageUrl,
                    imageName
                }
                itemsArr.push(item);
            });
            setPurchasedList(itemsArr)
        });
    }, [userName])
 
    return (
        <>
            <Wrapper hasItems={purchasedList.filter(gift => gift.dateAdded !== undefined).length > 0}>
                <HeaderText>PURCHASE HISTORY</HeaderText>
                {purchasedList.length === 0 ? 
                    <NoItemsText>YOU HAVE NOT MARKED ANY ITEMS AS PURCHASED YET</NoItemsText> :
                    <ListWrapper>
                        {purchasedList.filter(gift => gift.dateAdded !== undefined).map(item => (
                            <ListItem 
                                key={item.key}
                                item={item}
                            />
                        ))}
                    </ListWrapper>
                }
            </Wrapper>
        </>
    )
}

export default PurchaseHistory