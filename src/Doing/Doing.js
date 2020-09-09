import React from 'react';
import { Link } from 'react-router-dom';
import './Doing.scss';

function Doing(props) {
    return (
        <div className="doing">
            <label className="check-container">
                <input
                    className='doing-status'
                    type="checkbox"
                    checked={props.status}
                    data-index={props.index}
                    onChange={props.onUpdateRowStatus}/>
                <span className="checkmark"></span>
            </label>
            <Link
                className={`text ${props.status ? 'completed' : ''}`}
                to="/Doing"
                data-index={props.index}
                onClick={props.onSelectRow}
            >{props.value}</Link>
            <div className="spacer"></div>
            <button
                className="deleteRow"
                onClick={props.onDeleteRow}
            >x</button>
        </div>
    );
}

export default Doing