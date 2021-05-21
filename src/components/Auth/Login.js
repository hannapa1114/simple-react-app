import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import InputWithLabel from '../Common/InputWithLabel';
import { setToken, login } from '../../ducks/authSlice';
import axios from 'axios';
import { Container, H1 } from '../Common/Style';
import { checkEmail } from './Validation';

function Login({ history }) {
  const dispatch = useDispatch();
  return (
    <Container>
      <H1>Login</H1>
      <InputWithLabel
        label="이메일"
        name="email"
        placeholder="이메일"
        type="email"
        id="email-login"
      />
      <InputWithLabel
        label="비밀번호"
        name="password"
        placeholder="비밀번호"
        type="password"
        id="password-login"
      />
      <Button
        onClick={() => {
          const email = document.querySelector('#email-login');
          const password = document.querySelector('#password-login');
          if (checkEmail(email)) {
            axios
              .post('http://localhost:8080/login', {
                email: email.value,
                password: password.value,
              })
              .then((res) => {
                if (res.data.token) {
                  dispatch(setToken(res.data.token));
                  dispatch(login());
                  history.push('/');
                }
              })
              .catch((err) => {
                if (err) {
                  alert('비밀번호를 확인해주세요');
                }
              });
          } else {
            alert('email 형식이 아닙니다');
          }
        }}
      >
        로그인
      </Button>
    </Container>
  );
}

const Button = styled.button`
  width: 90%;
  margin: 2.5rem 0 0 1.3rem;
  line-height: 2.5rem;
`;

export default Login;
