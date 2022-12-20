import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __addNumber, minusNumber } from "./redux/modules/counterSlice";

const App = () => {
  const [number, setNumber] = useState(0);

  // useSelector를 할당할 변수
  // useSelector : store에  있는 값을 가져오는 HOOK
  const globalNumber = useSelector((state) => state.counterSlice.number);
  const dispatch = useDispatch();

  // 이벤트핸들러를 통해 input과 state를 연결
  const handleInput = (event) => {
    const { value } = event.target;
    // 문자열->숫자 형변환 '+'
    setNumber(+value);
  };
  console.log(number);

  //더하기 버튼 이벤트핸들러
  // action creator를 dispatch해주고 인자로 number를 넣어준다.
  const onClickAddNumberHandler = () => {
    dispatch(__addNumber(number));
  };
  // 빼기 버튼 이벤트핸들러
  const onClickMinusNumberHandler = () => {
    dispatch(minusNumber(number));
  };
  return (
    <div>
      {globalNumber}
      {/* 밸류를 넣을 인풋 */}
      <input type="number" onChange={handleInput} />
      <button onClick={onClickAddNumberHandler}>더하기</button>
      <button onClick={onClickMinusNumberHandler}>빼기</button>
    </div>
  );
};

export default App;
