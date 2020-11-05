import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const NameSelect = styled.select`
    font-size: 1rem;
    margin: 2rem auto;
    padding: 0.5rem;
    width: max-content;

    @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap');
    font-family: 'Balsamiq Sans', cursive;
`;

const NameHeader = styled.p`
    color: #E12023;
    font-size: 3rem;
    margin: auto;

    @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap');
    font-family: 'Balsamiq Sans', cursive;

    @media(max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const PurchasedHeader = styled.p`
    color: #E12023;
    font-size: 2rem;
    margin: 4rem auto 1rem;
    text-align: center;

    @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap');
    font-family: 'Balsamiq Sans', cursive;

    @media(max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const Overlay = styled.div`
  background-color: #fff;
  height: 100%;
  opacity: 0.2;
  width: 100%;
  z-index: 4;
`;

const NoItemsText = styled.p`
    font-size: 1rem;
    font-style: italic;
    margin: 0 auto 4rem auto;

    @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap');
    font-family: 'Balsamiq Sans', cursive;
`;

export {
    Wrapper,
    NameSelect,
    NameHeader,
    Overlay,
    PurchasedHeader,
    NoItemsText,
};