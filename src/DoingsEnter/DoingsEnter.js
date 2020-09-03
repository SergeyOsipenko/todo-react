import React from 'react';
import './DoingsEnter.css';

function DoingsEnter(props) {
    return (
        <div className="header">
            {props.hasElements ? [
                <input type="checkbox" key="toggleAll" id="toggleAll" onChange={props.onToggleAll}/>,
                <label htmlFor="toggleAll" key="toggleAll-label" className="toggle-all"></label>
             ] : null
            }
            <input className="doingsEnter" placeholder="What needs to be done?" type="text" onKeyPress={props.onAddRow} />
        </div>
    );
}

export default DoingsEnter;