import styled from 'styled-components';

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

const DropDownContainer = styled.div`
  margin: 0.5rem;
`;

const DropDownHeader = styled.div`
    background-color: white;
    border: 2px solid #26323f;
    color:  #26323f;
    cursor: pointer;
    font-size: 1rem;
    margin: 0;
    padding: 1rem;
    text-align: center;
    text-transform: uppercase;
    width: 22rem;

    @import url('https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap');
    font-family: 'Zen Antique', serif;

    &:hover {
        background-color: #26323f;
        color: #dddddd;
    }

    @media(max-width: 768px) {
        width: 18rem;
    }
`;

const DropDownList = styled.ul`
    background: #ffffff;
    border: 2px solid #e5e5e5;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    position: absolute;
    width: 24rem;
    z-index: 3;

    &:first-child {
        margin-top: 0.5rem;
    }

    @media(max-width: 768px) {
        width: 20rem;
    }
`;

const HeaderText = styled.p`
    color: #3d3937;
    font-size: 4rem;
    margin-top: 4rem;

    @media(max-width: 768px) {
        font-size: 2.5rem;
        text-align: center;
    }
`;

const ItemName = styled.p`
    color: #c71518;
    font-size: 2rem;
    margin: 0;
    text-align: center;
`;

const ListItem = styled.li`
    color: ${props => props.disabled ? '#7f7e7b' : '#3d3937'};
    cursor: ${props => props.disabled ? 'unset' : 'pointer'};
    font-style: ${props => props.disabled ? 'italic' : 'unset'};
    list-style: none;
    margin-bottom: 0.8em;

    &:hover {
        color: ${props => props.disabled ? '#7f7e7b' : '#c71518'};
    }
`;


const ListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 3rem;

    @media(max-width: 768px) {
        flex-direction: column;
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

    @media(max-width: 768px) {
        margin: 1.25rem;
        width: 80%;
    }
`;

const ModalHeader = styled.p`
    color: #3d3937;
    font-size: 2rem;
    margin: 0;
    text-align: center;
`;

const ModalSubtext = styled.p`
    color: #3d3937;
    font-size: 1.5rem;
    margin: 2rem 0;
    text-align: center;
`;

const NoItemsText = styled.p`
    color: #7f7e7b;
    font-size: 1rem;
    font-style: italic;
    margin-top: 3rem;
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

const PurchasedTitle = styled.p`
    color: #c71518;
    font-size: 2rem;
    margin: 6rem 5rem 0 5rem;
    text-align: center;

    @import url('https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap');
    font-family: 'Zen Antique', serif;

    @media(max-width: 768px) {
        margin: 6rem 1rem 0 1rem;
    }
`;

const SelectsWrapper = styled.div`
    display: flex;
    flex-direction: row;

    @media(max-width: 768px) {
        flex-direction: column;
    }
`;

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: ${props => props.hasItems ? "100%" : "100vh"};
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
    CancelButton,
    DropDownContainer,
    DropDownHeader,
    DropDownList,
    HeaderText,
    ItemName,
    ListItem,
    ListWrapper,
    Modal,
    ModalHeader,
    ModalSubtext,
    NoItemsText,
    Overlay,
    PurchasedTitle,
    SelectsWrapper,
    Wrapper
};
