import React from 'react'

function Alert(props) {
  const capitalize=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  return (
     <div style={{height:'20px'}}>
        <div style={{ textAlign: 'center'}}>{props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} style={{height:'30px', paddingTop:'2px'}}>
            <strong >{capitalize(props.alert.type)}!</strong> {props.alert.msg}
        </div>}</div>
    </div>
    )
}

export default Alert