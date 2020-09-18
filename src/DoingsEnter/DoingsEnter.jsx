import React, { Fragment, useRef } from 'react';
import './DoingsEnter.scss';

function DoingsEnter(props) {
	const input = useRef(null);

	const sequenceHasElements = props.doings.length > 0;
	return (
		<div className="header">
			{sequenceHasElements ? (
				<Fragment>
					<input type="checkbox" className="header__toggle-box" id="toggle-box" checked={!props.hasUnCompletedElements} onChange={props.onToggleRows}/>
					<label htmlFor="toggle-box" className="header__toggle-all"></label>
				</Fragment>
			  ) : (null)
			}
			<input
				className="header__doingsEnter"
				placeholder="What needs to be done?"
				type="text"
				onKeyPress={props.onAddRow}
				onChange={props.onEnterRowChange}
				ref={input}
			/>
			{props.hasLetters ? (
				<button className="header__button" onClick={() => props.onExtendedAddRow(input.current)}>+</button>
			) : null}
		</div>
	);
}

export default DoingsEnter;