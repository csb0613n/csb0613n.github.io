import React, { useState } from 'react';

export default function CreateNew(props){
    let [newNm, setNewNm] = useState('');//전화번호부에 새롭게 등록할 이름
    let [newPn, setNewPn] = useState('');//전화번호부에 새롭게 등록할 전화번호
  
    function chgNewNm(e){
      setNewNm(e.target.value);
    }
  
    function chgNewPn(e){
      setNewPn(e.target.value);
    }
      return(
        <div>
          <h1>Create New User</h1>
          &nbsp;
          <input placeholder='name' onChange={chgNewNm} value={newNm}></input>
          <input placeholder='phone' onChange={chgNewPn} value={newPn}></input><br />
          &nbsp;<button onClick={() => {
            newNm&&newPn ?
            props.dispatch({type: 'input', name: newNm, number: newPn}) : alert('이름과 전화번호를 입력한 후 버튼을 누르세요.'); 
            setNewNm(''); 
            setNewPn('');
          }}>Create New User</button>
        </div>
      )
  }