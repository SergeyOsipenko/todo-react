import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {updateRowDescription} from '../actions'
import './DoingCard.scss';

function DoingCard() {
	const [isEdit, setIsEdit] = useState(false);
	const inputRef = useRef(null); 
	const dispatch = useDispatch();

	const doings = useSelector(state => state.todo.doings);
	const index = useSelector(state => state.todo.selected);
	const doing = doings[index];
	
	const changeDescription = (value) => {
		dispatch(updateRowDescription({index, value}));
	}

	const toggleEdit = () => {
		setIsEdit(!isEdit);
	}

	useEffect(() => {
		if(isEdit)
			inputRef.current.focus();
	}, [isEdit]);
	
	const status = doing.isCompleted ? 'Completed' : 'Active';
	return(
		<div className="doing-card">
			<div className="doing-card__content">
				<div className="doing-card__title">Name</div>
				<span className="doing-card__value">{doing.value}</span>
				
				<div className="doing-card__title">Status</div>
				<span className="doing-card__value">{status}</span>
				
				<div className="doing-card__title">Description</div>
				{isEdit ? 
					<input
						className="doing-card__description"
						onBlur={toggleEdit}
						onChange={(event) => changeDescription(event.target.value)}
						value={doing.description}
						ref={inputRef}
					/> :
					<span className="doing-card__value">{doing.description}</span>
				}
			</div>
			<div className="doing-card__actions">
				{!isEdit ?
					<button 
						className="button"
						onClick={toggleEdit}
					>Edit</button> :
					null
				}
				<Link to="/Board" className="doing-card__link">Back to list</Link>
			</div>
		</div>
	);
}

export default DoingCard;