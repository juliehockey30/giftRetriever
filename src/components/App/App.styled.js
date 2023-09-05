import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.authentication ? "center" : "left")};

  @import url("https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap");
  font-family: "Zen Antique", serif;
`;

const LoadingText = styled.p`
  color: #3d3937;
  font-size: 5rem;
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
`;

export { Flex, LoadingText, LoadingWrapper };
