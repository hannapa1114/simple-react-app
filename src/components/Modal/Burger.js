import styled from 'styled-components';

const Burger = ({ openModal }) => {
  return (
    <StyledBurger className="burger" onClick={() => openModal()}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

const StyledBurger = styled.div`
  position: absolute;
  top: 3%;
  right: 6%;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    background-color: grey;
  }

  @media (max-width: 414px) {
    display: flex;
  }
`;

export default Burger;
