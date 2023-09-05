import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ApiButton,
  Background,
  CancelButton,
  FormWrapper,
  Logo,
  Modal,
  ModalHeader,
  NavItem,
  NavItemText,
  Overlay,
  SignOutButton,
  StyledInput,
  StyledLabel,
  UpdateProfileButton,
  AddKidsProfileButton,
  ModalDescription,
} from "./SideNavBar.styled";
import logo from "../../assets/retrieverLogo.png";
import firebase from "../../config/fire";
import { useHistory } from "react-router-dom";

const SideNavBar = () => {
  const history = useHistory();

  const [currentUserEmail] = useState(firebase.getCurrentUserEmail());
  const [displayName, setDisplayName] = useState(
    firebase.getCurrentUserDisplayName()
  );
  const [selectedPage, setSelectedPage] = useState(
    window.location.pathname.substring(1)
  );
  const [showModal, setShowModal] = useState(false);
  const [showKidsModal, setShowKidsModal] = useState(false);
  const [usersGroupCodes, setUsersGroupCodes] = useState();

  const [kidsProfileName, setKidsProfileName] = useState("");
  const [kidsUserName, setKidsUserName] = useState("");

  const userName = currentUserEmail
    ? currentUserEmail.substr(0, currentUserEmail.indexOf("@"))
    : "";

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

  function logout() {
    firebase.logout();
    history.push("/authenticate");
  }

  async function updateUserDisplayName() {
    try {
      await firebase.updateDisplayName(displayName);
    } catch (error) {
      alert(error.message);
    }
  }

  async function updateUserDisplayNameInGroups(groupCode) {
    const data = { name: displayName };
    try {
      await firebase.updateDisplayNameInGroup(groupCode, userName, data);
    } catch (error) {
      alert(error.message);
    }
  }

  async function handleUpdateName() {
    await updateUserDisplayName();
    usersGroupCodes.forEach((code) => {
      updateUserDisplayNameInGroups(code);
    });
    setShowModal(false);
  }

  async function addKidsProfile() {
    try {
      await firebase.createKidUser(kidsUserName, userName);
    } catch (error) {
      alert(error.message);
    }
  }

  async function addKidProfileToParentProfile() {
    try {
      await firebase.addKidProfileToParentProfile(
        userName,
        kidsUserName,
        kidsProfileName
      );
    } catch (error) {
      alert(error.message);
    }
  }

  async function addUserToGroup(groupCode, userName, currentUserDisplayName) {
    try {
      await firebase.addUserToGroup(
        groupCode,
        userName,
        currentUserDisplayName
      );
    } catch (error) {
      alert(error.message);
    }
  }

  async function attachGroupToUser(groupCode, userName) {
    try {
      await firebase.attachGroupToUser(groupCode, userName);
    } catch (error) {
      alert(error.message);
    }
  }

  const handleAddKidsProfile = async () => {
    await addKidsProfile();
    await addKidProfileToParentProfile();
    usersGroupCodes.forEach((code) => {
      attachGroupToUser(code, kidsUserName);
      addUserToGroup(code, kidsUserName, kidsProfileName);
    });
    setShowKidsModal(false);
    setKidsProfileName("");
    setKidsUserName("");
  };

  return (
    <>
      {showModal && (
        <Overlay>
          <Modal>
            <ModalHeader>Update display name</ModalHeader>
            <FormWrapper>
              <div>
                <StyledInput
                  hasValue={displayName !== ""}
                  onChange={(e) => setDisplayName(e.target.value)}
                  value={displayName}
                />
                <StyledLabel hasValue={displayName !== ""}>
                  Display name
                </StyledLabel>
              </div>
            </FormWrapper>
            <ApiButton disabled={displayName === ""} onClick={handleUpdateName}>
              CONFIRM UPDATE
            </ApiButton>
            <CancelButton onClick={() => setShowModal(false)}>
              CANCEL
            </CancelButton>
          </Modal>
        </Overlay>
      )}
      {showKidsModal && (
        <Overlay>
          <Modal>
            <ModalHeader>Add a Kid's Profile</ModalHeader>
            <ModalDescription>
              A kid's profile will have it's own unique name and list, but will
              be automatically added to all groups the parent is a part of. A
              kid's profile also does not have the ability to mark any item as
              purchased.
            </ModalDescription>
            <FormWrapper>
              <div>
                <StyledInput
                  hasValue={kidsProfileName !== ""}
                  onChange={(e) => setKidsProfileName(e.target.value)}
                  value={kidsProfileName}
                />
                <StyledLabel hasValue={kidsProfileName !== ""}>
                  Kid's Profile Display Name
                </StyledLabel>
              </div>
              <div>
                <StyledInput
                  hasValue={kidsUserName !== ""}
                  onChange={(e) => setKidsUserName(e.target.value)}
                  value={kidsUserName}
                />
                <StyledLabel hasValue={kidsProfileName !== ""}>
                  Kid's Username
                </StyledLabel>
              </div>
            </FormWrapper>
            <ApiButton
              disabled={kidsProfileName === "" || kidsUserName === ""}
              onClick={handleAddKidsProfile}
            >
              ADD PROFILE
            </ApiButton>
            <CancelButton onClick={() => setShowKidsModal(false)}>
              CANCEL
            </CancelButton>
          </Modal>
        </Overlay>
      )}
      <Background>
        <Link onClick={() => setSelectedPage("/")} to="/">
          <Logo src={logo} />
        </Link>
        <NavItem to="/my-list" onClick={() => setSelectedPage("my-list")}>
          <NavItemText selected={selectedPage === "my-list"}>
            MY WISH LIST
          </NavItemText>
        </NavItem>
        <NavItem
          to="/group-lists"
          onClick={() => setSelectedPage("group-lists")}
        >
          <NavItemText selected={selectedPage === "group-lists"}>
            GROUP WISH LISTS
          </NavItemText>
        </NavItem>
        <NavItem to="/purchased" onClick={() => setSelectedPage("purchased")}>
          <NavItemText selected={selectedPage === "purchased"}>
            PURCHASE HISTORY
          </NavItemText>
        </NavItem>
        <UpdateProfileButton onClick={() => setShowModal(true)}>
          UPDATE PROFILE
        </UpdateProfileButton>
        <AddKidsProfileButton onClick={() => setShowKidsModal(true)}>
          ADD KID'S PROFILE
        </AddKidsProfileButton>
        <SignOutButton onClick={logout}>SIGN OUT</SignOutButton>
      </Background>
    </>
  );
};

export default SideNavBar;
