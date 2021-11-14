import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ApiButton = styled.button`
    background-color: #c71518;
    border: unset;
    color: white;
    cursor: ${props => props.disabled ? "unset" : "pointer"};
    font-size: 1rem;
    margin: 3rem 0 0 0;
    opacity: ${props => props.disabled ? "0.5" : "1"};
    padding: 0.5rem 1rem;

    @import url('https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap');
    font-family: 'Zen Antique', serif;

    &:hover {
        font-size: ${props => props.disabled ? '1rem' : '1.1rem'};
    }
`;

const Background = styled.div`
    background-color: #26323f;
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 1.5rem;
    position: fixed;
    width: 16rem;

    @import url('https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap');
    font-family: 'Zen Antique', serif;

    @media(max-width: 768px) {
        display: none;
    }
`;

const CancelButton = styled.button`
    background-color: #7f7e7b;
    border: unset;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    margin: 1rem 0;
    padding: 0.5rem 1rem;

    @import url('https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap');
    font-family: 'Zen Antique', serif;

    &:hover {
        font-size: ${props => props.disabled ? '1rem' : '1.1rem'};
    }
`;

const FormWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    margin: auto;
`;

const Logo = styled.img`
    margin: 0.5rem 2rem 2rem 3rem;
    width: 8rem;

    @media(max-width: 768px) {
        margin: 0.5rem 1rem;
        width: 4rem;
    }
`;

const Modal = styled.div`
    background-color: #fefefe;
    border: 1px solid #26323f;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    display: flex;
    flex-direction: column;
    margin: auto auto auto 30%;
    overflow: auto;
    padding: 20px;
    width: ${props => props.hasImage ? "60%" : "37%"};
`;

const ModalHeader = styled.p`
    color: #3d3937;
    font-size: 2rem;
    margin: 1rem auto 3rem auto;
    text-align: center;
`;

const NavItem = styled(Link)`
    color: ${props => props.selected ? "white" : "#c3c3bd"};
    font-size: 1rem;
    margin: 0.5rem 0;
    text-decoration: none;
    transition: 0.2s ease all;

    &:hover {
        font-size: 1.1rem;
    }

    @import url('https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap');
    font-family: 'Zen Antique', serif;
`;

const NavItemText = styled.p`
    border-bottom: ${props => props.selected ? "1px solid #e22023" : "unset"};
    margin: 0;
    width: fit-content;
`;

const Overlay = styled.div`
    background-color: rgba(255,255,255,0.9);
    bottom: 0;
    height: 100%;
    left: 0;
    overflow: auto;
    padding-top: 50px;
    position: fixed;
    right: 0;   
    top: 0;
    width: 100%;
    z-index: 1;
`;

const SignOutButton = styled.button`
    background-color: #c71518;
    border: unset;
    bottom: 1rem;
    color:  white;
    cursor: pointer;
    font-size: 1rem;
    margin: 0;
    padding: 0.5rem;
    position: fixed;
    width: inherit;

    @import url('https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap');
    font-family: 'Zen Antique', serif;

    &:hover {
        font-size: 1.1rem;
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

const UpdateProfileButton = styled.button`
    background-color: white;
    border: unset;
    bottom: 4rem;
    color:  #26323f;
    cursor: pointer;
    font-size: 1rem;
    margin: 0;
    padding: 0.5rem;
    position: fixed;
    width: inherit;

    @import url('https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap');
    font-family: 'Zen Antique', serif;

    &:hover {
        font-size: 1.1rem;
    }
`;

export {
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
    UpdateProfileButton
};