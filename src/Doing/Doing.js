import React from 'react';
import './Doing.scss';

function Doing(props) {
    return (
        <div className="doing">
            <label className="check-container">
                <input
                    className='doingStatus'
                    type="checkbox"
                    checked={props.status}
                    data-index={props.index}
                    onChange={props.onUpdateRowStatus}/>
                <span className="checkmark"></span>
            </label>
            <label className={`text ${props.status ? 'completed' : ''}`}>{props.value}</label>
            <div className="spacer"></div>
            <button
                className="deleteRow"
                onClick={props.onDeleteRow}
            >x</button>
        </div>
    );
}

export default Doing