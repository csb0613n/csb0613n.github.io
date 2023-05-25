import React, { useState, useEffect } from "react";

export default function Contacts(props) {
  let [arr, setArr] = useState(props.arr.phoneList); //for문으로 꺼낼 전화번호부 데이터
  let [searchStr, setSch] = useState(""); //검색단어

  function chgSch(e) {
    setSch(e.target.value);
  } //검색단어 input이 변경될때마다 실행

  useEffect(
    (_) => {
      setArr(
        props.arr.phoneList.filter((e) => e.name.indexOf(searchStr) !== -1)
      );
    },
    [searchStr, props]
  ); //검색단어가 바뀌면 전화번호부 데이터를 걸러내 보인다.

  return (
    <>
      <h1>Contacts</h1>
      &nbsp;
      <input
        value={searchStr}
        onChange={chgSch}
        placeholder="search name"
      ></input>
      {arr.map((e, i) => {
        return (
          <div
            key={i}
            onClick={() => {
              e["id"] = i;
              console.log(e);
              props.setNm(e);
            }}
          >
            &nbsp;{e.name}&nbsp;&nbsp;&nbsp;{e.number}
          </div>
        );
      })}
    </>
  );
}
