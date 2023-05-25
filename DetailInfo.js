
export default function DetailInfo(props){
  let conNm = props.conNm;//전화번호부에서 이름을 누르면 보이는 상세리스트

    return(
      <>
        <h1>Detail Information</h1>
        <div>&nbsp;{conNm.name}</div><br/>
        <div>&nbsp;{conNm.number}</div><br/>
        <button onClick={() => {
          if(conNm.name.length !== 0){
            props.dispatch({type: 'delete', id: conNm.id });
            props.setNm({'name': 'Not Selected', 'number': null})
          }else{
            alert('삭제할 것을 선택하세요.'); 
          }
        }}>delete</button>
        <button onClick={() => {if(conNm.id != null){props.setMB(true);}else{alert("수정할 것을 선택하세요.");}}}>modify</button>
      </>
    )
}