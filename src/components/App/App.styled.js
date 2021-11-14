import styled from 'styled-components';

const Flex = styled.div`
    background-color: #f5f5f4;
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.authentication ? "center" : "left"};

    @import url('https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap');
    font-family: 'Zen Antique', serif;
`;

export {
    Flex
};