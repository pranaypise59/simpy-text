import React from 'react'
import './Alert.css'
function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        // <div className='alert'>
        <div>
        {props.alert && <div className= 'alert' role="alert">
           <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg} 
        </div>}
        </div>
    )
}

export default Alert