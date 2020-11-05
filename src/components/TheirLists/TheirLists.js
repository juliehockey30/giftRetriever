import React, { useEffect, useState } from 'react'
import {
    Wrapper,
    NameSelect,
    NameHeader,
    Overlay,
    PurchasedHeader,
    NoItemsText,
} from './TheirLists.styled'
import firebase from '../../config/fire'
import ListItem from '../MyList/ListItem/ListItem'

const TheirLists = ({ currentUser }) => {

    const [entireGroup, setEntireGroup] = useState([])
    const [selectedName, setSelectedName] = useState('')
    const [selectedEmail, setSelectedEmail] = useState('')
    const [selectedWishList, setSelectedWishList] = useState([])
    const [selectedWishListPurchased, setSelectedWishListPurchased] = useState([])

    useEffect(() => {
        if(currentUser) {
            const userName = currentUser.email && currentUser.email.substr(0, currentUser.email.indexOf('@'));
            const groupCode = currentUser.groupCode
            const db = firebase.getEntireGroup(groupCode)
            db.on('value', function(snapshot) {
                let itemsArr = []
                snapshot.forEach(function(item) {
                    if(item.val().email !== userName) {
                        itemsArr.push(item.val());
                    }
                });
                setEntireGroup(itemsArr)
            });
        }
    }, [currentUser])

    const selectList = (e) => {
        let selectedIndex = e.target.options.selectedIndex;
        let selectedEmailTarget = e.target.options[selectedIndex].getAttribute('username');
        setSelectedName(e.target.value)
        setSelectedEmail(selectedEmailTarget)
        
        let allItems = []
        let allItemsFiltered = []

        entireGroup.forEach(person => {
            if(person.wishList && person.name === e.target.value) {
                allItems = Object.entries(person.wishList)
                allItems.forEach(item => {
                    const key = item[0]
                    const name = item[1].name
                    const description = item[1].description
                    const link = item[1].link
                    const purchased = item[1].purchased
                    const imageUrl = item[1].imageUrl
                    const imageName = item[1].imageName

                    const filteredItem = {
                        key: key,
                        name: name,
                        description: description,
                        link: link,
                        purchased: purchased,
                        imageUrl: imageUrl,
                        imageName: imageName
                    }
                    allItemsFiltered.push(filteredItem)
                })
            }

            let purchasedItems = []
            let notPurchasedItems = []

            allItemsFiltered.forEach(item => {
                if(item.purchased === false) {
                    notPurchasedItems.push(item)
                } else {
                    purchasedItems.push(item)
                }
            })
            setSelectedWishList(notPurchasedItems)
            setSelectedWishListPurchased(purchasedItems)
        })
    }
 
    return (
        <Wrapper>
            <NameSelect onChange={e => selectList(e)}>
                <option
                    key={"empty"}
                    value={"empty"}
                    hidden
                >
                SELECT PERSON TO VIEW THEIR LIST
                </option>
                {entireGroup.map(person => (
                    <option
                        key={person.email}
                        value={person.name}
                        username={person.email}
                    >
                    {person.name.toUpperCase()}
                    </option>
                ))}
            </NameSelect>
            {selectedName ?
                <>
                    <NameHeader>{`${selectedName.toUpperCase()}'S WISH LIST`}</NameHeader>
                    {selectedWishList.length === 0 &&
                        <NoItemsText>{`${selectedName.toUpperCase()} DOESN'T HAVE ANY UN-PURCHASED ITEMS ON THEIR LIST.`}</NoItemsText>
                    }
                    {selectedWishList.map(item => (
                        <ListItem
                            enableEdit={false}
                            item={item}
                            selectedEmail={selectedEmail}
                            currentUser={currentUser}
                        />
                    ))}
                    <PurchasedHeader>{`ALREADY PURCHASED ON ${selectedName.toUpperCase()}'S LIST`}</PurchasedHeader>
                    {selectedWishListPurchased.length === 0 &&
                        <NoItemsText>{`NO ITEMS OFF ${selectedName.toUpperCase()}'S LIST HAVE BEEN PURCHASED YET.`}</NoItemsText>
                    }
                    <Overlay>
                        {selectedWishListPurchased.map(item => (
                            <ListItem
                                enableEdit={false}
                                item={item}
                                selectedEmail={selectedEmail}
                                currentUser={currentUser}
                            />
                        ))}
                    </Overlay>
                </>
            : null }
        </Wrapper>
    )
}

export default TheirLists