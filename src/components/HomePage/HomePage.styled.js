import styled from 'styled-components';


const ApiButton = styled.button`
    background-color: #c71518;
    border: unset;
    color: white;
    cursor: ${props => props.disabled ? "unset" : "pointer"};
    font-size: 1rem;
    margin: 0.5rem 0;
    opacity: ${props => props.disabled ? "0.5" : "1"};
    padding: 0.5rem 1rem;

    @import url('https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap');
    font-family: 'Zen Antique', serif;
`;

const ButtonWrapper = styled.div`
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 3rem;
    padding: 1rem 2rem;
    width: 480px;

    @media(max-width: 768px) {
        flex-direction: column;
        padding: 1rem;
        width: 300px;
    }
`;

const FormWrapper = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
`;

const GroupsHeader = styled.p`
    color: #3d3937;
    font-size: 2rem;
    margin: 0 5rem;
    text-align: center;

    @import url('https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap');
    font-family: 'Zen Antique', serif;

    @media(max-width: 768px) {
        font-size: 1.5rem;
        margin: 0 1rem;
    }
`;

const GroupName = styled(GroupsHeader)`
    color: #c71518
 `;

 const StyledButton = styled.button`
    background-color: ${props => props.selected ? "#26323f" : "white"};
    border: 2px solid #26323f;
    color:  ${props => props.selected ? "#dddddd" : "#26323f"};;
    cursor: pointer;
    font-size: 1rem;
    margin: 0 0.5rem;
    padding: 1rem;

    @import url('https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap');
    font-family: 'Zen Antique', serif;

    &:hover {
        background-color: #26323f;
        color: #dddddd;
    }

    @media(max-width: 768px) {
        margin: 0.5rem;
    }
`;

 const StyledInput = styled.input`
    border: none;
    border-bottom: 1px solid #7f7e7b;
    color: #3d3937;
    display: block;
    font-size: 1rem;
    padding: 10px 0 8px 0;
    text-transform: ${props => props.upperCase ? "uppercase" : "none"};
    width: 480px;

    &:focus {
        border-bottom: 1px solid #26323f;
        outline: none;
    }

    @import url('https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap');
    font-family: 'Zen Antique', serif;

    @media(max-width: 768px) {
        width: 300px;
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

const WarningText = styled.p`
    color: #c3c3bd;
    font-size: 0.75rem;
    font-style: italic;
    margin: 0;
`;

const WelcomeText = styled.p`
    color: #3d3937;
    font-size: 5rem;
    margin-top: 4rem;

    @import url('https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap');
    font-family: 'Zen Antique', serif;

    @media(max-width: 768px) {
        font-size: 3rem;
        text-align: center;
    }
`;

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin: 0 0 3rem 19rem;
    width: -webkit-fill-available;

    @import url('https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap');
    font-family: 'Zen Antique', serif;

    @media(max-width: 768px) {
        margin: 0 1rem 3rem 1rem;
    }
`;

export {
    ApiButton,
    ButtonWrapper,
    FormWrapper,
    GroupsHeader,
    GroupName,
    StyledButton,
    StyledInput,
    StyledLabel,
    WarningText,
    WelcomeText,
    Wrapper
};