import styled from 'styled-components';

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

const Background = styled.div`
    background-color: #95c798;
    border-radius: 1rem;
    margin-top: -2rem;
    text-align: center;

    @media(max-width: 768px) {
        padding: 1rem;
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

const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    
    @media(max-width: 768px) {
        flex-direction: column;
    }
`;

const InputColumn = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: -2rem;
    padding: 1rem;
    text-align: center;
`;

const HeaderName = styled.h1`
    color: #e12023;
    font-size: 3rem;
    letter-spacing: 0.5rem;
    margin: 2rem auto;
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

    @media(max-width: 768px) {
        margin-top: 0;
    }
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
    margin: 0 auto 3rem auto;
    padding: 0.5rem 0.75rem;
    width: max-content;

    @media(max-width: 768px) {
        margin: 0 auto 1rem auto;
    }
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

const HelperText = styled.p`
    font-size: 0.75rem;
    font-style: italic;
    margin: 0;
    width: 17rem;

    @media(max-width: 768px) {
        margin-bottom: ${props => props.includeMargin ? '1rem' : '0'};
    }
`;

export {
    Flex,
    Background,
    LogoBackground,
    InputWrapper,
    InputColumn,
    HeaderName,
    InputField,
    LoginButton,
    NoAccountText,
    SwitchViewWrapper,
    SwitchViewText,
    ShowPasswordIcon,
    HelperText
};