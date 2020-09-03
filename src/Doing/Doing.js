import React from 'react';
import './Doing.css';

function Doing(props) {
    //let isEditMode = false; Use as a flag for contenteditable?

    return (
        <div className="doing">
            <input  className='doingStatus' id="doingStatus" type="checkbox" checked={props.status} onChange={props.onChangeStatusRow}/>
            <label className="text">{props.value}</label>
            <div className="spacer"></div>
            <button className="deleteRow" onClick={props.onDeleteRow}>X</button>
        </div>
    );
}

export default Doing