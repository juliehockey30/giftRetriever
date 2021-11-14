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


const CloseIcon = styled.button`
    background-color: #26323f;
    border: unset;
    color: white;
    font-size: 2rem;
    margin-top: 0.5rem;
    position: absolute;
    right: 1rem;
`;

const FormWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    margin: auto;
`;

const HamburgerIcon = styled.img`
    height: 2rem;
    left: 1rem;
    position: absolute;
    top: 1rem;
    width: 2rem;

    @media(min-width: 769px) {
        display: none;
    }
`;

const Logo = styled.img`
    margin: 3rem 2.5rem 1rem 2.5rem;
    width: 6rem;
`;

const MenuBackground = styled.div`
    background-color: #26323f;
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: fixed;
    width: 14rem;
    z-index: 10;

    @import url('https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap');
    font-family: 'Zen Antique', serif;

    @media(min-width: 769px) {
        display: none;
    }
`;

const Modal = styled.div`
    background-color: #fefefe;
    border: 1px solid #26323f;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    display: flex;
    flex-direction: column;
    margin: 1.25rem;
    overflow: auto;
    padding: 20px;
    width: 80%;
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
    margin: 0.5rem 0 0.5rem 1rem;
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
    margin: 0 1rem;
    padding: 0.5rem;
    position: fixed;
    width: 12rem;

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
    width: 300px;

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
    margin: 0 1rem;
    padding: 0.5rem;
    position: fixed;
    width: 12rem;

    @import url('https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap');
    font-family: 'Zen Antique', serif;

    &:hover {
        font-size: 1.1rem;
    }
`;

export {
    ApiButton,
    CancelButton,
    CloseIcon,
    FormWrapper,
    HamburgerIcon,
    Logo,
    MenuBackground,
    Modal,
    ModalHeader,
    NavItem,
    NavItemText,
    StyledInput,
    StyledLabel,
    Overlay,
    SignOutButton,
    UpdateProfileButton
}