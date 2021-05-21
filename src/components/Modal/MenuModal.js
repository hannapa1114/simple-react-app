import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, removeToken } from '../../ducks/authSlice';

const MenuModal = ({ modalOpen, cloesModal }) => {
  const { isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <>
      {modalOpen ? (
        <Wrapper className="menu-modal" onClick={() => cloesModal()}>
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
        </Wrapper>
      ) : null}
    </>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: white;
  animation: modal-show 0.3s;

  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
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

const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MenuModal;
