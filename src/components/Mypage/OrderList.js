import styled from 'styled-components';
import { Container } from '../Common/Style';
import { StyledTable, THead, TBody, TR, TH } from '../Common/Table';
import OrderItem from './OrderItem';

const OrderList = ({ content }) => {
  return (
    <Wrapper>
      <Container>
        <StyledTable>
          <THead>
            <TR>
              <TH>ID</TH>
              <TH>아이템</TH>
            </TR>
          </THead>
          <TBody>
            {content.map((item) => (
              <OrderItem key={item.id} item={item} />
            ))}
          </TBody>
        </StyledTable>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default OrderList;
