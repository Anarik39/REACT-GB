import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { profileAction } from "../../actions/profileActions";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;
const PageProfile = () => {
  const dispatch = useDispatch();
  const profileChecked = useSelector((state) => state.profileReducer.profileChecked);

  const handlerUserCheck = () => {
    dispatch(profileAction(!profileChecked));
  };

  return (
    <Wrapper>
      <label>
        <Input
          type="checkbox"
          checked={profileChecked}
          value={profileChecked}
          onChange={handlerUserCheck}
        />
        <span>Профиль</span>
      </label>
    </Wrapper>
  );
};
export default PageProfile;
