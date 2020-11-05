import styled from 'styled-components';

const Background = styled.div`
    align-items: center;
    background-color: #95c798;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;

    @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap');
    font-family: 'Balsamiq Sans', cursive;
`;

const Logo = styled.img`
    margin: 0.5rem 2rem;

    @media(max-width: 768px) {
        margin: 0.5rem 1rem;
        width: 4rem;
    }
`;

const Name = styled.h1`
    color: #E12023;
    font-size: 5rem;
    letter-spacing: 0.8rem;
    margin: 0;

    @media(max-width: 768px) {
        font-size: 1rem;
        width: min-content;
    }
`;

const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media(max-width: 768px) {
        display: none;
    }
`;

const ProfileText = styled.p`
    color: #E12023;
    cursor: ${props => props.isLink ? 'pointer' : 'unset'};
    font-size: 1rem;
    margin: 0;
    padding: 0;
    text-decoration: ${props => props.isLink ? 'underline' : 'none'};
`;

const LogoutButton = styled.button`
    background-color: #E12023;
    border: 2px solid white;
    border-radius: 0.5rem;
    color: white;
    cursor: pointer;
    font-size: 1.5rem;
    margin: 0.5rem 2rem;
    padding: 0.5rem;
    width: 9rem;

    @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap');
    font-family: 'Balsamiq Sans', cursive;

    &:hover {
        background-color: white;
        border: 2px solid #E12023;
        color: #E12023;
    }
`;

const ToggleWrapper = styled.div`
    border: 2px solid red;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: row;
    height: 6rem;
    margin: 2rem auto 0;
    width: 48rem;

    @media(max-width: 768px) {
        height: 2rem;
        margin: 1rem auto 0;
        width: 20rem;
    }
`;

const ToggleItem = styled.button`
    background-color: ${props => props.selected ? '#E12023' : 'white'};
    border: unset;
    color: ${props => props.selected ? 'white' : '#E12023'};
    cursor: pointer;
    font-size: 2rem;
    font-weight: 700;
    width: 100%;

    @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap');
    font-family: 'Balsamiq Sans', cursive;

    @media(max-width: 768px) {
        font-size: 0.825rem;
    }
`;

const Modal = styled.div`
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
    height: 100%;
    left: 0;
    overflow: auto;
    padding-top: 100px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;

    @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap');
    font-family: 'Balsamiq Sans', cursive;
`;

const ModalContent = styled.div`
    background-color: #fefefe;
    border-radius: 0.5rem;
    border: 4px solid #E12023;
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 20px;
    width: 30%;

    @media(max-width: 768px) {
        width: 80%;
    }
`;

const InputField = styled.input`
    border-radius: 0.5rem;
    border: 2px solid black;
    font-size: 1rem;
    height: 1.5rem;
    padding: 0.5rem 1rem;
    margin: 0.5rem auto;
    width: 80%;

    @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap');
    font-family: 'Balsamiq Sans', cursive;
`;

const CancelButton = styled.button`
    background-color: white;
    border: 2px solid black;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1.5rem;
    margin: 1rem auto;
    padding: 0.5rem 2rem;
    width: 19rem;

    @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap');
    font-family: 'Balsamiq Sans', cursive;

    &:hover {
        background-color: black;
        color: white;
    }
`;

const UpdateButton = styled.button`
    background-color: white;
    border: 2px solid #E12023;
    border-radius: 0.5rem;
    color: #E12023;
    cursor: pointer;
    font-size: 1.5rem;
    margin: 1rem auto;
    padding: 0.5rem 1rem;
    width: 19rem;

    @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap');
    font-family: 'Balsamiq Sans', cursive;

    &:hover {
        background-color: #E12023;
        color: white;
    }
`;

const ShowPasswordIcon = styled.img`
    cursor: pointer;
    height: 1.45rem;
    margin: 15px 0 0 -40px;
    position: absolute;
    width: 2rem;
`;

const PasswordWrapper = styled.div`
    margin: 0 1rem 0 3rem
`;

const SuccessText = styled.p`
    font-size: 1.5rem;
    margin: 0.5rem auto;
`;

const SuccessSubtext = styled.p`
    font-size: 1rem;
    font-style: italic;
    margin: 0.5rem auto;
    text-align: center;
`;

const HamburgerIcon = styled.img`
    display: none;

    @media(max-width: 768px) {
        display: block;
        margin: 0.5rem 1rem;
    }
`;

const HamburgerMenu = styled.div`
    background-color: #95c798;
    color: #e12023;
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    top: 90px;
`;

const HamburgerItem = styled.p`
    border: 3px solid white;
    margin: 0;
    padding: 1rem;
`;

export {
    Background,
    Name,
    Logo,
    ProfileWrapper,
    ProfileText,
    LogoutButton,
    ToggleWrapper,
    ToggleItem,
    Modal,
    ModalContent,
    InputField,
    CancelButton,
    UpdateButton,
    ShowPasswordIcon,
    PasswordWrapper,
    SuccessText,
    SuccessSubtext,
    HamburgerIcon,
    HamburgerMenu,
    HamburgerItem
};