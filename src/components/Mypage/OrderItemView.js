import { useEffect } from 'react';
import styled from 'styled-components';
import { Container, H1 } from '../Common/Style';
import { StyledTable, THead, TBody, TR, TH, TD } from '../Common/Table';
import axios from 'axios';
import { useState } from 'react';

const OrderItemView = ({ history, location, match }) => {
  const { id } = match.params;
  const [itemName, setItemName] = useState('');
  useEffect(() => {
    axios.get(`http://localhost:8080/order/${id}`).then((res) => {
      setItemName(res.data.itemName);
    });
  });
  return (
    <Container>
      <H1>Item Detail</H1>
      <StyledTable>
        <THead>
          <TR>
            <TH>ID</TH>
            <TH>아이템</TH>
          </TR>
        </THead>
        <TBody>
          <TD>{id}</TD>
          <TD>{itemName}</TD>
        </TBody>
      </StyledTable>
      <Button onClick={() => history.goBack()}>목록으로 돌아가기</Button>
    </Container>
  );
};

const Button = styled.button`
  margin: 2.5rem 0 0 0;
  line-height: 2.5rem;
`;

export default OrderItemView;
