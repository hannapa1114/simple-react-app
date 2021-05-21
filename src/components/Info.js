import styled from 'styled-components';

function Info() {
  return (
    <Container>
      <Copyright>Copyright&copy; 2021.송지명. All rights reserved.</Copyright>
    </Container>
  );
}

const Container = styled.div``;

const Copyright = styled.div`
  margin-top: 3%;

  @media (max-width: 414px) {
    margin-top: 10%;
  }
`;

export default Info;
