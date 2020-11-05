import styled from 'styled-components';

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
    width: 60%;
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

    @media(max-width: 768px) {
        font-size: 0.75rem;
    }
`;

const InputLabel = styled.label`
    font-size: 1rem;
    margin: 0.75rem auto 0 auto;
    text-align: center;
    width: 83%;

    @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap');
    font-family: 'Balsamiq Sans', cursive;

    @media(max-width: 768px) {
        font-size: 0.75rem;
    }
`;

const LargeInputField = styled.textarea`
    border-radius: 0.5rem;
    border: 2px solid black;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    margin: 0.5rem auto;
    width: 80%;

    @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap');
    font-family: 'Balsamiq Sans', cursive;

    @media(max-width: 768px) {
        font-size: 0.75rem;
        margin: 0.5rem auto;
    }
`;


const CancelButton = styled.button`
    background-color: white;
    border: 2px xolid black;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1.5rem;
    margin: 2rem;
    padding: 0.5rem 2rem;
    width: 18rem;

    @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap');
    font-family: 'Balsamiq Sans', cursive;

    &:hover {
        background-color: black;
        color: white;
    }

    @media(max-width: 768px) {
        font-size: 1rem;
        margin: 0.5rem 2rem;
        width: 12rem;
    }
`;

const Wrapper = styled.div`
    text-align: center;
`;

const NameHeader = styled.p`
    color: #E12023;
    font-size: 3rem;
    margin: 2rem auto auto auto;

    @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap');
    font-family: 'Balsamiq Sans', cursive;

    @media(max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 768px) {
        flex-direction: column;
        margin-top: 1rem;
    }
`;

const AddItem = styled.button`
    background-color: ${props => props.disabled ? 'grey' : 'white'};
    border: 2px solid #95c798;
    border-radius: 0.5rem;
    color: #95c798;
    cursor: ${props => props.disabled ? 'unset' : 'pointer;'};;
    font-size: 1.5rem;
    margin: 2rem;
    padding: 0.5rem 1rem;
    width: 19rem;

    @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap');
    font-family: 'Balsamiq Sans', cursive;

    &:hover {
        background-color: ${props => props.disabled ? 'grey' : '#95c798;'};
        color: white;
    }

    @media(max-width: 768px) {
        font-size: 1rem;
        margin: 0.5rem 2rem;
        width: 12rem;
    }
`;

const DeleteItem = styled.button`
    background-color: white;
    border: 2px solid #E12023;
    border-radius: 0.5rem;
    color: #E12023;
    cursor: pointer;
    font-size: 1.5rem;
    margin: 2rem;
    padding: 0.5rem 1rem;
    width: 18rem;

    @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap');
    font-family: 'Balsamiq Sans', cursive;

    &:hover {
        background-color: #E12023;
        color: white;
    }

    @media(max-width: 768px) {
        font-size: 1rem;
        margin: 0.5rem 2rem;
        width: 12rem;
    }
`;

const ItemImageWrapper = styled.div`
    border-radius: 0.5rem;
    border: 2px solid black;
    display: flex;
    flex-direction: row;
    font-size: 1rem;
    height: 1.5rem;
    padding: 0.5rem 1rem;
    margin: 0.5rem auto;
    width: 80%;

    @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap');
    font-family: 'Balsamiq Sans', cursive;

    @media(max-width: 768px) {
        font-size: 0.75rem;
        margin: 0.5rem auto 1.5rem auto;
    }
    
`;

const CloseIcon = styled.img`
    cursor: pointer;
    height: 1.5rem;
    margin-left: 1rem;
    width: 1.5rem;

    @media(max-width: 768px) {
        height: 1rem;
        margin-left: 0.5rem;
        width: 1rem;
    }
`;

export {
    Modal,
    ModalContent,
    InputField,
    InputLabel,
    LargeInputField,
    CancelButton,
    Wrapper,
    NameHeader,
    ButtonWrapper,
    AddItem,
    DeleteItem,
    ItemImageWrapper,
    CloseIcon,
};