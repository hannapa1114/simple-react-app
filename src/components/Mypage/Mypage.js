import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Pagination from './Pagination';
import OrderList from './OrderList';
import { H1 } from '../Common/Style';

function Mypage() {
  const [content, setContent] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/order?page=${currentPage - 1}`)
      .then((res) => {
        setContent(res.data.content);
        setTotalPage(res.data.totalPages);
      });
  }, [currentPage]);
  return (
    <Container>
      <H1>Mypage</H1>
      <OrderList currentPage={currentPage} content={content} />
      <Pagination
        totalPages={totalPage}
        setCurrentPage={setCurrentPage}
        setContent={setContent}
      />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default Mypage;
