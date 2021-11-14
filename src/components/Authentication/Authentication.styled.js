import styled from 'styled-components';

const ApiButton = styled.button`
    background-color: #c71518;
    border: unset;
    color: white;
    cursor: ${props => props.disabled ? "unset" : "pointer"};
    font-size: 1rem;
    margin: 3rem 0 1rem 0;
    opacity: ${props => props.disabled ? "0.5" : "1"};
    padding: 0.5rem 1rem;
    width: -webkit-fill-available;

    @import url('https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap');
    font-family: 'Zen Antique', serif;

    &:hover {
        font-size: ${props => props.disabled ? '1rem' : '1.1rem'};
    }
`;

const CompanyName = styled.h1`
    color: #c3c3bd;
    font-size: 4rem;
    letter-spacing: 0.25rem;
    margin: 0;

    @media(max-width: 768px) {
        font-size: 2rem;
    }
`;

const FormHeader = styled.p`
    font-size: 2.5rem;
    color: #26323f;
    margin: 0 0 2rem 0;

    @media(max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const FormWrapper = styled.div`
    align-items: center;
    background-color: white;
    display: flex;
    flex-direction: column;
    margin: 2rem auto;
    padding: 2rem 4rem;
    text-align: left;

    @media(max-width: 768px) {
        padding: 1rem 2rem;
    }
`;

const Logo = styled.img`
    height: 12rem;
    margin-top: 1rem;
    width: 10rem;

    @media(max-width: 768px) {
        height: 10rem;
        width: 8rem;
    }
`;

const LogoBackground = styled.div`
    background-color: #26323f;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    height: 14rem;
    width: 14rem;
    z-index: 3;

    @media(max-width: 768px) {
        height: 12rem;
        width: 12rem;
    }
`;

const SendEmailText = styled.p`
    color: #3d3937;
    cursor: ${props => props.emailSuccess ? "unset" : "pointer"};
    font-size: 0.75rem;
    margin: 0;
    text-align: left;
    width: -webkit-fill-available;

    &:hover {
        font-size: ${props => props.emailSuccess ? "0.75rem" : "0.8rem"};
    }
`;

const StyledInput = styled.input`
    border: none;
    border-bottom: 1px solid #7f7e7b;
    color: #3d3937;
    display: block;
    font-size: 1rem;
    padding: 10px 0 8px 0;
    width: 350px;

    &:focus {
        border-bottom: 1px solid #26323f;
        outline: none;
    }

    @import url('https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap');
    font-family: 'Zen Antique', serif;

    @media(max-width: 768px) {
        width: 230px;
    }
`;

const StyledLabel = styled.label`
    color: #7f7e7b;
    font-size: ${props => props.hasValue ? "0.75rem" : "1rem"};
    position: relative;
    pointerEvents: none;
    top: ${props => props.hasValue ? "-3.5rem" : "-1.75rem"};
    transition: 0.2s ease all;

    input:focus ~ & {
        font-size: 0.75rem;
        top: -3.5rem;
    }
`;

const SwitchViewLink = styled.p`
    color: #26323f;
    cursor: pointer;
    font-size: 1.25rem;
    margin: 0 0 2rem 0;

    &:hover {
        font-size: 1.35rem;
    }
`;

const SwitchViewText = styled.p`
    color: #3d3937;
    font-size: 1rem;
    margin: 3rem 0 0 0;
`;

const TextWrapper = styled.div`
    align-items: center;
    background-color: #26323f;
    display: flex;
    flex-direction: column;
    margin-top: -2rem;
    padding: 3rem;
    text-align: center;

    @media(max-width: 768px) {
        padding: 2rem 1rem;
    }
`;

const WarningText = styled.p`
    color: #c3c3bd;
    font-size: 0.75rem;
    font-style: italic;
    margin: 0;
`;

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;

    @import url('https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap');
    font-family: 'Zen Antique', serif;
`;

export {
    ApiButton,
    CompanyName,
    FormHeader,
    FormWrapper,
    Logo,
    LogoBackground,
    SendEmailText,
    StyledInput,
    StyledLabel,
    SwitchViewLink,
    SwitchViewText,
    TextWrapper,
    WarningText,
    Wrapper
}