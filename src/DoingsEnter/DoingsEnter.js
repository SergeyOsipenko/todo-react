import React from 'react';
import './DoingsEnter.css';
import {useDispatch, useSelector} from 'react-redux';
import {addRow, toggleRows} from '../actions'

function DoingsEnter() {
    const doings = useSelector(state => state.doings);
    const dispatch = useDispatch();

    return (
        <div className="header">
            {doings.length > 0 ? [
                <input type="checkbox" key="toggleAll" id="toggleAll" onChange={(event) => dispatch(toggleRows(event.target.checked))}/>,
                <label htmlFor="toggleAll" key="toggleAll-label" className="toggle-all"></label>
             ] : null
            }
            <input className="doingsEnter" placeholder="What needs to be done?" type="text" onKeyPress={(event) => dispatch(addRow({key: event.key, element: event.target}))} />
        </div>
    );
}

export default DoingsEnter;