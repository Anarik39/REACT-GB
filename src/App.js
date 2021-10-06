import styled from "styled-components";
import PageChats from "./Pages/PageChats/PageChats";
import PageProfile from "./Pages/PageProfile/PageProfile";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

import { Switch, Route, Link } from "react-router-dom";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
`;

const Header = styled.header`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

function App() {
  return (
    <>
      <Header>
        <Wrapper>
          <HeaderWrap>
            <Link to="/chats">МЕССЕНДЖЕР</Link>
            <Link to="/">Профиль</Link>
          </HeaderWrap>
        </Wrapper>
      </Header>
      <main>
        <Wrapper>
          <Switch>
            <Route exact path="/" component={PageProfile}></Route>
            <Route path="/chats" component={PageChats}></Route>
            <Route component={PageNotFound}></Route>
          </Switch>
        </Wrapper>
      </main>
    </>
  );
}

export default App;
