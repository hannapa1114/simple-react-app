import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, removeToken } from '../ducks/authSlice';
import Burger from './Modal/Burger';
import MenuModal from './Modal/MenuModal';
import { useState } from 'react';

function Nav() {
  const [modalOpen, setModalOpen] = useState(false);
  const { isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      <Logo>
        <StyledLink to="/">
          <Img
            src="https://i.pinimg.com/originals/b1/bf/91/b1bf910ac9b67d31894a1ec02288da0a.png"
            alt="logo"
          />
        </StyledLink>
      </Logo>
      <Menu>
        {isLogin ? (
          <>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/mypage/order">My Page</StyledLink>
            <StyledLink
              to="/"
              onClick={(e) => {
                dispatch(logout());
                dispatch(removeToken());
              }}
            >
              Logout
            </StyledLink>
          </>
        ) : (
          <>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/signup">Sign Up</StyledLink>
            <StyledLink to="/login">Login</StyledLink>
          </>
        )}
      </Menu>
      <Burger openModal={openModal} />
      <MenuModal modalOpen={modalOpen} cloesModal={closeModal} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledLink = styled(Link)`
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  a:focus {
    text-decoration: none;
  }
  a:hover,
  a:active {
    text-decoration: none;
  }
  text-decoration: none;
  padding: 5px;
  font-size: 1.2rem;
  color: black;
`;

const Logo = styled.div`
  float: left;
  margin: 15px 0 0 15px;
`;

const Menu = styled.div`
  float: right;
  margin: 2.3rem 2rem 0 0;

  @media (max-width: 414px) {
    display: none;
  }
`;

const Img = styled.img`
  height: 60px;
  width: 80px;
`;

export default Nav;
