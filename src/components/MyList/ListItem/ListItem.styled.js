import styled from 'styled-components';

const Row = styled.div`
    align-items: center;
    border: 4px solid #95c798;
    border-radius: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1rem 12rem;
    padding: 1rem;

    @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap');
    font-family: 'Balsamiq Sans', cursive;

    @media(max-width: 768px) {
        font-size: 0.75rem;
        margin: 0.5rem;
    }
`;

const Image = styled.img`
    height: 8rem;
    margin-right: 2rem;
    object-fit: cover;
    width: 8rem;

    @media(max-width: 768px) {
        height: 3rem;
        width: 3rem;
    }
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const Name = styled.p`
    font-size: 2rem;
    font-weight: 700;
    margin: 0;

    @media(max-width: 768px) {
        font-size: 0.75rem;
    }
`;

const Description = styled.p`
    color: grey;
    font-size: 1rem;
    font-style: italic;
    font-weight: 500;

    @media(max-width: 768px) {
        font-size: 0.5rem;
    }
`;

const Link = styled.a`
    color: #E12023;
    cursor: pointer;
`;

const EditWrapper = styled.div`
    align-items: center;
    cursor: ${props => props.purchased ? 'unset' : 'pointer'};
    display: flex;
    flex-direction: column;
    height: 8rem;
    justify-content: center;
    margin-left: 2rem;
    text-align: center;
    width: 8rem;

    @media(max-width: 768px) {
        height: 3rem;
        width: 3rem;
    }
`;

const EditIcon = styled.img`
    height: 3rem;
    width: 3rem;

    @media(max-width: 768px) {
        height: 1.5rem;
        width: 1.5rem;
    }
`;

const EditText = styled.p`
    font-size: 1rem;
    font-weight: 500;

    @media(max-width: 768px) {
        font-size: 0.75rem;
        margin-top: 0.25rem;
    }
`;

export {
    Row,
    Image,
    TextWrapper,
    Name,
    Description,
    Link,
    EditWrapper,
    EditIcon,
    EditText
};