import React from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip'
import './Doing.scss';

function Doing(props) {
	return (
		<div className="doing">
			<label className="doing__check-container">
				<input
					className='doing__status'
					type="checkbox"
					checked={props.status}
					data-index={props.index}
					onChange={props.onUpdateRowStatus}/>
				<span className="doing__checkmark"></span>
			</label>
			<Link
				className={`doing__text ${props.status ? 'doing__text-completed' : ''}`}
				to="/Doing"
				data-tip={props.description}
				data-index={props.index}
				onClick={props.onSelectRow}
			>{props.value}</Link>
			<div className="doing__spacer"></div>
			<button
				className="doing__button-delete"
				onClick={props.onDeleteRow}
			>x</button>
			<ReactTooltip
				delayShow={1000}
				backgroundColor={'#e1e1e1'}
				textColor={'#4d4d4d'}
				effect={'solid'}
				place={'right'}
			/>
		</div>
	);
}

export default Doing