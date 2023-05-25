import "./App.css";
import React, { useState, useReducer } from "react";
import { default as Contacts } from "./Contacts";
import { default as DetailInfo } from "./DetailInfo";
import { default as CreateNew } from "./CreateNew";
import { default as ModifyNew } from "./ModifyNew";

function reduceList(state, action) {
  switch (action.type) {
    case "input":
      // action의 type이 "input"일 때, 현재 객체에 concat으로 추가
      return {
        phoneList: state.phoneList.concat({
          name: action.name,
          number: action.number,
        }),
      };
    case "delete":
      // action의 type이 "delete"일 때, 현재 state 객체에서 해당 i번째 삭제
      return {
        phoneList: state.phoneList.filter(
          (e) => e !== state.phoneList[action.id]
        ),
      };
    case "modify":
      // action의 type이 "modify"일 때, 현재 state 객체에서 해당 i번째 수정
      return {
        phoneList: state.phoneList.map((e, idx) =>
          idx === action.id ? { name: action.name, number: action.number } : e
        ),
      };
    default:
      // 정의되지 않은 action type이 넘어왔을 때는 에러를 발생시킴
      throw new Error("Unsupported action type:", action.type);
  }
}

function App() {
  let peopleList = {
    phoneList: [
      { name: "A", number: 0 },
      { name: "B", number: 1 },
      { name: "C", number: 2 },
      { name: "D", number: 3 },
      { name: "E", number: 4 },
    ],
  }; //기본 전화번호부 리스트

  let [lists, dispatch] = useReducer(reduceList, peopleList);
  let [conNm, setNm] = useState({ name: "Not Selected", number: null }); //전화번호부에서 아무것도 선택하지 않을 때
  let [modifyBool, setMB] = useState(false);

  return (
    <div>
      <Contacts arr={lists} setNm={setNm} />
      <DetailInfo
        conNm={conNm}
        dispatch={dispatch}
        setMB={setMB}
        setNm={setNm}
      />
      {modifyBool ? (
        <ModifyNew
          conNm={conNm}
          setMB={setMB}
          dispatch={dispatch}
          setNm={setNm}
        />
      ) : (
        <CreateNew dispatch={dispatch} />
      )}
    </div>
  );
}

export default App;
