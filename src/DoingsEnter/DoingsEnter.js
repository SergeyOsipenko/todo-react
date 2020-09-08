import React from 'react';
import './DoingsEnter.scss';

function DoingsEnter(props) {
    return (
        <div className="header">
            {props.doings.length > 0 ? [
                <input type="checkbox" key="toggleAll" id="toggleAll" checked={!props.hasUnCompletedElements} onChange={props.onToggleRows}/>,
                <label htmlFor="toggleAll" key="toggleAll-label" className="toggle-all"></label>
             ] : null
            }
            <input className="doingsEnter" placeholder="What needs to be done?" type="text" onKeyPress={props.onAddRow} />
        </div>
    );
}

export default DoingsEnter;