import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Mypage from './components/Mypage/Mypage';
import Info from './components/Info';
import OrderItemView from './components/Mypage/OrderItemView';

function App() {
  return (
    <Container className="App">
      <Header>
        <Nav />
      </Header>
      <Main>
        <Switch>
          <Route path="/mypage/order/:id" component={OrderItemView} />
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/mypage/order" component={Mypage} />
        </Switch>
      </Main>
      <Footer>
        <Info />
      </Footer>
    </Container>
  );
}

const Container = styled.div``;

const Header = styled.div`
  height: 10vh;
  border-bottom: 1px solid black;
`;
const Main = styled.div`
  height: 70vh;
  border-bottom: 1px solid black;
`;
const Footer = styled.div``;

export default App;
