import React, { useState, useEffect } from "react";

export default function ModifyNew(props) {
  let [modiNm, setmodiNm] = useState(""); //전화번호부에 새롭게 등록할 이름
  let [modiPn, setmodiPn] = useState(""); //전화번호부에 새롭게 등록할 전화번호

  useEffect(
    () => {
      setmodiNm(props.conNm.name);
      setmodiPn(props.conNm.number);
    },
    [props]
  );

  function chgmodiNm(e) {
    setmodiNm(e.target.value);
  }

  function chgmodiPn(e) {
    setmodiPn(e.target.value);
  }

  function putModify() {
    props.dispatch({
      type: "modify",
      name: modiNm,
      number: modiPn,
      id: props.conNm.id,
    });
    props.setMB(false);
  }

  return (
    <div>
      <h1>Modify User</h1>
      &nbsp;
      <input placeholder="name" onChange={chgmodiNm} value={modiNm}></input>
      <input placeholder="phone" onChange={chgmodiPn} value={modiPn}></input>
      <br />
      &nbsp;<button onClick={() => props.setMB(false)}>cancle</button>
      <button
        onClick={() => {
          modiNm && modiPn
            ? putModify()
            : alert("이름과 전화번호를 입력한 후 버튼을 누르세요.");
          props.setNm({ name: "Not Selected", number: null });
        }}
      >
        Modify User
      </button>
    </div>
  );
}
