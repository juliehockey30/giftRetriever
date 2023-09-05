import styled from "styled-components";

const Box = styled.div`
  align-items: center;
  background-color: #fefefe;
  border: 1px solid #26323f;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
  position: relative;
  text-align: center;
  top: 0;
  left: 0;
  width: 16rem;

  @import url("https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap");
  font-family: "Zen Antique", serif;
`;

const ItemDescription = styled.p`
  color: #7f7e7b;
  font-size: 1rem;
  margin: 0 0 2rem 0;
`;

const ItemImage = styled.img`
  height: 15rem;
  object-fit: cover;
  width: 15rem;
`;

const ItemLink = styled.a`
  color: #26323f;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  margin: 1rem 0;
`;

const ItemName = styled.p`
  color: #3d3937;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 2rem 0 0 0;
  text-transform: uppercase;
`;

const NoImageItext = styled.p`
  color: #c3c3bd;
  font-size: 0.75rem;
  height: 8rem;
  margin: 7rem 0 0 0;
  width: 15rem;
`;

const PurchasedForName = styled.p`
  color: #c71518;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
`;

const PurchasedInYear = styled.p`
  color: #c71518;
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
`;

const PurchasedForText = styled.p`
    font-size: 1rem;
    margin 0;
`;

export {
  Box,
  ItemDescription,
  ItemImage,
  ItemLink,
  ItemName,
  NoImageItext,
  PurchasedForName,
  PurchasedForText,
  PurchasedInYear,
};
