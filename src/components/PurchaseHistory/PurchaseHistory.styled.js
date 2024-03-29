import styled from "styled-components";

const HeaderText = styled.p`
  color: #3d3937;
  font-size: 4rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    text-align: center;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const NoItemsText = styled.p`
  color: #7f7e7b;
  font-size: 1rem;
  font-style: italic;
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 0 3rem 19rem;
  width: -webkit-fill-available;

  @import url("https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap");
  font-family: "Zen Antique", serif;

  @media (max-width: 768px) {
    margin: 0 1rem 3rem 1rem;
  }
`;

const PreviousListBorder = styled.div`
  border-top: 1px solid #26323f;
  margin: 6rem 5rem 0 5rem;
  height: 2px;
  width: 90%;
`;

export { HeaderText, ListWrapper, NoItemsText, Wrapper, PreviousListBorder };
