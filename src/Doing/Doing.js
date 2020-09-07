import React from 'react';
import './Doing.css';
import {useDispatch} from 'react-redux';
import {deleteRow, updateRowStatus} from '../actions'

function Doing(props) {
    const dispatch = useDispatch();

    return (
        <div className="doing">
            <div className="check-container">
                <input  className='doingStatus' id={`doingStatus_${props.index}`} type="checkbox" checked={props.status} onChange={() => dispatch(updateRowStatus(props.index))}/>
                <label className="checkmark" htmlFor={`doingStatus_${props.index}`}></label>
            </div>
            <label className={`text ${props.status ? 'completed' : ''}`}>{props.value}</label>
            <div className="spacer"></div>
            <button className="deleteRow" onClick={() => dispatch(deleteRow(props.index))}>x</button>
        </div>
    );
}

export default Doing