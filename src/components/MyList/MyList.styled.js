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

const FormWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    margin: auto;

    @media(max-width: 768px) {
        flex-direction: column;
    }
`;

const HeaderText = styled.p`
    color: #3d3937;
    font-size: 4rem;
    margin-top: 4rem;

    @media(max-width: 768px) {
        font-size: 2.5rem;
    }
`;

const ImagePreview = styled.img`
    height: 15rem;
    margin-bottom: 1rem;
    object-fit: cover;
    opacity: ${props => props.loading ? '0.5' : '1'};
    width: 15rem;
`;

const ImageWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto 0 4rem;

    @media(max-width: 768px) {
        margin: 0;
    }
`;

const ItemToBeMovedName = styled.p`
    color: #c71518;
    font-size: 3rem;
    margin: 1rem 0s;
    text-align: center;

    @media(max-width: 768px) {
        font-size: 2.5rem;
    }
`;

const ItemToBeMovedTitle = styled.p`
    color: #3d3937;
    font-size: 2rem;
    margin: 0 auto;
    text-align: center;

    @media(max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const ListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
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
    margin: 1rem auto 3rem auto;
    text-align: center;

    @media(max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const NoItemsText = styled.p`
    color: #7f7e7b;
    font-size: 1rem;
    font-style: italic;

    @media(max-width: 768px) {
        font-size: 0.75rem;
    }
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

const PreviousListDescription = styled.p`
    color: #3d3937;
    font-size: 1rem;
    margin: 0 5rem 2rem 5rem;
    text-align: center;

    @import url('https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap');
    font-family: 'Zen Antique', serif;

    @media(max-width: 768px) {
        margin: 0 2rem 2rem 2rem;
    }
`;


const PreviousListTitle = styled.p`
    color: #3d3937;
    font-size: 2rem;
    margin: 6rem 5rem 0 5rem;
    text-align: center;

    @import url('https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap');
    font-family: 'Zen Antique', serif;

    @media(max-width: 768px) {
        margin: 6rem 1rem 0 1rem;
    }
`;

const StyledButton = styled.button`
    background-color: ${props => props.selected ? "#26323f" : "white"};
    border: 2px solid #26323f;
    color:  ${props => props.selected ? "#dddddd" : "#26323f"};
    cursor: pointer;
    font-size: 1rem;
    margin: 0 0.5rem 3rem 0.5rem;
    padding: 1rem;

    @import url('https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap');
    font-family: 'Zen Antique', serif;

    &:hover {
        background-color: #26323f;
        color: #dddddd;
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

const UploadImageButton = styled.label`
    background-color: "white";
    border: 2px solid #26323f;
    color:  "#26323f";
    cursor: pointer;
    font-size: 1rem;
    height: fit-content;
    margin-left: 3rem;
    padding: 1rem;
    width: fit-content;

    @import url('https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap');
    font-family: 'Zen Antique', serif;

    &:hover {
        background-color: #26323f;
        color: #dddddd;
    }
`;

const UploadImageWrapper = styled.div`
    margin: 2rem 0;
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
    FormWrapper,
    HeaderText,
    ImagePreview,
    ImageWrapper,
    ItemToBeMovedName,
    ItemToBeMovedTitle,
    ListWrapper,
    Modal,
    ModalHeader,
    NoItemsText,
    Overlay,
    PreviousListDescription,
    PreviousListTitle,
    StyledButton,
    StyledInput,
    StyledLabel,
    UploadImageButton,
    UploadImageWrapper,
    Wrapper
};
