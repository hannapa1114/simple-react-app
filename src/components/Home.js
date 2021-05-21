import { useSelector } from 'react-redux';
import styled from 'styled-components';

function Home({ history }) {
  const { token } = useSelector((state) => state.auth);
  return (
    <Container>
      <H1>Service</H1>
      <ImgBox></ImgBox>
      <Button
        onClick={(e) => {
          if (token === '') {
            alert('로그인이 필요합니다.');
            history.push('/login');
          } else {
            alert('주문 성공');
          }
        }}
      >
        주문하기
      </Button>
    </Container>
  );
}

const Container = styled.div``;

const H1 = styled.h1``;

const ImgBox = styled.div`
  margin: 0 auto;
  height: 20rem;
  width: 20rem;
  border: 1px solid black;
`;

const Button = styled.button`
  margin: 2rem 0 0 0;
`;

export default Home;
