import React from 'react';
import './Doing.css';
import {useDispatch} from 'react-redux';
import {deleteRow, updateRowStatus} from '../actions'

function Doing(props) {
    const dispatch = useDispatch();

    return (
        <div className="doing">
            <input  className='doingStatus' id="doingStatus" type="checkbox" checked={props.status} onChange={() => dispatch(updateRowStatus(props.index))}/>
            <label className="text">{props.value}</label>
            <div className="spacer"></div>
            <button className="deleteRow" onClick={() => dispatch(deleteRow(props.index))}>X</button>
        </div>
    );
}

export default Doing