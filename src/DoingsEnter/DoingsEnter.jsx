import React from 'react';
import './DoingsEnter.scss';

function DoingsEnter(props) {
    const sequenceHasElements = props.doings.length > 0;

    return (
        <div className="header">
            {sequenceHasElements ? (
                <label className="header__toggle-all">
                    <input type="checkbox" checked={!props.hasUnCompletedElements} onChange={props.onToggleRows}/>
                </label>
              )  : (null)
            }
            <input className="header__doingsEnter" placeholder="What needs to be done?" type="text" onKeyPress={props.onAddRow} />
        </div>
    );
}

export default DoingsEnter;