import { Link } from 'react-router-dom';
import { TR, TD } from '../Common/Table';

const OrderItem = ({ item }) => {
  return (
    <TR>
      <TD>{item.id}</TD>
      <TD>
        <Link to={`/mypage/order/${item.id}`}>{item.itemName}</Link>
      </TD>
    </TR>
  );
};

export default OrderItem;
