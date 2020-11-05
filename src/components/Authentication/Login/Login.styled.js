import styled from 'styled-components';

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;

    @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap');
    font-family: 'Balsamiq Sans', cursive;
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
    z-index: 5;

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

    @media(max-width: 768px) {
        width: 80%;
    }
`;

const Flex = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap');
    font-family: 'Balsamiq Sans', cursive;

    @media(max-width: 768px) {
        margin-top: 1rem;
    }
`;

const LogoBackground = styled.div`
    background-color: #95c798;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    height: 10rem;
    width: 10rem;
    z-index: 3;
`;

const TextWrapper = styled.div`
    align-items: center;
    background-color: #95c798;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    margin-top: -2rem;
    padding: 3rem;
    text-align: center;

    @media(max-width: 768px) {
        padding: 2rem;
    }
`;

const HeaderName = styled.h1`
    color: #e12023;
    font-size: 3rem;
    letter-spacing: 0.5rem;
    margin: 0 0 2rem 0;
    width: max-content;

    @media(max-width: 768px) {
        font-size: 2.5rem;
        width: min-content;
    }
`;

const InputField = styled.input`
    border-radius: 0.5rem;
    border: none;
    font-size: 1rem;
    height: 1.5rem;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
    width: 15rem;
`;

const ForgotPasswordInputField = styled.input`
    border: 2px solid #E12023;
    border-radius: 0.5rem;
    font-size: 1rem;
    height: 1.5rem;
    padding: 0.5rem 1rem;
    margin: 0.5rem auto;
    width: 25rem;

    @media(max-width: 768px) {
        width: 17rem;
    }
`;

const LoginButton = styled.button`
    background-color: #e12023;
    border: none;
    border-radius: 0.5rem;
    color: white;
    cursor: pointer;
    font-size: 1.5rem;
    margin-top: 2rem;
    padding: 0.5rem 2rem;
    width: 15rem;

    @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap');
    font-family: 'Balsamiq Sans', cursive;
`;

const NoAccountText = styled.p`
    font-size: 1rem;
    margin: 2rem 0 0.5rem 0;
`;

const SwitchViewWrapper = styled.div`
    background-color: white;
    border: 2px solid black;
    border-radius: 0.5rem;
    display: flex;
    padding: 0.5rem 0.75rem;
`;

const SwitchViewText = styled.p`
    cursor: pointer;
    font-size: 1.25rem;
    margin: 0;
`;

const ShowPasswordIcon = styled.img`
    cursor: pointer;
    height: 1.45rem;
    margin: 15px 0 0 -40px;
    position: absolute;
    width: 2rem;
`;

const ButtonWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media(max-width: 768px) {
        flex-direction: column;
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
        width: 17rem;
    }
`;

const SendEmailButton = styled.button`
    background-color: white;
    border: 2px solid #95c798;
    border-radius: 0.5rem;
    color: #95c798;
    cursor: pointer;
    font-size: 1.5rem;
    margin: 2rem;
    padding: 0.5rem 1rem;
    width: 25rem;

    @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap');
    font-family: 'Balsamiq Sans', cursive;

    &:hover {
        background-color: #95c798;
        color: white;
    }

    @media(max-width: 768px) {
        font-size: 1rem;
        margin: 0.5rem 2rem;
        width: 17rem;
    }
`;

const ForgotPasswordText = styled.p`
    cursor: pointer;
    font-size: 1rem;
    margin: 0;
`;

export {
    Wrapper,
    Modal,
    ModalContent,
    Flex,
    LogoBackground,
    TextWrapper,
    HeaderName,
    InputField,
    ForgotPasswordInputField,
    LoginButton,
    NoAccountText,
    SwitchViewWrapper,
    SwitchViewText,
    ShowPasswordIcon,
    ButtonWrapper,
    CancelButton,
    SendEmailButton,
    ForgotPasswordText
};