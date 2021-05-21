import styled from 'styled-components';
import InputWithLabel from '../Common/InputWithLabel';
import axios from 'axios';
import {
  checkEmail,
  checkPassword,
  checkPasswordSame,
  checkMobile,
} from './Validation';
import { useDispatch } from 'react-redux';
import { setToken } from '../../ducks/authSlice';
import { Container, H1 } from '../Common/Style';

function Signup({ history }) {
  const dispatch = useDispatch();
  return (
    <Container>
      <H1>Sign Up</H1>
      <InputWithLabel
        label="이메일"
        name="email"
        placeholder="이메일"
        type="email"
        id="email"
        onBlur={() => {
          const email = document.querySelector('#email');
          if (checkEmail(email) === false) {
            email.style.border = '1px solid red';
          } else {
            email.style.border = '1px solid grey';
          }
        }}
      />
      <InputWithLabel
        label="비밀번호"
        name="password"
        placeholder="8~15자로 설정해 주세요"
        type="password"
        id="password"
        onBlur={() => {
          const password = document.querySelector('#password');
          if (checkPassword(password) === false) {
            password.style.border = '1px solid red';
          } else {
            password.style.border = '1px solid grey';
          }
        }}
      />
      <InputWithLabel
        label="비밀번호 확인"
        name="password-check"
        placeholder="비밀번호 확인"
        type="password"
        id="password-check"
        onBlur={() => {
          const password = document.querySelector('#password');
          const passwordCheck = document.querySelector('#password-check');
          if (checkPasswordSame(password, passwordCheck) === false) {
            passwordCheck.style.border = '1px solid red';
          } else {
            passwordCheck.style.border = '1px solid grey';
          }
        }}
      />
      <InputWithLabel
        label="연락처"
        name="mobile"
        placeholder="'-'를 빼고 입력해주세요"
        type="text"
        id="mobile"
        onBlur={() => {
          const mobile = document.querySelector('#mobile');
          if (checkMobile(mobile) === false) {
            mobile.style.border = '1px solid red';
          } else {
            mobile.style.border = '1px solid grey';
          }
        }}
      />
      <Button
        onClick={() => {
          const email = document.querySelector('#email');
          const password = document.querySelector('#password');
          const passwordCheck = document.querySelector('#password-check');
          const mobile = document.querySelector('#mobile');
          if (checkEmail(email) === false) {
            alert('유효한 이메일 형식이 아닙니다');
            email.focus();
          } else if (checkPassword(password) === false) {
            alert('8~15자 내로 입력해주세요');
          } else if (checkPasswordSame(password, passwordCheck) === false) {
            alert('비밀번호 불일치');
          } else {
            axios
              .post('http://localhost:8080/sign-up', {
                email: email.value,
                password: password.value,
                mobile: mobile.value,
              })
              .then((res) => {
                dispatch(setToken(res.token));
                alert('성공적으로 가입되었습니다.');
                history.push('/');
              });
          }
        }}
      >
        회원가입
      </Button>
    </Container>
  );
}

const Button = styled.button`
  width: 90%;
  margin: 2.5rem 0 0 1.3rem;
  line-height: 2.5rem;
`;

export default Signup;
